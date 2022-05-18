import Home from "~/page/Home";
import Following from "~/page/Following";
import UploadVideo from "~/page/UploadVideo";

const publicRouters = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: UploadVideo, layout: null },
];
const praviteRouters = [];
export { publicRouters, praviteRouters };
