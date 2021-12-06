import axios, { AxiosResponse } from 'axios'
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

type T = any;
interface IApiFunction<T> {
    create: (pathName: string, config: Object) => Promise<AxiosResponse<T>>;
    delate: (pathName: string, config: Object) => Promise<AxiosResponse<T>>;
    update: (pathName: string, config: Object) => Promise<AxiosResponse<T>>;
    get: (pathName: string, config: Object) => Promise<AxiosResponse<T>>;
}

class Api implements IApiFunction<T> {
    create = async (pathName: string, config: Object = {}) => {
        return await axiosInstance.post(pathName, config)
    };

    delate = async (pathName: string, config: Object = {}) => {
        return await axiosInstance.delete(pathName, config)
    };

    update = async (pathName: string, config: Object = {}) => {
        return await axiosInstance.put(pathName, config)
    };

    get = async (pathName: string, config: Object = {}) => {
        return await axiosInstance.get(pathName, config)
    };
}

export default new Api()
