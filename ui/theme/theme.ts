import { ThemeFonts } from "./fonts";
import { ThemeBreakpoints } from "./breakpoints";
import { ThemeRadii } from "./radii";

declare module "@emotion/react" {
    export interface Theme {
        fonts: ThemeFonts;
        mediaQueries: ThemeBreakpoints;
        radii: ThemeRadii;
        breakpoints: ThemeBreakpoints;
    }
}
