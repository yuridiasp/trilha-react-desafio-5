import { api } from '../services/api'

export const getPosts = async () => {
    const { data } = await api.get('/posts');

    if(data){
        return data;
    }

    return []
}

export const getPostByID = async (id) => {

    const { data: [ data ] } = await api.get(`posts?id=eq.${id}`)

    if (data) {
        return data
    }
    
    return null
}