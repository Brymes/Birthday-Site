import { ADD_WISH } from "./gql/mutations.js";
import { GET_ALL_WISHES } from "./gql/queries.js";
import { CONFIG, MakeReq, MYRES } from "./utils.js";

var myRes = MYRES;

class ApiService {
  async addWish(payload) {
    var resp;

    let addWishConfig = CONFIG;

    addWishConfig.data = ADD_WISH(payload);

    await MakeReq(addWishConfig, myRes)
      .then(function (response) {
        resp = response;
      })
      .catch(function (error) {
        throw error;
      });

    return resp;
  }

  async fetchWishes() {
    var cfg = CONFIG;
    var myres = MYRES;
    var resp;

    cfg.data = GET_ALL_WISHES;

    await MakeReq(cfg, myres)
      .then(function (response) {
        response.data = response.data.allWishes;
        resp = response;
      })
      .catch(function (error) {
        throw error;
      });
    return resp;
  }
}

export default new ApiService();
