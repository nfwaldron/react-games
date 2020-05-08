import React from "react";
import { FiX } from "react-icons/fi";

type InnerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type Props = {
    onCloseRequested: () => void;
} & InnerProps;

export const CloseButton: React.FC<Props> = ({
    children,
    onCloseRequested,
    ...innerProps
}) => {
    return (
        <div {...innerProps} css={{
            display: "grid",
            justifyContent:"end",
            padding: 16,
        }}>
            <button
                onClick={onCloseRequested}
                css={{
                    display: "flex",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    fontSize: 14,
                    alignItems: "center",
                    backgroundColor: "transparent",
                }}
            >
                <span css={(theme) => ({
                    borderBottom: `1px solid #191919`,
                    marginRight: 8,
                })}>
                    Close
                </span>
                <FiX size={16} />
            </button>
        </div>
    );
};
