import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] // This should start as an empty array
  },
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      // console.log("Adding item:", item); // Log the item being added // use console when you find any trouble
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item exists
      } else {
        // Add new item to the cart
        state.items.push({ ...item, quantity: 1 });
      }
      // console.log("Updated cart items:", state.items); // Log updated cart items
    },
    removeItem(state, action) { 
      const itemId = action.payload.id;
      const existingItem = state.items.find(i => i.id === itemId);
      if (existingItem) {
        existingItem.quantity -= 1; // Decrement quantity
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== itemId); // Remove item if quantity is 0
        }
      }
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(i => i.id === id);
      if (existingItem) {
        existingItem.quantity = quantity; // Update quantity
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== id); // Remove item if quantity is 0
        }
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
