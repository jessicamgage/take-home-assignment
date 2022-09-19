import axios from "axios"

// The purpose of this file is to store API requests from the Django backend.
export const getMobilities = async () => {
    const response = await axios.get('http://127.0.0.1:8000/mobility-usage')
    return response.data || [];
}