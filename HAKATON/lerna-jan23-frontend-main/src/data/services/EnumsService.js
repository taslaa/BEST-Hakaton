import httpClient from "../../config/httpClient";

const baseName = "Enums";

const EnumsService = {
    getHomeTypes: async () => {
        try {
          const response = await httpClient.get(`/${baseName}/home-types`);
          if (response.data) {
            return response.data;
          } else {
            return null;
          }
        } catch {
          return null;
        }
      },
    
      getRoles: async () => {
        try {
          const response = await httpClient.get(`/${baseName}/roles`);
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

export default EnumsService;