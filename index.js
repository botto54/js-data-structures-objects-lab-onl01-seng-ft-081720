// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(d, k, v) {
    // return Object.assign({}, driver, {[k]: v})
    return { ...d, ...{ [k]: v } }
}

function destructivelyUpdateDriverWithKeyAndValue(d, k, v) {
    d[k] = v
    return d
}

function deleteFromDriverByKey(d, k) {
    // const newObj = Object.assign({},d)
    const newObj = { ...d }
    delete newObj[k]
    return newObj
}

function destructivelyDeleteFromDriverByKey(d,k) {
    delete d[k]
    return d
}