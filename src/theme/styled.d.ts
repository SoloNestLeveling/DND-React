import "styled-components"
import { StringLiteral } from "typescript";

declare module "styled-components" {

    export interface DefaultTheme {

        bgColor: string;
        header: {
            textColor: string;
            addBoardBtn: string,
            themeBtn: {
                bgColor: string;
                btnColor: string;
            }
        }

        board: {
            bgColor: string;
            boardHeader: {
                bgColor: string;
                btnColor: string;
                textColor: string;
            }
            listBox: {
                bgColor: string;
                textColor: string;
            };

        };

    };
};
