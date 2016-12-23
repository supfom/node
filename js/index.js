var klass  = require('./klass')
klass.add('Scott',['白富美','高富帅'])

exports.add = function(klasses){
	
	klasses.forEach(function(item,index){
		var _klass = item;
		var teacherName = item.teacherName;
		var students = item.students;
		
		klass = add(teacherName,students);
	})
}
 protocol: 'http:',slashes: true,auth: null,host: 'www.imooc.com:8899',port: '8899',hostname: 'www.imooc.com',hash: '#floor1',search: '?from=scott$course=node',query: 'from=scott$course=node',pathname: '/course/list',path: '/course/list?from=scott$course=node',href: 'http://www.imooc.com:8899/course/list?from=scott$course=node#floor1'