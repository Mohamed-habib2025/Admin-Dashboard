import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

const saveToLocalStorage = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("products");
  return data ? JSON.parse(data) : null;
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product, { getState }) => {
    const response = await axios.put(`${API_URL}/${product.id}`, product);
    const updatedProduct = response.data;

    const oldProduct = getState().products.items.find((p) => p.id === product.id);

    return { ...oldProduct, ...updatedProduct };
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;

        const localData = loadFromLocalStorage();
        if (localData) {
          state.items = localData;
        } else {
          state.items = action.payload;
          saveToLocalStorage(state.items);
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Delete
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload);
        saveToLocalStorage(state.items); 
      })

      // Update
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.items = state.items.map((p) =>
          p.id === action.payload.id ? action.payload : p
        );
        saveToLocalStorage(state.items); 
      });
  },
});

export default productsSlice.reducer;
