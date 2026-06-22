import { create } from "zustand";
import { createPersonSlice, PersonSlice } from "./person.slice";
import { devtools } from "zustand/middleware";
import { createGuestSlice, GuestSlice } from "./guest.slice";
import { createDataSlice, DateSlice } from "./date.slice";
import { ConfirmationSlice, createConfirmationSlice } from "./confirm.slice";

type ShareState = PersonSlice;

export const useWeddingBoundStore = create<
  PersonSlice & GuestSlice & DateSlice & ConfirmationSlice
>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestSlice(...a),
    ...createDataSlice(...a),
    ...createConfirmationSlice(...a),
  })),
);
