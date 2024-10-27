import { modelItem } from "@/types/models";
import { create } from "zustand";

export const modelsStore = create((set) => ({
  models: [],
  updateModels: (selectedModels: modelItem[]) =>
    set({ models: selectedModels }),
}));

export default modelsStore;
