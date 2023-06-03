import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

// Recoil 상태를 로컬 스토리지에 저장하고 복원하기 위해 recoil-persist 라이브러리 사용

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

// recoil-persist에서 제공하는 recoilPersist 함수를 사용하여 persistAtom 생성

const { persistAtom } = recoilPersist({
  key: "todoLocal", // Recoil 상태를 식별하기 위한 고유 키
  storage: localStorage, // 로컬 스토리지 사용
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
  effects_UNSTABLE: [persistAtom], // categoryState의 상태를 로컬 스토리지에 저장하고 복원
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom], // toDoState의 상태를 로컬 스토리지에 저장하고 복원
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
