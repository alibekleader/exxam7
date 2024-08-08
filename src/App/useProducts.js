import axios from "axios";
import { create } from "zustand";

const useProduct = create((set) => ({
  loading: false,
  products: [],
  error: null,
  chosenFood: [],
  Foods: [],

  getProducts: async () => {
    set(() => ({
      loading: true,
    }));
    try {
      const res = await axios.get("http://localhost:3000/prodacts");
      const data = await res.data;
      set(() => ({
        products: data,
      }));
    } catch (err) {
      set(() => ({
        error: err.message,
      }));
    } finally {
      set(() => ({
        loading: false,
      }));
    }
  },
  addTodo: async (todo) => {
    set(() => ({
      loading: true,
    }));
    try {
      await axios.post("http://localhost:3000/user", todo);
    } catch (err) {
      set(() => ({
        error: err.message,
      }));
    } finally {
      set(() => ({
        loading: false,
      }));
    }
  },

  getChosenPro: async () => {
    set(() => ({
      loading: true,
    }));
    try {
      const res = await axios.get("http://localhost:3000/user");
      const data = await res.data;
      set(() => ({
        Foods: data,
      }));
    } catch (err) {
      set(() => ({
        error: err.message,
      }));
    } finally {
      set(() => ({
        loading: false,
      }));
    }
  },
}));

export default useProduct;
