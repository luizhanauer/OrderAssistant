<template>
    <div class="gap-6 p-8">
        <div class="bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center">
          <img :src="image" alt="Produto" class="rounded-xl mb-2 w-50 h-40 object-cover" />
          <h3 class="text-lg font-semibold">{{ name }}</h3>
          <span class="text-xl font-bold text-green-600">R$ {{ price }}</span>
          <div class="flex items-center gap-4 mt-4">
            <button @click="$emit('decrement', id)" class="bg-red-500 text-white px-3 py-1 rounded-lg shadow-xl font-bold hover:bg-red-600">-</button>
            <span class="text-lg font-medium">{{ quantity }}</span>
            <button @click="$emit('increment', id)" class="bg-green-500 text-white px-3 py-1 rounded-lg shadow-xl font-bold hover:bg-green-600">+</button>
          </div>
          <button class="btn-add-cart">Adicionar ao Carrinho</button>
        </div>
      </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        id: Number,
        name: String,
        price: Number,
        image: String,
        quantity: Number,
    }
}
</script>

<style>

</style>