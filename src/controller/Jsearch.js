import axios from "axios";
class JSearchController {
  API_KEY = "f467c93fc5mshacc209389987cdfp1e27eajsnebc3d14be48c";
  BASE_URL = "jsearch.p.rapidapi.com";

  getOptions = (options) => ({
    method: options.method || "GET",
    url: `https://${this.BASE_URL}/${options.url}`,
    params: {
      ...options.params,
      query: `${options?.params?.query}, brasil`,
    },
    headers: {
      "X-RapidAPI-Key": this.API_KEY,
      "X-RapidAPI-Host": this.BASE_URL,
    },
  });
  getApiKey = () => {
    const key = localStorage.getItem("apiKey");
    console.log(key);
    if (key) {
      this.API_KEY = key;
    }
  };

  search = async (params) => {
    this.getApiKey();
    const options = this.getOptions({
      url: "search",
      params: params,
    });
    const response = await axios.request(options);
    return response.data;
  };

  getJobDetails = async (id) => {
    this.getApiKey();
    const options = this.getOptions({
      url: `job-details`,
      params: {
        job_id: id,
      },
    });
    const response = await axios.request(options);
    return response.data;
  };

  paginator = async (query, page) => {
    this.getApiKey();
    const options = this.getOptions({
      url: "search",
      params: {
        query: `${query}, brasil`,
        page,
      },
    });
    const response = await axios.request(options);
    return response.data;
  };
}

export default new JSearchController();
