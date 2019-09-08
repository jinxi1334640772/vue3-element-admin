let fs = require('fs');
//所有异步操作，都必须有回调函数，否则会报错,第一个参数都是error对象

// fs.writeFileSync('../pages/test.txt','你好，张进喜','utf8'); //同步写文件
// fs.writeFile('../pages/test.txt','你好，上海','utf8',(error)=>{console.log(error)});//异步写文件，回调函数必有，如果成功error为null
// let data = fs.readFileSync('../pages/test.txt'); //同步读文件，data需要toString()转换
// console.log(data.toString());
// fs.readFile('../pages/test.txt','utf8',(error,data)=>{ //异步读文件，如果成功error为null，data不用toSting()，返回的是原始数据
//     if(!error){ 
//         console.log(error,data)
//     }
// })

// let data = fs.existsSync('../pages/teswt.txt');//同步判断文件是否存在，返回boolean值
// console.log(data)
// fs.exists('../pages/tewst.txt',(truely)=>{ //如果存在truely为true，否则为false。
//     console.log(truely)
// })
// console.log(data,'111')
// fs.appendFile('../pages/tewst.txt','你不是个傻子吧',(error)=>{ //异步追加内容，error始终都是null，如果找不到文件会创建文件并添加内容
//     console.log(error,'333')
// });
// fs.appendFileSync('../pages/teest.txt','你不是个傻子吧'); //同步追加内容，如果找不到文件会创建文件然后添加内容
// console.log(data,'22');

//fs.open(path, flags[, mode], callback) //异步模式下打开文件，path为文件路径，flags为打开的方式，例如只读，读写等，mode为设置文件模式(权限)，
// 文件创建默认权限为 0666(可读，可写)  callback(err,fd)为回调  //fs.read(fd, buffer, offset, length, position, callback) //异步读取文件，在fs.open()方法中使用
//fd是文件描述，buffer是读取后存进buffer中，offset是存进去的偏移量，length要从文件中读取的字节数。position文件读取的起始位置，callback(err,bytes,buffer) bytes为读取的字节数
//fs.close(fd, callback) //异步模式下关闭文件，callback没有参数 也是配合fs.open()使用
// fs.ftruncate(fd, len, callback) //异步模式下，截取文件的格式，fd为fs.open()回调返回的文件描述，len为截取的长度，callback没有参数，

// fs.unlink(path,callback) //删除文件，callback(error)

// 通过异步模式获取文件信息的语法格式fs.stat(path,callback(error,stats)) //stats为文件状态对象，可以根据stats对象提供的方法判断文件状态，例如stats.isFile()，判断是否为文件

// fs.watchFile('../pages/test.txt',(newstatus,oldstatus)=>{ //监听文件，当文件改变时运行回调函数，两个参数都是包含文件改变前后两个状态信息的对象
//     console.log(newstatus.size,oldstatus.size,'333')
// })
// fs.mkdir(path[, options], callback) //创建目录的语法格式，options（可选）两个参数recursive是否以递归方式创建，默认false，mode设置目录权限默认0777

// fs.readdir(path, callback) //读取目录的语法格式，callback（error，fileList），fileList是目录下的文件数据列表

// fs.rmdir(path, callback) //删除目录

// fs.rename(oldPath, newPath, callback) //异步的重命名文件
// 还有很多方法，
