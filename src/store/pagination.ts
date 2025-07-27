import { create } from "zustand";

interface PaginationProps {
  pageIndex: number;
  pageSize: number;
  has_next: boolean;
  total_count: number;
}

interface PaginationStore {
  pagination: PaginationProps;
  setPagination: (pagination: PaginationProps) => void;
  setPerPage: (perPage: number) => void;
  setPage: (page: number) => void;
  setHasNext: (hasNext: boolean) => void;
  setTotalCount: (totalCount: number) => void;
  setTotalNext: (hasNext: boolean, totalCount: number) => void;
  resetPagination: () => void;
}

export const usePaginationStore = create<PaginationStore>((set) => ({
  pagination: { pageIndex: 0, pageSize: 40, has_next: false, total_count: 0 },
  setPagination: (pagination: PaginationProps) => set({ pagination }),
  setPerPage: (perPage: number) =>
    set((state) => ({
      pagination: { ...state.pagination, pageSize: perPage },
    })),
  setPage: (page: number) =>
    set((state) => ({
      pagination: { ...state.pagination, pageIndex: page },
    })),
  setHasNext: (hasNext: boolean) =>
    set((state) => ({
      pagination: { ...state.pagination, has_next: hasNext },
    })),
  setTotalCount: (totalCount: number) =>
    set((state) => ({
      pagination: { ...state.pagination, total_count: totalCount },
    })),
  setTotalNext: (hasNext: boolean, totalCount: number) =>
    set((state) => ({
      pagination: {
        ...state.pagination,
        has_next: hasNext,
        total_count: totalCount,
      },
    })),
  resetPagination: () =>
    set(() => ({
      pagination: {
        pageIndex: 0,
        pageSize: 10,
        has_next: false,
        total_count: 0,
      },
    })),
}));
