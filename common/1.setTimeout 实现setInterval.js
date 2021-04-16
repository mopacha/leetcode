// setTimeout 实现setInterval
const interval = (cb, ms) => {
    let timer = null
    const excute = () => {
        cb()
        timer = setTimeout(excute, ms)
    }
    excute()
    return {
        clear: () => clearTimeout(timer)
    }
}

// 使用
const interval1 = interval(() => console.log('hi'), 2000)
//10s后 清除
setTimeout(() => interval1.clear(), 10000)