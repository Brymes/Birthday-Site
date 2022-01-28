import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const CONFIG = {
  method: "post",
  url: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

export const MYRES = {
  status: false,
  message: null,
  data: [],
};


export function CheckErrors(response, myRes) {
  if (!response || !response.data) {
    myRes.status = false;
    myRes.message = "Please Check your network or Otherwise Contact Support";
  } else if (response.data != {}) {
    if (typeof response.data.errors !== "undefined") {
      var er = response.data.errors[0];

      myRes.status = false;
      myRes.message = er.message;
    } else {
      myRes.status = true;
      myRes.data = response.data.data;
    }
  }
  return myRes;
}

export async function MakeReq(config, myRes) {
  await axios(config)
    .then(function (response) {
      var res = CheckErrors(response, myRes);
      myRes = res;
      if (myRes.status == false) {
        throw myRes;
      }
    })
    .catch(function (error) {
      console.error(error);
      myRes.message = myRes.message
        ? myRes.message
        : "Please Check your network or Otherwise Contact Support";
      throw myRes;
    });
  return myRes;
}
