import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "../../types/slices/CartSlice";




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
        state.items.push({ ...action.payload });
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
