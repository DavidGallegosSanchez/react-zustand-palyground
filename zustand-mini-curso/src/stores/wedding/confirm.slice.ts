import { StateCreator } from "zustand";

export interface ConfirmationSlice {
  isConfirm: boolean;

  setIsConfirm: (confirm: boolean) => void;
}

export const createConfirmationSlice: StateCreator<ConfirmationSlice> = (
  set,
) => ({
  isConfirm: false,

  setIsConfirm: (confirm: boolean) => set({ isConfirm: confirm }),
});
