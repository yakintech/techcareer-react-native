import { axiosInstance } from "../axiosSamples/axiosInstance";


export const baseService = {
    getAll: (endpoint) => {

        var response = [];

        axiosInstance.get(endpoint)
            .then(res => {
                response = res.data
            });

        return response;

    }
}