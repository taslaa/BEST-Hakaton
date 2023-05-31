import httpClient from "../../config/httpClient";

const baseName = "Countries";

const CountriesService = {
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

  getByParams: async (pageNumber, pageSize) => {
    try {
      const response = await httpClient.get(`/${baseName}/${pageNumber}/${pageSize}`);
      if (response.data.items) {
        return response.data.items;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  },

  add: async (country) => {
    try {
      const response = await httpClient.post(`/${baseName}`, country);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  },

  edit: async (country) => {
    try {
      const response = await httpClient.put(`/${baseName}`, country);
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

export default CountriesService;
