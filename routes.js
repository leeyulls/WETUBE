import { userDetail } from "./controllers/userController";

//Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//Users
const USERS = "/users";
const EDIT_PROFILLE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL = "/:id";

//Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search : SEARCH,
    users : USERS,
    userDetail: (id)=>{
        if(id){
            return `/users/${id}`
        }else{
            return USER_DETAIL;
        }
    },
    editProfile : EDIT_PROFILLE,
    changePassword : CHANGE_PASSWORD,
    videos : VIDEOS,
    upload : UPLOAD,
    videoDetail : (id)=>{
        if(id){
            return `/videos/${id}`
        }else{
            return VIDEO_DETAIL;
        }
    } ,
    editVideo : EDIT_VIDEO,
    deleteVideo : DELETE_VIDEO,
}

export default routes;
