const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }
    if (a<0 || b<0) {
        return 'ERROR';
    }
    let n = Math.max(a,b)-Math.min(a,b)+1;
    return n*(a+b)/2;
};

// Do not edit below this line
module.exports = sumAll;
