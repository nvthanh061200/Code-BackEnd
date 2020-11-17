class NewsController{

    //[Get] /news
    home(req,res){
        res.render('home');
    }
    news(req,res){
        res.render('news');
    }
}
module.exports=new NewsController();
