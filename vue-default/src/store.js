import { createStore } from "vuex";
//중앙 저장소 store --> 회원 정보, 장바구니 같은 곳에서 사용할 수 있다.

const store = createStore({
  state() {
    return {
      count: 0,
      cart: [
        { product_id: 1, product_name: "아이폰", category: "A" },
        { product_id: 2, product_name: "마우스", category: "B" },
      ],
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  getters: {
    cartCount: (state) => {
      return state.cart.length;
    },
    productACount: (state) => {
      return state.cart.filter((p) => p.category == "A").length;
    },
  },
});

export default store;
