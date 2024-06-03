import axios from 'axios';

export const api  = axios.create({
    baseURL: process.env.SUPABASE_BASE_URL,
    headers: {
        apikey: process.env.SUPABASE_API_KEY,
        authorization: process.env.SUPABASE_AUTHORIZATION
    }
})