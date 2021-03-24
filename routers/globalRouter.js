import express from "express"; 
import { getJoin, postJoin, login, logout, getLogin, postLogin } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

//ver 1.
// globalRouter.get(routes.home, (req,res) => res.send("home"));
// globalRouter.get(routes.search, (req,res) => res.send("search"));
// globalRouter.get(routes.join, (req,res) => res.send("join"));
// globalRouter.get(routes.login, (req,res) => res.send("login"));
// globalRouter.get(routes.logout, (req,res) => res.send("logout"));

//ver 2.
globalRouter.get(routes.join,   getJoin);
globalRouter.post(routes.join,   postJoin);
globalRouter.get(routes.login,  getLogin);
globalRouter.post(routes.login,  postLogin);

globalRouter.get(routes.home,    home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);


export default globalRouter;