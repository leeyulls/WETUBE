import routes from "../routes";

export const getJoin        = (req,res) => {
    res.render("join",{pageTitle:"join"}         );
};


export const postJoin       = (req,res) => {
    console.log(req.body);
    const{
        body: {name,email,password,password2}
    } = req; 

    if(password !== password2){
        res.status(400);
    }else{
        //To Do: 사용자 등록
        //To Do: 사용자 로그인 
        res.redirect(routes.home);
    }

    res.render("join",{pageTitle:"join"}         );
};


export const getLogin       = (req,res) => {
    res.render("login",{pageTitle:"login"}        );
}
export const postLogin      = (req,res) => {
    res.redirect(routes.home);
}
export const logout         = (req,res) => {
    //TO DO : 로그아웃 처리
    //res.render("logout"          ,{pageTitle:"logout"}       );
    res.redirect(routes.home);
}

export const users          = (req,res) => res.render("users"           ,{pageTitle:"users"}        );
export const userDetail     = (req,res) => res.render("userDetail"      ,{pageTitle:"userDetail"}   );
export const editProfile    = (req,res) => res.render("editProfile"     ,{pageTitle:"editProfile"}  );
export const changePassword = (req,res) => res.render("changePassword"  ,{pageTitle:"changePassword"});