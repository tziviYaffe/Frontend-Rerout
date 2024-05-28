import axios from '../utils/axios'

export const getDestinationsService = async () => {
    const response = await axios.get("/Destination");
    const Destinations = response.data
    return Destinations
}

export const postDestinationService = async (destination) => {
       const response = await axios.post('/Destination', destination,{ method: "POST" });
       return response.data;
}

export const deleteDestinationService = async (id) => {
    const response = await axios.delete(`/Destination/${id}`, { method: "DELETE" });
    return response.data;
}

