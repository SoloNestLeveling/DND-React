import { useRecoilState, } from "recoil";
import { TodoAtom } from "./atoms";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { DropBoard, ListBoard, ListBox, TodoContainer } from "./Todo.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faMinus } from "@fortawesome/free-solid-svg-icons"
import MainHeader from "./Header";
import BoardHeader from "./Board-header";



function Todo() {


    const [todos, setTodos] = useRecoilState(TodoAtom);
    const keys = Object.keys(todos)




    const onDragEnd = ({ destination, source, draggableId }: DropResult) => {

        if (!destination) {
            return
        };

        const setItem = todos[source.droppableId].filter((todo) => todo.id === draggableId);

        if (destination.droppableId === source.droppableId) {

            setTodos((prev) => {

                const oldArray = [...prev[destination.droppableId]] // 얕은 복사로 원배열 불변성 유지!

                oldArray.splice(source.index, 1);
                oldArray.splice(destination.index, 0, ...setItem);

                return {
                    ...prev,
                    [destination.droppableId]: oldArray
                }
            });
        } else {

            setTodos((prev) => {
                const sourceArray = [...prev[source.droppableId]];
                const destinationArray = [...prev[destination.droppableId]];

                sourceArray.splice(source.index, 1);
                destinationArray.splice(destination.index, 0, ...setItem);

                return {
                    ...prev,
                    [source.droppableId]: sourceArray,
                    [destination.droppableId]: destinationArray
                };
            });
        };
    };



    return (
        <>
            <MainHeader />
            <TodoContainer>
                <DragDropContext onDragEnd={onDragEnd}>

                    {keys.map((key) =>
                        <Droppable droppableId={key}>
                            {(magic, snapshot) =>
                                <DropBoard isDraggingOver={snapshot.isDraggingOver} >
                                    <BoardHeader keyProps={key} />
                                    <ListBoard ref={magic.innerRef} {...magic.droppableProps}>
                                        {todos[key].map((todo, index) =>
                                            <Draggable key={todo.id} index={index} draggableId={todo.id}>
                                                {(magic) =>
                                                    <ListBox ref={magic.innerRef} {...magic.dragHandleProps} {...magic.draggableProps}>
                                                        <span>{todo.text}</span>
                                                    </ListBox>
                                                }
                                            </Draggable>
                                        )}
                                        {magic.placeholder}
                                    </ListBoard>

                                </DropBoard>

                            }

                        </Droppable>
                    )}

                </DragDropContext>
            </TodoContainer>
        </>
    );
};

export default Todo;