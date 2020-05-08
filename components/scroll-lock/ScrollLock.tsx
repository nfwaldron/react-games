import { useEffect } from "react";
import { DivInnerProps } from "models";

type Props = DivInnerProps;
/**
 * @param children
 * @summary any children passed in will remain scrollable
 */
export const ScrollLock: React.FC<Props> = ({ children, ...elementAttributes }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => document.body.style.overflow = "unset";
    }, []);

    return (
        <div {...elementAttributes}>
            {children}
        </div>
    );
};
