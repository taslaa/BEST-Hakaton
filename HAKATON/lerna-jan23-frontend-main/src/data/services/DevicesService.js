import httpClient from "../../config/httpClient";

const baseName = "Devices";

const DevicesService = {
  getTotalDevices: async () => {
    try {
      const response = await httpClient.get(`/${baseName}/` + "GetTotalDevices");
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  },

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

  add: async (device) => {
    try {
      const response = await httpClient.post(`/${baseName}`, device);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  },

  edit: async (device) => {
    try {
      const response = await httpClient.put(`/${baseName}`, device);
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

export default DevicesService;