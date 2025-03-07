<template>
    <div class="flex flex-wrap justify-center">
        {{ store }}
        <ul>
            <li v-for="category in store.data">
                {{ category.nome }}
                <ul>
                    <li v-for="produto in category.produto">
                        {{ produto.nome }} -
                        {{ produto.descrição }} -
                        {{ produto.preço }}
                        <Card :produto="produto" :name="produto.nome" :price="produto.preço" :quantity="0" :image="imgTemp" />
                        <ul>
                            <li v-for="adicional in produto.adicionais">
                                {{ adicional.nome }} -
                                {{ adicional.preço }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useProductStore } from '/src/stores/ProductStore'
import Card from '../Card.vue'

const store = useProductStore()
const imgTemp = "https://picsum.photos/200"

onMounted(() => {
  store.loadProducts()
})


</script>

<style lang="scss" scoped>

</style>