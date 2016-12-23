var student = require('./student')
var teacher = require('./teacher')

	teacher.add('Scott');
function add(teacherName,students){
	students.forEach(function(item,index){
		student.add(item);
	})
}

exports.add = add