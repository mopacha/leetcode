// 当一个基本数据类型或者对象在做运算的时候（比如加减乘除，判断相等）时候，会有valueOf()或者toString的调用问题；，
// 则基本数据类型会调用valueOf(), 引用数据类型会调用toString()

// 没有valueOf()会执行toString()

/* 
1. javascript中所有数据类型都拥有valueOf和toString这两个方法，null, undefined除外;
2. 在数值运算里，会优先调用valueOf()；在字符串运算里，会优先调用toString();
3. 如果只重写了toString，对象转换时会无视valueOf的存在来进行转换
*/

// https://www.jb51.net/article/102027.htm


var value = 0
Object.defineProperty(window,'a',{
    get(){
        return value+=1;
    }
})
if(a===1&&a===2&&a===3){
    console.log('success')
}
