let path = require('path')
let fs = require('fs')

// fs.writeFileSync('../pages/test.txt',path.toString(),'utf8')
// console.log(path,'22')
// console.log(__dirname)  //当前文件的绝对路径，不包括当前文件
// console.log(__filename); //当前文件的绝对路径，包括当前文件
// let pathName = path.join('qqq','zhangjinxi','index.html')// pathName = qqq/zhangjinxi/index.html  路径拼接方法
// let pathName = path.resolve('/home/about','woaini') // 将后一个参数解析为绝对路径 /home/about/woaini
// let data = path.normalize(pathName) //规范化路径
// let isAbsolute  = path.isAbsolute(pathName)

// let pathName = path.relative('/name/about/aa.txt','/name/bb.txt') // path.relative(from,to) // 从 from 到 to 的相对路径（基于当前工作目录）
// let name = path.dirname(pathName)  //返回路径中的文件夹部分
// let name = path.basename(pathName)  //返回路径中的最后一部分，即文件名
// let name = path.extname(pathName) //返回路径文件的后缀，包括'.'
// let name = path.parse(pathName)  //返回路径字符串的对象
// let name1 = path.format(name)  //把路径字符串对象转为路径字符串，和path.parse()正好相反

// let name = path.sep //返回平台路径分隔符，'\\'或者'/'，window和Linux系统的路径分隔符不同
let name = path.delimiter //返回平台的分隔符, ; or ':'.

console.log(name);
