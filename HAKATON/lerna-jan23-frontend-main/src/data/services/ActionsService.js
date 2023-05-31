import httpClient from "../../config/httpClient";

const baseName = "DeviceActions";

const ActionsService = {
    getById: async (id) => {
        try {
            const response = await httpClient.get(`/${baseName}/` + id);
            if (response.data) {
                return response.data;
            } else {
                return null;
            }
        } catch {
            return null;
        }
    },

    getByParams: async () => {
        try {
            const response = await httpClient.get(`/${baseName}/GetPaged`);
            if (response.data.items) {
                return response.data.items;
            } else {
                return null;
            }
        } catch {
            return null;
        }
    },

    add: async (city) => {
        try {
            const response = await httpClient.post(`/${baseName}`, city);
            if (response.data) {
                return response.data;
            } else {
                return null;
            }
        } catch {
            return null;
        }
    },

    edit: async (city) => {
        try {
            const response = await httpClient.put(`/${baseName}`, city);
            if (response.data) {
                return response.data;
            } else {
                return null;
            }
        } catch {
            return null;
        }
    },

    delete: async (id) => {
        try {
            const response = await httpClient.delete(`/${baseName}/` + id);
            if (response.status === 200) {
                return true;
            } else {
                return false;
            }
        } catch {
            return false;
        }
    },
};

export default ActionsService;
