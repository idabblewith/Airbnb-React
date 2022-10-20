import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}

const breakpoints = {
    sm: '320px',
    md: '515px',
    lg: '960px',
    xl: '1455px',
    '2xl': '2000',
    '3xl': '2400',
    '4xl': '2832',
    // '5xl': '2655',
}

const theme = extendTheme({ config, breakpoints })
export default theme;