import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  qty: number;
  stock?: number;
  description?: string;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const findIndex = (items: CartItem[], id: CartItem["id"]) =>
  items.findIndex((i) => i.id === id);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const idx = findIndex(state.items, action.payload.id);
      if (idx > -1) {
        // increment quantity if already in cart
        state.items[idx].qty += action.payload.qty || 1;
      } else {
        state.items.push({ ...action.payload, qty: action.payload.qty || 1 });
      }
    },
    removeItem: (state, action: PayloadAction<CartItem["id"]>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    updateQty: (
      state,
      action: PayloadAction<{ id: CartItem["id"]; qty: number }>
    ) => {
      const idx = findIndex(state.items, action.payload.id);
      if (idx > -1) {
        state.items[idx].qty = action.payload.qty;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
