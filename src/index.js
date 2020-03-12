module.exports = function reverse (n) {
    let strR = String(n).replace(/\D/g,'').replace(/0$/g,'');
    let result = strR.split('').reverse().join('')
    return Number(result);
}
