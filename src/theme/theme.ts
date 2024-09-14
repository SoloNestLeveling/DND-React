import { DefaultTheme } from "styled-components/dist/types";

export const LightMode: DefaultTheme = {

    bgColor: "linear-gradient(45deg, #F3F8FF, #EBF4F6,#EEF7FF )",
    header: {
        textColor: "black",
        addBoardBtn: "#395B64",
        themeBtn: {
            bgColor: "#A5C9CA",
            btnColor: "#395B64"
        }
    },
    board: {
        bgColor: "linear-gradient(45deg, #64638F, #9795CF, #CBC9FF )",
        boardHeader: {
            bgColor: "rgba(85, 85, 85, 0.3)",
            btnColor: "white",
            textColor: "white",
        },
        listBox: {
            bgColor: "white",
            textColor: "black",
        }

    },
};




export const DarkMode: DefaultTheme = {

    bgColor: "linear-gradient(45deg, #000000, #282A3A )",
    header: {
        textColor: "white",
        addBoardBtn: "white",
        themeBtn: {
            bgColor: "rgb(255, 255, 255)",
            btnColor: "rgb(75, 75, 75)"

        }
    },
    board: {
        bgColor: "linear-gradient(45deg, #F3F8FF, #EBF4F6,#EEF7FF )",
        boardHeader: {
            bgColor: "rgba(85, 85, 85, 0.5)",
            btnColor: "white",
            textColor: "white",
        },
        listBox: {
            bgColor: "#A5C9CA",
            textColor: "#395B64",
        }

    },
};