import axios from "axios";

const axiosInstance = axios.create({ baseURL: 'https://localhost:7068/api' })

export default axiosInstance

// מופע של אקסיוס מייבאים אותו לקומפוננטות שמבצעים בהם קריאות שרת