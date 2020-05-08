import React from "react";
import { ThemeProvider } from "@emotion/react";
import { mediaQueries, breakpoints } from "./breakpoints";
import { radii } from "./radii";

export const GlobalThemeProvider: React.FC = ({ children }) => (
  <ThemeProvider
    theme={{
      mediaQueries,
      breakpoints,
      radii,
    }}
  >
    {children}
  </ThemeProvider>
);