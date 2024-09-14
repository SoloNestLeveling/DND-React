import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";



export const TodoContainer = styled.div`
display: grid;
align-items: center;
width: 100%;
height: 500px;
grid-template-columns: repeat(3,minmax(300px, 1fr));
grid-auto-rows: 340px;
gap: 30px;



@media (max-width: 927px) {
    grid-template-columns: repeat(2,minmax(300px, 1fr));
}
@media (max-width: 650px) {
    grid-template-columns: repeat(1,minmax(300px, 1fr));
    
}


`


export interface ISanpProps {
    isDraggingOver: boolean
}

export const DropBoard = styled.div<ISanpProps>`
display: flex;
flex-direction: column;
justify-self: center;
align-items: center;
border-radius: 16px;
width: 300px;
height: 340px;
overflow-y:auto;
background: ${(props) => props.isDraggingOver ? "#B5CFB7" : props.theme.board.bgColor};
margin-top: 200px;

`



export const ListBoard = styled.div`
    display: flex;
    width: 300px;
    height: 300px;
    overflow-y: auto;
    flex-direction: column;
    align-items: center;
`



export const ListBox = styled.div`
    display: flex;
    align-items: center;
    width: 260px;
    min-height: 30px;
    background-color: ${(props) => props.theme.board.listBox.bgColor};
    margin: 8px;
    padding:10px;
    border-radius: 5px;
    color: ${(props) => props.theme.board.listBox.textColor};
    font-weight: 600;

`
