<template>
  <div class="flex flex-wrap justify-center">
    <card v-for="product in products" :key="product.id" :id="product.id" :name="product.name" :price="product.price"
      :quantity="product.quantity" :image="product.image" @increment="increment" @decrement="decrement"
      @add-to-cart="addToCart"></card>
  </div>
</template>

<script>
import Card from '../Card.vue';
export default {
  components: {
    Card,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Produto 1', price: 10, image: '/src/assets/product.jpg', quantity: 1 },
        { id: 2, name: 'Produto 2', price: 20, image: '/src/assets/product.jpg', quantity: 0 },
        { id: 3, name: 'Produto 3', price: 30, image: '/src/assets/product.jpg', quantity: 0 },
        { id: 4, name: 'Produto 4', price: 40, image: '/src/assets/product.jpg', quantity: 0 },
        { id: 5, name: 'Produto 5', price: 50, image: '/src/assets/product.jpg', quantity: 0 },
        { id: 6, name: 'Produto 6', price: 60, image: '/src/assets/product.jpg', quantity: 0 },
        { id: 7, name: 'Produto 7', price: 70, image: '/src/assets/product.jpg', quantity: 0 },
        { id: 8, name: 'Produto 8', price: 80, image: '/src/assets/product.jpg', quantity: 0 },
        { id: 9, name: 'Produto 9', price: 90, image: '/src/assets/product.jpg', quantity: 0 },
        { id: 10, name: 'Produto 10', price: 100, image: '/src/assets/product.jpg', quantity: 0 }
      ]
    };
  },
  methods: {
    increment(id) {
      const product = this.products.find(p => p.id === id);
      if (product) {
        product.quantity++;
      }
    },
    decrement(id) {
      const product = this.products.find(p => p.id === id);
      if (product && product.quantity > 0) {
        product.quantity--;
      }
    },
    addToCart(id) {
      console.log('Produto adicionado ao carrinho:', product);
    },
  },
};
</script>

<style></style>