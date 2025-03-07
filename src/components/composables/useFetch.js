import { ref } from "vue";
import { default as axios} from "axios"

export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)
    const isLoading = ref(false)
    
    async function fetchData() {
        isLoading.value = true;
        try {
            const response = await axios.get(url)
            data.value = response.data
        } catch (err) {
            error.value = err           
        } finally {
            isLoading.value = false
        }
    }

    return {
        data,
        error,
        isLoading,
        fetchData,
    }
}