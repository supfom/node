var http = require('http')

var url = 'http://www.imooc.com/learn/348'

http.get(url,function(res){
	var html = ''
	res.on('data',function(data){
		html += data;
	})
	res.on('end',function(){
		console.log(html)
	})
}).on('error',function(){
	console.log('获取摩客网数据课程出错')
})
