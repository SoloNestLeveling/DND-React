import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { faMoon, faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { useRecoilState, useSetRecoilState } from "recoil";
import { TodoAtom } from "./atoms";
import { useEffect, useState } from "react";
import { ThemeAtom } from "../theme/theme-atom";

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
`

export const HeaderComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.header.textColor};
    padding: 0 50px;
    font-size: 40px;
    width: 100%;
    height: auto;
`


export const IconBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
`

export const AddBoardIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    color: ${(props) => props.theme.header.addBoardBtn};

    &:hover{
    color: rgba(0,0,0,0.5);
}

&:active{
    color: #560d0d;
}
`

export const ThemeBtn = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 40px;
    margin-left: 30px;
    border-radius: 30px;
    background-color: ${(props) => props.theme.header.themeBtn.bgColor};
    box-shadow: inset 0px 3px 3px rgba(0, 0, 0, 0.5);
`

export interface ILeftProps {
    left: number
}

export const InnerCircle = styled.div<ILeftProps>`
    display: flex;
    position: absolute;
    left: ${(props) => props.left}px;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 26px;
    background-color: ${(props) => props.theme.header.themeBtn.btnColor};
    box-shadow: inset -3px -3px 3px rgba(0, 0, 0, 0.5), inset 3px 3px 6px rgba(255, 255, 255, 0.3);
    transition: all 0.4s ease-in-out;
    &:hover{
        cursor: pointer;
    }
`


export interface IVisibleProps {
    isSunVisible: boolean
}

export const Sun = styled.span<IVisibleProps>`
    visibility: ${(props) => props.isSunVisible ? "hidden" : "visible"};

`

export const Mun = styled.span<IVisibleProps>`
position: absolute;
z-index: 1;
visibility: ${(props) => props.isSunVisible ? "visible" : "hidden"};
    
`

export interface IHeaderProps {
    onclick: () => void,

}


function MainHeader() {

    const [todos, setTodos] = useRecoilState(TodoAtom);

    const onAddBoard = () => {

        const addBoard = prompt('보드 추가')

        if (addBoard !== null) {

            setTodos((prev) => ({
                ...prev,
                [addBoard]: []
            }))
        };
    };

    const [isSunVisible, setIsSunVisible] = useState(true);
    const [left, setLeft] = useState(0)
    const setIsDark = useSetRecoilState(ThemeAtom)

    const onClickTheme = () => {
        setIsSunVisible((prev) => !prev)
        setIsDark((prev) => !prev)

    }

    useEffect(() => {
        setLeft(isSunVisible ? 0 : 50)
    }, [isSunVisible])



    return (

        <Header>
            <HeaderComponent>
                <h1>Drag And Drop Todo List</h1>
                <IconBox>
                    <AddBoardIcon onClick={onAddBoard} icon={faSquarePlus} size="1x" />
                    <ThemeBtn>
                        <InnerCircle onClick={onClickTheme} left={left}>
                            <Sun isSunVisible={isSunVisible}>☀️</Sun>
                            <Mun isSunVisible={isSunVisible}><FontAwesomeIcon icon={faMoon} /></Mun>
                        </InnerCircle>
                    </ThemeBtn>
                </IconBox>
            </HeaderComponent>
        </Header>

    );
};

export default MainHeader;