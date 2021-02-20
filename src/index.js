
exports.min = function min (array) {
 let min;
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (i === 0) {
                min = array[i];
            }
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
};
exports.max = function max (array) {
   let max;
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (i === 0) {
                max = array[i];
            }
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
};

exports.avg = function avg (array) {
    let sum = 0;
    let result;
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        result = sum / array.length;
        return result;
    }
};
