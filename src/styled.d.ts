import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        background: strign;
        boxColor: string;
        colors: {
            main: string;
            secondary: string;
        };
    }
}
