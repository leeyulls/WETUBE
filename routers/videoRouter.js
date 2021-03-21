import express from "express"; 
import { deleteVideo, editVideo, uploadVideo, videoDetail, videos } from "../controllers/videoController";
import routes from "../routes";

const userVideo = express.Router();
export default userVideo;

userVideo.get(routes.videos,    videos);
userVideo.get(routes.uploadVideo, uploadVideo);
userVideo.get(routes.videoDetail,   videoDetail);
userVideo.get(routes.editVideo,  editVideo);
userVideo.get(routes.deleteVideo,   deleteVideo);
