//把route函数当作参数传给server，就可以处理server接受到的request的url参数。从而根据路由做出响应
function route(url){
    console.log('你请求的地址是：'+url);
}
exports.route = route;