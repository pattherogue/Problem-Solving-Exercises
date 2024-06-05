// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const obj = {};
    const maxLength = Math.min(keys.length, values.length);
    for (let i = 0; i < maxLength; i++) {
        obj[keys[i]] = values[i];
    }
    for (let i = maxLength; i < keys.length; i++) {
        obj[keys[i]] = null;
    }
    return obj;
}
