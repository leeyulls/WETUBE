
import routes from "../routes";
import Video from "../models/Video";
//ver 1.
//export const home = (req,res) => res.send("home");
//ver 2. pug 사용
export const home = async(req,res) => {
    try{
        const videos = await Video.find({});
        res.render("home",{pageTitle:"Home",videos:videos});
    }catch(error){
        console.log(error);
        res.render("home",{pageTitle:"Home",videos:videos});
    }
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
    res.render("search",{pageTitle:"search",searchingBy: searchingBy,videos})

};

//export const videos         = (req,res) => res.render("videos",{pageTitle:"videos"});
export const getUpload         = (req,res) => {
    res.render("upload",{pageTitle:"upload"});
}
export const postUpload         = async(req,res) => {
    //res.render("upload",{pageTitle:"upload"});
    
    const{
        body:{title,description},
        file:{path}
    } = req;

   

    const newVideo = await Video.create({
        fileUrl : path,
        title,
        description
    });
    console.log(newVideo);
    //TO DO : 비디오 업로드 및 저장
   res.redirect(routes.videoDetail(newVideo.id));
}


  
export const videoDetail    = (req,res) => res.render("videoDetail",{pageTitle:"videoDetail"});
export const editVideo      = (req,res) => res.render("editVideo",{pageTitle:"editVideo"});
export const deleteVideo    = (req,res) => res.render("deleteVideo",{pageTitle:"deleteVideo"});
