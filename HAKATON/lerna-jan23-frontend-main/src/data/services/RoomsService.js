import httpClient from "../../config/httpClient";

const baseName = "Rooms";

const RoomsService = {
  getById: async (id) => {
    try {
      const response = await httpClient.get(`/${baseName}/ByHomeId?homeId=` + id);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  },

  getByHomeId: async (id) => {
    try {
      const response = await httpClient.get(`/${baseName}/` + id);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch {
      return null;
    }},

  getByHomeId: async (id) => {
    try {
      const response = await httpClient.get(`/${baseName}/ByHome?homeId=` + id);
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

  add: async (room) => {
    try {
      const response = await httpClient.post(`/${baseName}`, room);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  },

  edit: async (room) => {
    try {
      const response = await httpClient.put(`/${baseName}`, room);
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
  }

export default RoomsService;
