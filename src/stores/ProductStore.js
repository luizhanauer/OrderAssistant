import { defineStore } from "pinia"
import { useFetch } from "../components/composables/useFetch"

export const useProductStore = defineStore("productStore", () => {
    const { data, isLoading, error, fetchData } = useFetch("http://localhost:8080/json")
    async function loadProducts() {
        await fetchData()
    }

    function increment() {
        
    }

    return {
        data,
        isLoading,
        error,
        loadProducts
    }
})
