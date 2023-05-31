import httpClient from "../../config/httpClient";

const baseName = "DeviceTypes";

const DeviceTypesService = {
    getById: async (id) => {
        try {
            const response = await httpClient.get(`/${baseName}/` + id);
            if (response.data) {
                return response.data;
            } else {
                return null;
            }
        }
        catch {
            return null;
        }
    },

    getByParams: async (params) => {
        try {
            const response = await httpClient.get(`/${baseName}/GetPaged`, { params });
            if (response.data.items) {
                return response.data.items;
            } else {
                return null;
            }
        }
        catch {
            return null;
        }
    },

    add: async (condition) => {
        try {
            const response = await httpClient.post(`/${baseName}`, condition);
            if (response.data) {
                return response.data;
            } else {
                return null;
            }
        }
        catch {
            return null;
        }
    },

    edit: async (condition) => {
        try {
            const response = await httpClient.put(`/${baseName}`, condition);
            if (response.data) {
                return response.data;
            } else {
                return null;
            }
        }
        catch {
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
        }
        catch {
            return null;
        }
    },

    getTotalDeviceTypes: async () => {
        try {
          const response = await httpClient.get(`/${baseName}/` + "GetTotalDevicetypes");
          if (response.data) {
            return response.data;
          } else {
            return null;
          }
        } catch {
          return null;
        }
      }
}

export default DeviceTypesService;