
let http = require('http')
let fs = require('fs')
function start(route){
     http.createServer((request,response)=>{
         console.log(request.url,'11111111')
        route(request.url);
        let url = request.url == '/' ? '../../../public/index.html':'../pages' + request.url;
        if (fs.existsSync(url)){
            let data = fs.readFileSync(url);
            response.write(data);
        }else {
            let data = fs.readFileSync('../pages/404.html');
            response.write(data)
        }
        response.end();
     }).listen("8080",(error)=>{
         if (error){
             console.log(error,'error');
             throw error;
         }
         console.log('服务器已经在8080端口启动成功！');
     })
}
exports.start = start;