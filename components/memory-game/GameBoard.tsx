import React from "react";
import { mediaQueries } from "ui/theme";
import { FaceCard, FaceCardProps } from "components/face-card";

export type GameBoardProps = {
  faceCards: FaceCardProps[];
  flippedCards: string[];
  disabled: boolean;
  solvedCards: string[];
  onClick: (id: string) => void;
};
export const GameBoard: React.FC<GameBoardProps> = ({
  faceCards,
  flippedCards,
  disabled,
  solvedCards,
  onClick,
}) => {
  return (
    /// TODO: Figure out issues with @emotion/styled to be able to use a styled component here
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(2, auto)",
        [mediaQueries.sm]: {
          gridTemplateColumns: "repeat(4, auto)",
        },
        [mediaQueries.md]: {
          gridTemplateColumns: "repeat(5, auto)",
        },
        [mediaQueries.lg]: {
          gridTemplateColumns: "repeat(6, auto)",
        },
        gridGap: 10,
        justifyContent: "center",
      }}
    >
      {faceCards.map((card) => (
        <FaceCard
          key={card.cardId}
          onClick={() => onClick(card.cardId)}
          cardFaceUrl={card.cardFaceUrl}
          cardId={card.cardId}
          isFaceDown={flippedCards.includes(card.cardId)}
          isDisabled={disabled || solvedCards.includes(card.cardId)}
          isSolved={solvedCards.includes(card.cardId)}
        />
      ))}
    </div>
  );
};
