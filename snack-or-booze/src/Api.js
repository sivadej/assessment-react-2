import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

// json-server endpoints.

class SnackOrBoozeApi {

  static async getAllItems() {
    const result = await axios.get(`${BASE_API_URL}/db`);
    return result.data;
  }

  static async getItemsByCategory(cat) {
    const result = await axios.get(`${BASE_API_URL}/${cat}`);
    return result.data;
  }

  static async addItem(item, category) {
    const result = await axios.post(`${BASE_API_URL}/${category}`, item);
    console.log(result)
    return result.data;
  }

}

export default SnackOrBoozeApi;