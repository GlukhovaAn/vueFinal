import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [], // Array to store products with quantities
    actualProduct: {},
    modalVisibility: false
  }),
  actions: {
    toggleCartModal() {
      this.modalVisibility = !this.modalVisibility
    },
    addToCart(product) {
      const existingProduct = this.cart.find(item => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity += 1 // Increment quantity if product already exists
      } else {
        this.cart.push({ ...product, quantity: 1 }) // Add product with initial quantity of 1
      }
      this.actualProduct = product
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(product => product.id !== productId)
    },
    updateQuantity(productId, quantity) {
      const product = this.cart.find(item => item.id === productId)
      if (product && quantity > 0) {
        product.quantity = quantity
      } else if (product && quantity <= 0) {
        this.removeFromCart(productId) // Remove product if quantity is zero or less
      }
    },
    clearActualProduct() {
      this.actualProduct = {}
    },
    clearCart() {
      this.cart = []
    }
  },
  getters: {
    cartCount: state => state.cart.reduce((total, product) => total + product.quantity, 0),
    actuallyAdded: state => state.actualProduct,
    modalIsOpen: state => state.modalVisibility,
    getCart: state => state.cart,
    cartTotalPrice: state =>
      state.cart.reduce(
        (total, product) => total + (product.discountedPrice || product.price) * product.quantity,
        0
      )
  }
})
