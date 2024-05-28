
import axios from '../utils/axios'

export const getRouteService = async () => {
    const response = await axios.get("/Route");
    const Routes = response.data
    return Routes
}

export const postRouteService = async (Routes) => {
    const response = await axios.post('/Route', Routes);
    return response.data;
}

export const deleteRouteService = async (id) => {
 const response = await axios.delete(`/Route/${id}`);
 return response.data;
}

export const updateRouteService = async (id, routes) => {
    const response = await axios.put(`/Route/${id}`, routes);
    return response.data;
}
