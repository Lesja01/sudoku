module.exports = 
    // your solution
    
    function solveSudoku(matrix){
      let arr=matrix;
      // recursive algo
      function solveOne(arr, row, col) {
          var zero = findZeroPosition(arr, row, col);
          row = zero[0];
          col = zero[1];
      
          // base case: if no empty zero  
          if (row == -1) {              
              return true;
          }
      
          for (var num = 1; num <= 9; num++) {
      
              if ( noConflicts(arr, row, col, num) ) {   
                  arr[row][col] = num;
      
                  if ( solveOne(arr, row, col) ) {                
                      return true;
                  }
      
                          // mark zero as empty (with 0)    
                  arr[row][col] = 0;
              }
          }
      
          // trigger back tracking
          return false;
      }
      
      
      function findZeroPosition(arr, row, col) {
          var done = false;
          var res = [-1, -1];
      
          while (!done) {
              if (row == 9) {
                  done = true;
              }
              else {
                  if (arr[row][col] == 0) {
                      res[0] = row;
                      res[1] = col;
                      done = true;
                  }
                  else {
                      if (col < 8) {
                          col++;
                      }
                      else {
                          row++;
                          col = 0;
                      }
                  }
              }
          }
      
          return res;
      }
      
      function noConflicts(arr, row, col, num) {
          return isRowOk(arr, row, num) && isColOk(arr, col, num) && isBoxOk(arr, row, col, num);
      }
      
      function isRowOk(arr, row, num) {
          for (var col = 0; col < 9; col++)
              if (arr[row][col] == num)
                  return false;
      
          return true;
      }
      function isColOk(arr, col, num) {
          for (var row = 0; row < 9; row++)
          if (arr[row][col] == num)
              return false;
      
          return true;    
      }
      function isBoxOk(arr, row, col, num) {
          row =  Math.floor(row / 3) * 3;
          col = Math.floor(col / 3) * 3;
      
          for (var r = 0; r < 3; r++)
              for (var c = 0; c < 3; c++)
                  if (arr[row + r][col + c] == num)
                      return false;
      
          return true;
      }
      
      for (var i = 0; i < 9; i++) {
              for (var j = 0; j < 9; j++) {
              let row=i;
              let col=j;
              solveOne(arr, row, col);
              }
              }
      return arr;
      
      };//solveSudoku
      
