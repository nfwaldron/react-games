import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop } from "../backdrop";
import { Card } from "../card";
import { OnOutsideClick } from "../on-outside-click";
import { ScrollLock } from "components/scroll-lock";
import { CloseButton } from "./CloseButton";
import { mediaQueries, radii } from "ui/theme";

export type ModalProps = {
    open: boolean;
    onCloseRequested: () => void;
};

export const Modal: React.FC<ModalProps> = ({
    open,
    children,
    onCloseRequested,
    ...innerProps
}) => {
    if (typeof window === "undefined" || !open) {
        return null;
    }

    useEffect(() => {
        const handleEsc = (event: { keyCode: number }) => {
            if (event.keyCode === 27) {
                onCloseRequested();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return createPortal(
        <Backdrop css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            [mediaQueries.sm]: {
                padding: 16,
            },
        }}>
            <Card
                css={{
                    margin: "auto",
                    backgroundColor: "FBFBFB",
                    width: "100%",
                    borderRadius: "0",
                    overflow:"hidden",
                    [mediaQueries.sm]: {
                        width: "initial",
                        borderRadius: radii.polished,
                    },
                }}
                role="dialog"
                {...innerProps}
            >
                <ScrollLock>
                    <OnOutsideClick onOutsideClick={onCloseRequested}>
                        <CloseButton onCloseRequested={onCloseRequested} />
                        {children}
                    </OnOutsideClick>
                </ScrollLock>
            </Card>
        </Backdrop>,
        document.body
    );
};
