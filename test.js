array = 'a bunch of words,another bunch of words,then this';

const test = (arr) => {
    arr = arr.split(',').slice(0, -1);
    return arr.join(',');
};

console.log(test(array));