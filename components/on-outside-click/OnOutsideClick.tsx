import React, { useRef, useEffect } from "react";

type InnerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type Props = {
    onOutsideClick: () => void;
    eventType?: "mousedown" | "click" | "mouseup";
} & InnerProps;
export const OnOutsideClick: React.FC<Props> = ({
    eventType = "mousedown",
    onOutsideClick,
    children,
    ...elementAttributes
}) => {
    const node = useRef<HTMLDivElement>(null);

    const handleClick = (e: Event) => {
        if (!e.composedPath().includes(node.current)) {
            onOutsideClick();
        }
    };

    useEffect(() => {
        document.addEventListener(eventType, handleClick);
        return () => document.removeEventListener(eventType, handleClick);
    }, []);

    return (
        <div {...elementAttributes} ref={node}>
            {children}
        </div>
    );
};
