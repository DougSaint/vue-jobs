import axios from "axios";
class JSearchController {
  API_KEY = "f2ac86e639msh911456ab60056a4p16b4f0jsne917e9b36984";
  BASE_URL = "jsearch.p.rapidapi.com";

  getOptions = (options) => ({
    method: options.method || "GET",
    url: `https://${this.BASE_URL}/${options.url}`,
    params: {
      query: options.query,
    },
    headers: {
      "X-RapidAPI-Key": this.API_KEY,
      "X-RapidAPI-Host": this.BASE_URL,
    },
  });

  search = async (query) => {
    const options = this.getOptions({
      url: "search",
      query: `${query}, brasil`,
    });
    const response = await axios.request(options);
    return response.data;
  };
}

export default new JSearchController();