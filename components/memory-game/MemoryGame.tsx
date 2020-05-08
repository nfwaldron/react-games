import React, { useState, useEffect } from "react";
import uuid from "uuid";
import { CardFaces } from "utils";
import cloneDeep from "clone-deep";
import { GameBoard } from "./GameBoard";
import { FaceCardProps } from "components/face-card";
import { Modal } from "components/modal";

// TODO: Look into making more generic method to initialize cards for the future
// This method is pretty specific to this particular game

type FaceCard = Pick<FaceCardProps, "cardFaceUrl" | "cardId" | "isFaceDown">;

const generateCards = (count: number) => {
  if (count % 2 !== 0) {
    return null;
  }
  const sortedCardFaceImages = CardFaces.sort(() => 0.5 - Math.random());
  const faceCards = sortedCardFaceImages
    .slice(0, count / 2)
    .map((cardFaceImage: string) => ({
      cardId: uuid.v4(),
      cardFaceUrl: cardFaceImage,
      isFaceDown: true,
    }))
    .flatMap((e: FaceCard) => [e, { ...cloneDeep(e), cardId: uuid.v4() }]);

  return faceCards.sort(() => 0.5 - Math.random());
};

export type MemoryGameProps = {
  nbCards: number;
};

export const MemoryGame: React.FC<MemoryGameProps> = ({ nbCards }) => {
  const [cards, setCards] = useState<FaceCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [solvedCards, setSolvedCards] = useState<string[]>([]);
  const [isOpen, setOpen] = useState<boolean>(false);
  let [gameRounds, setGameRounds] = useState(0);
  const [disabled, setDisabled] = useState(false);

  // TODO add restart game functionality
  useEffect(() => {
    setCards(generateCards(nbCards));
  }, []);

  useEffect(() => {
    if (solvedCards.length === nbCards) {
      setOpen(true);
    }
  }, [solvedCards]);

  const onClick = (id: string) => {
    setDisabled(true);
    if (flippedCards.length === 0) {
      setFlippedCards([id]);
      setDisabled(false);
    } else {
      setGameRounds(gameRounds + 1);
      console.log(gameRounds);
      handleCardMatching(id);
    }
  };

  const handleCardMatching = (id: string) => {
    if (flippedCards.includes(id)) {
      setDisabled(false);
      return;
    }
    setFlippedCards([...flippedCards, id]);
    if (isMatch(id)) {
      setSolvedCards([...solvedCards, flippedCards[0], id]);
      resetCards();
    } else {
      setTimeout(resetCards, 2000);
    }
  };

  const isMatch = (id: string) => {
    const clickedCard = cards.find((card) => card.cardId === id);
    const flippedCard = cards.find((card) => flippedCards[0] === card.cardId);
    return flippedCard.cardFaceUrl === clickedCard.cardFaceUrl;
  };

  const resetCards = () => {
    setFlippedCards([]);
    setDisabled(false);
  };

  return (
    // TODO add time countdown component and game round component above game board
    <div>
      <Modal open={isOpen} onCloseRequested={() => setOpen(false)}>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            columnGap: 16,
            margin: 16,
          }}
        >
          <h2>Game Over</h2>
          <h2>{`Game Rounds: ${gameRounds}`}</h2>
        </div>
      </Modal>
      <GameBoard
        faceCards={cards}
        flippedCards={flippedCards}
        onClick={onClick}
        solvedCards={solvedCards}
        disabled={disabled}
      />
    </div>
  );
};
