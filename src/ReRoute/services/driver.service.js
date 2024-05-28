import axios from '../utils/axios'


export const getDriversService = async () => {
    const response = await axios.get("/Driver");
    const Drivers = response.data
    return Drivers
}

export const postDriverService = async (Driver) => {
    const response = await axios.post('/Driver', Driver);
    const driver=await response.data;
    return driver;
}

export const updateDriverService = async (id, Drivers) => {
    const response = await axios.put(`/Driver/${id}`, Drivers);
    return response.data;
}

