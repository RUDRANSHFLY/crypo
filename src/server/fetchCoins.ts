"use server"

import axios from "axios";

const fetchCoins = async () => {

    const key = process.env.API_KEY;
    const url = "https://api.coingecko.com/api/v3/search/trending";


    if (!key) {
        throw new Error("API key not found");
    }

    const options = {
        headers: {
            Authorization: `Bearer ${key}`
        }
    }

    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (error) {
        console.log("Error fetching coins", error);
        return null;
    }

}

export default fetchCoins;