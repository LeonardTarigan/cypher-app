import { create } from "zustand";

interface HomeInboxState {
  currentTab: number;
  currentPage: number;
  setCurrentTab: (tab: number) => void;
  setCurrentPage: (page: number) => void;
}

export const useHomeInboxStore = create<HomeInboxState>((set) => ({
  currentTab: 1,
  currentPage: 1,
  setCurrentTab: (tab) => set(() => ({ currentTab: tab })),
  setCurrentPage: (page) => set(() => ({ currentPage: page })),
}));
