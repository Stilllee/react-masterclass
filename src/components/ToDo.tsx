import { Categories, IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  // 삭제 함수
  const onDelete = () => {
    setToDos((oldToDos) => {
      // 현재 요소의 id와 일치하지 않는 요소들로 새로운 배열 생성
      const newToDos = oldToDos.filter((toDo) => toDo.id !== id);
      return newToDos; // 삭제된 요소를 포함하지 않은 새로운 배열 반환
    });
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button onClick={onDelete}>Delete</button> {/* 삭제 버튼 */}
    </li>
  );
}

export default ToDo;
