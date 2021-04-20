/**
 * @param {number} n
 * @return {number}
 */

// f(n-2) + f(n-1) = f(n)
// q + p = r
var climbStairs = function (n) {
    let q = 0;
    let p = 0;
    let r = 1;
    for (let i = 1; i <= n; i++) {
        q = p;
        p = r;
        r = p + q;
    }
    return r
};


console.log(climbStairs(4))