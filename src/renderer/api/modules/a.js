import request from "../server";

export default {
  getA: () => request.get("/a"),
};
