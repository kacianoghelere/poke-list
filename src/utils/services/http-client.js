import axios from 'axios'

const httpClient = axios.create({ timeout: 30000 })

httpClient.interceptors.response.use(({ data }) => data)

export default httpClient