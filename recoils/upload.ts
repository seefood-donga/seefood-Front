import { atom } from "recoil";
export const uploadImageAtom = atom<string>({
  key: "uploadImage",
  default: "",
});

export const nowCategoryAtom = atom<string>({
  key: "nowCategory",
  default: "",
});

export const tagsAtom = atom<Array<string>>({
  key: "tags",
  default: [],
});
