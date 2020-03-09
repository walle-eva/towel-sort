
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (typeof matrix == 'undefined' || matrix == []) {
    return []
  } else {    
  for(let i = 0; i < matrix.length; i++){
    if(i % 2 == 0){
      for(let j = 0; j < arr[i].length; j++){  
	    arr.push(matrix[i][j]);
    }         
	} else {
        let sort = matrix[i].reverse();
	  for(let i = 0; i < sort.length; i++){
         
	    
      }
        arr.push(matrix[i][j]);
  }
  return arr;
}
}
