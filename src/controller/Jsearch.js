import axios from "axios";
class JSearchController {
  API_KEY = process.env.VUE_APP_API_URL;
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

  search = async (params) => {
    const options = this.getOptions({
      url: "search",
      params: params,
    });
    console.log(options);
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  };

  getJobDetails = async (id) => {
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
