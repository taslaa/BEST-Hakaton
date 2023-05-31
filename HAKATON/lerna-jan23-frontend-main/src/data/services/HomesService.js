import httpClient from "../../config/httpClient";

const baseName = "Homes";

const HomesService = {
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

  add: async (home) => {
    try {
      const response = await httpClient.post(`/${baseName}`, home);
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
  getTotalHomes: async () => {
    try {
      const response = await httpClient.get(`/${baseName}/` + "GetTotalHomes");
      if (response.data.items) {
        return response.data.items;
      } else {
        return null;
      }
    } catch {
      return null;
    }
    },
    
  getByUserId: async (id) => {
    try {
      const response = await httpClient.get(`/${baseName}/ByUser?userId=` + id);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  }
};

export default HomesService;
