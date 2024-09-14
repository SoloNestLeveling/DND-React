import { useRecoilState } from "recoil"
import { styled } from "styled-components"
import { TodoAtom } from "./atoms"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faMinus } from "@fortawesome/free-solid-svg-icons"



export const BoardHeaderBox = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
align-items: center;
color: ${(props) => props.theme.board.boardHeader.textColor};
width: 100%;
height: 50px;
background-color: ${(props) => props.theme.board.boardHeader.bgColor};


h1{
    font-size: 24px;
    font-weight:600;
}

`

export const AddTodoIcon = styled(FontAwesomeIcon)`
color: ${(props) => props.theme.board.boardHeader.btnColor};

cursor: pointer;

&:hover{
    color: rgba(0,0,0,0.5);
}

&:active{
    color: #560d0d;
}
`


export const DeletBoardIcon = styled(AddTodoIcon)`
margin-left: 10px;

`

export const HeaderIconBox = styled.div`
    display: flex;
    align-content: center;
`

export interface IBoardHeaderProps {
    keyProps: string;
}


function BoardHeader({ keyProps }: IBoardHeaderProps) {


    const [todos, setTodos] = useRecoilState(TodoAtom);

    const onClick = (key: string) => {
        const addList = prompt("할일 추가");

        if (addList !== null) {
            setTodos((prev) => ({
                ...prev,
                [key]: [...prev[key], { id: Date.now().toString(), text: addList }]
            }))
        }
    };


    const onDeletBoard = (key: string) => {
        const confirmWinow = window.confirm('해당 보드를 삭제 하시겠습니까?')

        if (confirmWinow) {
            setTodos((prev) => {
                const newArray = { ...prev };

                const { [key]: _, ...reset } = newArray;

                return reset

            });
        };


    };



    return (
        <BoardHeaderBox>
            <h1>{keyProps}</h1>
            <HeaderIconBox>
                <AddTodoIcon onClick={() => { onClick(keyProps) }} icon={faPenToSquare} size="lg" />
                <DeletBoardIcon onClick={() => { onDeletBoard(keyProps) }} icon={faMinus} size="lg" />
            </HeaderIconBox>
        </BoardHeaderBox>

    )
};

export default BoardHeader;