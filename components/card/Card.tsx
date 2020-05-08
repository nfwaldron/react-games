import React from "react";
import { radii } from "ui/theme";

type InnerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type CardProps = InnerProps;

export const Card: React.FC<CardProps> = ({
    children,
    ...divProps
}) => {
    return (
        <div
            {...divProps}
            css={{
                backgroundColor: "#fff",
                borderRadius: radii.polished,
                boxShadow: "0 2px 10px 0 rgba(0,0,0,0.1)",
            }}
        >
            {children}
        </div>
    );
};
