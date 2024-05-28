import axios from '../utils/axios'

export const getOptimalRoute = async (source, destinations) => {
    const response = await axios.post(`/Algorithm/GetAddress?source=${source}`, destinations);
    const algorithm = response.data
    return algorithm
}
