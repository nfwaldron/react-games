import React from "react";

type InnerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type BackdropProps = InnerProps;

export const Backdrop: React.FC<BackdropProps> = ({ children, ...backdropProps }) => {
    return (
        <div
            {...backdropProps}
            css={{
                position: "fixed",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, .5)",
            }}
        >
            {children}
        </div>
    );
};
