module.exports = 
    // your solution
    
    function solveSudoku(matrix){
      let arr=matrix;
      for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
          let row=i;
          let col=j;
          solveOne(arr, row, col);
        }
        }
      function solveOne(arr, row, col) {
          var zero = findZeroPosition(arr, row, col);
          row = zero[0];
          col = zero[1];
      
          
          if (row == -1) {   //  if haven`t zero             
              return true;
          }
      
          for (var num = 1; num <= 9; num++) {
      
              if ( checkRow(arr, row, num) && checkCol(arr, col, num) && checkSquare(arr, row, col, num) ) {   
                  arr[row][col] = num;
      
                  if ( solveOne(arr, row, col) ) {                
                      return true;
                  }
                  arr[row][col] = 0;
              }
          }
        return false;
      }
      
      
      function findZeroPosition(arr, row, col) {
          var isChecked = false;
          var zeroPosition = [-1, -1];
      
          while (!isChecked) {
              if (row == 9) {
                isChecked = true;
              }
              else {
                  if (arr[row][col] == 0) {
                      zeroPosition[0] = row;
                      zeroPosition[1] = col;
                      isChecked = true;
                  }
                  else {  //go to new column
                      if (col < 8) {
                          col++;
                      }
                      else {//go to new row
                          row++;
                          col = 0;
                      }
                  }
              }
          }      
          return zeroPosition;
      }
           
      
      function checkRow(arr, row, num) {
          for (var col = 0; col < 9; col++)
              if (arr[row][col] == num)
                  return false;      
          return true;
      }
      function checkCol(arr, col, num) {
          for (var row = 0; row < 9; row++)
          if (arr[row][col] == num)
              return false;
      
          return true;    
      }
      function checkSquare(arr, row, col, num) {
          row =  Math.floor(row / 3) * 3;
          col = Math.floor(col / 3) * 3;
      
          for (var r = 0; r < 3; r++)
              for (var c = 0; c < 3; c++)
                  if (arr[row + r][col + c] == num)
                      return false;      
          return true;
      }
      
      
      return arr;
      
      };//solveSudoku
      
