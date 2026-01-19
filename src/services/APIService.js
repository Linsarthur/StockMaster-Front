import axios from "axios";
const api = import.meta.env.VITE_API_URL;


export async function getFunction() {
    const response = await axios.get(`${api}/users`)
    return response.data
}

export async function login({ user_email, user_password }) {
    try {
        const response = await axios.post(
            `${api}/users/login`,
            { user_email, user_password }
        );

        return response.data;
    } catch (error) {
        throw error.response?.data || "Erro ao fazer login";
    }
}

export async function registerProductToStock({ product_name, batch_idfk, product_amount }) {
    try {
        
        const response = await axios.post(`${api}/products/create`, {product_name, batch_idfk, product_amount})
        
        console.log(response)
        return response
        
    } catch (error) {
        throw error.response?.data || "Erro ao cadastrar produto";
    }
}


