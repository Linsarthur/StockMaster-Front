import axios from "axios";
const api = import.meta.env.VITE_API_URL;


export async function getFunction() {
    const response = await axios.get(`${api}/users`)
    return response.data
}

export async function login(email, password) {
    const response = await axios.post(`${api}/users/login`,{ user_email: email, user_password: password })
        .then((response) => {
            console.log (response.data);
        })
    return response.data
        .catch((error) => {
            throw error.response?.data || "Erro ao fazer login"
        })

}