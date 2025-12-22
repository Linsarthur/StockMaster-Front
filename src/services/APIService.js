import axios from "axios";
const api = import.meta.env.VITE_API_URL;


export async function getFunction() {
    const response = await axios.get(`${api}/users`)
    return response.data
}

export async function login({user_email, user_password}) {
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
