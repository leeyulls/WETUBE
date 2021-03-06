import express from "express"; 
import { deleteVideo, editVideo,getUpload,postUpload, videoDetail } from "../controllers/videoController";
import { uploadVideo } from "../middleware";
import routes from "../routes";

const userVideo = express.Router();
export default userVideo;

//userVideo.get(routes.videos,    videos);
userVideo.get(routes.upload,    getUpload);
userVideo.post(routes.upload, uploadVideo,  postUpload);
userVideo.get(routes.videoDetail(),   videoDetail);
userVideo.get(routes.editVideo,  editVideo);
userVideo.get(routes.deleteVideo,   deleteVideo);
