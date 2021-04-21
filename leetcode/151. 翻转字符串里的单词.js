/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
     if(!s.trim()){
         return ''
     }
   return s.split(' ').filter(item=>item.trim() !=='').reverse().join(' ')
};