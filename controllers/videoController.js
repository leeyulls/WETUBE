import {videos} from "../db"

//ver 1.
//export const home = (req,res) => res.send("home");
//ver 2. pug 사용
export const home = (req,res) => {
    res.render("home",{pageTitle:"Home",videos:videos});
};
export const search = (req,res) => {
    console.log(req.query.term);
    //ver 1. 이전방식
    //const searchingBy = req.query.term;
    //ver 2. 새로운 방식
    const {
        query: {term : searchingBy}
    } = req;
    console.log(searchingBy);
    res.render("search",{pageTitle:"search",searchingBy: searchingBy})

};

//export const videos         = (req,res) => res.render("videos",{pageTitle:"videos"});
export const upload         = (req,res) => res.render("upload",{pageTitle:"upload"});
export const videoDetail    = (req,res) => res.render("videoDetail",{pageTitle:"videoDetail"});
export const editVideo      = (req,res) => res.render("editVideo",{pageTitle:"editVideo"});
export const deleteVideo    = (req,res) => res.render("deleteVideo",{pageTitle:"deleteVideo"});
