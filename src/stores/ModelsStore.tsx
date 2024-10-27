import { modelItem } from "@/types/models";
import { create } from "zustand";

export const modelsStore = create((set) => ({
  models: [],
  removeModel: (selectedModel: modelItem) =>
    set((state) => ({
      models: state.models.filter(
        (model: modelItem) => selectedModel.id !== model.id,
      ),
    })),
  updateModels: (selectedModels: modelItem[]) =>
    set({ models: selectedModels }),
}));

export default modelsStore;
