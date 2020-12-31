import axios from "axios";

const KEY = "AIzaSyAbqacUOgr_Vb2oEjLVm40oEE1LdnFE_I0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
