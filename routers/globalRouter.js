import express from "express"; 
import { join, login, logout } from "../controllers/userController";
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
globalRouter.get(routes.home,    home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join,   join);
globalRouter.get(routes.login,  login);
globalRouter.get(routes.logout, logout);


export default globalRouter;