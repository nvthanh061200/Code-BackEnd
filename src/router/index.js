const newRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    
    
    app.use('/trangchu', newRouter);
    app.use('/site', siteRouter);
}
module.exports = route;
