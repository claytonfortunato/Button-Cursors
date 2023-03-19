import * as C from "./styles";

import Button from "./components/Button";

import { useRef, useState } from "react";
import { buttons, ButtonType } from "./types/buttons";

function App() {
  const [list, setList] = useState<ButtonType>(buttons);

  const dragItem = useRef<number>();
  const dragOverItem = useRef<number>();

  const handleDragStart = (
    e: React.DragEvent<HTMLButtonElement>,
    position: number
  ) => {
    e.stopPropagation();
    dragItem.current = position;
  };

  const handleDragEnter = (
    e: React.DragEvent<HTMLButtonElement>,
    position: number
  ) => {
    e.stopPropagation();
    dragOverItem.current = position;
  };

  const handleDropPartially = (position: number) => {
    const dragItemCurrent = dragItem.current;
    const dragOverItemCurrent = dragOverItem.current;

    if (dragItemCurrent === undefined || dragOverItemCurrent === undefined)
      return;

    if (dragItemCurrent === dragOverItemCurrent) return;

    const newList = [...list];
    const item = newList[dragItemCurrent];
    newList.splice(dragItemCurrent, 1);
    newList.splice(position, 0, item);

    dragItem.current = position;
    dragOverItem.current = position;

    setList(newList);
  };

  return (
    <C.Container>
      <C.Header>
        <h1>Teste os botões</h1>
        <span>
          Interaja com os botões e observe a mudança de aparência e de cursores
        </span>
      </C.Header>
      <C.Column>
        {list.map((item, idx) => (
          <Button
            onDragStart={(e) => {
              e.currentTarget.style.cursor = "grabbing";
              handleDragStart(e, idx);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleDropPartially(idx);
            }}
            onDragCapture={(e) => {
              e.preventDefault();
              e.stopPropagation();
              e.currentTarget.style.cursor = "grabbing";
              e.currentTarget.style.opacity = "0";
            }}
            onDragEnter={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleDragEnter(e, idx);
            }}
            onDragEnd={(e) => {
              handleDropPartially(idx);
              e.currentTarget.style.cursor = "move";
              e.currentTarget.style.opacity = "1";
            }}
            key={item.id}
            {...item.props}
          >
            {item.label}
          </Button>
        ))}
      </C.Column>
    </C.Container>
  );
}

export default App;
