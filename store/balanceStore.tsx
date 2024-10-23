import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type Item = {
  id: number
  date: string
  amount: number
  description: string
  type: string
}

type ItemState = {
  items: Item[]
  addItemToBalance: (item: Item) => void
  removeItemFromBalance: (id: number) => void
  removeAllFromBalance: () => void
  total: () => number
}

export const useBalanceStore = create<ItemState>()(
  persist(
    (set, get) => ({
      items: [],

      addItemToBalance: (item: Item) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      removeItemFromBalance: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      removeAllFromBalance: () => set({ items: [] }),

      total: () => get().items.reduce((acc, item) => acc + item.amount, 0),
      
    }),

    {
      name: 'BalanceStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
