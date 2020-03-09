
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let str = '';
  for(let i = 0; i < matrix.length; i++){
    if(i % 2 == 0){
	  str += matrix[i].join('');
	} else {
	  str += matrix[i].reverse().join('');
	}
  }
  return str.split('');
}
