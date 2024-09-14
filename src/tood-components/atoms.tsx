import { atom } from "recoil";


export interface ITodo {
    id: string,
    text: string,
}

export interface ITodoState {

    [key: string]: ITodo[]
}

export const TodoAtom = atom<ITodoState>({
    key: "todo",
    default: {
        "Todo": [],
        "Doing": [],
        "Done": [],
    }
})

