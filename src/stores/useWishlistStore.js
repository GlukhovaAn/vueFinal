import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    wishlist: [] // Array to store products
  }),
  actions: {
    addToWishlist(product) {
      if (!this.isInWishlist(product.id)) {
        this.wishlist.push(product)
      }
    },
    removeFromWishlist(productId) {
      this.wishlist = this.wishlist.filter(product => product.id !== productId)
    },
    isInWishlist(productId) {
      return this.wishlist.some(product => product.id === productId)
    }
  },
  getters: {
    wishlistCount: state => state.wishlist.length,
    getWishlist: state => state.wishlist
  }
})
