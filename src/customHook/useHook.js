import { useState, useEffect } from 'react';
import axios from "axios";

const API_KEY = process.env.REACT_APP_RANDOM;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useHook = (tag) => {
    const [gif, setGIF] = useState('');
    const [loading, setLoading] = useState('false');

    async function fetchDATA() {
        setLoading(true);
        const { data } = await axios.get(tag ? (`${url}&tag=${tag}`) : url);
        const image = data.data.images.downsized_large.url
        setGIF(image)
        setLoading(false);
    }

    useEffect(() => {
        fetchDATA('car')
    }, []);
    
    return {gif, loading, fetchDATA}
}
export default useHook;