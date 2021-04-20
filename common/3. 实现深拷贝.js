const isObject = (obj) => {
    return typeof obj !== null && typeof obj === 'object'
}
const deepClone = (obj, map = new WeakMap()) => {
    if (!isObject(obj)) {
        return obj
    }
    let newObj = Array.isArray(obj) ? [] : {}
    if (map.has(obj)) {
        return obj
    }
    map.set(obj, newObj)
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            newObj[prop] = isObject(obj[prop]) ? deepClone(obj[prop], map) : obj[prop]
        }
    }
    return newObj
}