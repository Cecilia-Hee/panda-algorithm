# 二维平面的回溯

## 单词搜索
> [79. 单词搜索](https://leetcode-cn.com/problems/word-search/)

### 解法详细说明。。。。
```js
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(!board.length || !word) return false;

    let row = board.length;
    let col = board[0].length;
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(board[i][j] === word[0]) {
                let isExist = _isExit(board, word, i, j, {});
                if(isExist === true) {
                    return true;
                }
            }
        }
    }
    return false;

    function _isExit(board, word, row, col, visited) {
        if(!word.length) return true;
        let key = `${row}-${col}`;

        // 排除边界值, 超过边界，或者不等于第一个值，或者是已经访问过的路径，就return false;
        if(row < 0 || row >= board.length 
        || col < 0 || col >= board[0].length 
        || visited[key] || board[row][col] !== word[0]) {
            return false;
        }

        visited[key] = true;
        word = word.slice(1);
        const success = _isExit(board, word, row+1, col, visited)
                     || _isExit(board, word, row-1, col, visited)
                     || _isExit(board, word, row, col-1, visited)
                     || _isExit(board, word, row, col+1, visited);
        visited[key] = success;
        return success;
    }
      
};
```