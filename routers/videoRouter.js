import express from "express"; 
import { deleteVideo, editVideo,upload, videoDetail } from "../controllers/videoController";
import routes from "../routes";

const userVideo = express.Router();
export default userVideo;

//userVideo.get(routes.videos,    videos);
userVideo.get(routes.upload,    upload);
userVideo.get(routes.videoDetail(),   videoDetail);
userVideo.get(routes.editVideo,  editVideo);
userVideo.get(routes.deleteVideo,   deleteVideo);
