import express from "express"; 
import { changePassword, userDetail, userProfile, users } from "../controllers/userController";
import routes from "../routes";

//ver 1. 해당 변수만  export
//export const userRouter = express.Router();

//ver 2. 파일을 export
const userRouter = express.Router();
export default userRouter;


userRouter.get(routes.users,    users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.userProfile,   userProfile);
userRouter.get(routes.changePassword,  changePassword);


 