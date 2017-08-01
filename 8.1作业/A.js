/**
 * Created by dllo on 17/8/1.
 */
//foreach
var arr = [4,5,8,45,56];
arr.forEach(function(value, index, arr) {
// console.log(value);
// console.log(index);
 //console.log(arr);
});

//map
var data = [1, 2, 3, 4];
var arrayOfSquares = data.map(function (item) {
    return item * item;

});
console.log(arrayOfSquares);

//some
var arr = [12,5,3,5,7];
function scores(i) {
    return 8 > i;
}
if(arr.some(scores)){
    console.log('成功了');
}

//every
var arr1 = [4,8,6,4,5,4];
function select(i) {
    return 89>i;
}
if(arr1.some(select)){
    console.log('成功了吗');
}

//indexOf
var data = [2, 5, 7, 3, 5];

console.log(data.indexOf(5, "x")); // 1 ("x"被忽略)
console.log(data.indexOf(5, "3")); // 4 (从3号位开始搜索)

console.log(data.indexOf(4)); // -1 (未找到)
console.log(data.indexOf("5")); // -1 (未找到，因为5 !== "5")

//lastIndexOf
var data = [2, 5, 7, 3, 5];

console.log(data.lastIndexOf(5)); // 4
console.log(data.lastIndexOf(5, 3)); // 1 (从后往前，索引值小于3的开始搜索)

console.log(data.lastIndexOf(4));

//reduceRight
//参数1:前一个数
//参数2:当前的数
//参数3:下角标
//参数4:数组
var data = [1, 2, 3, 4];
var specialDiff = data.reduceRight(function (previous, current, index,arr) {
    if (index == 0) {
        return previous + current;
    }
    return previous - current;
});

console.log(specialDiff); // 0

//reduce
arr3 = [
    [1, 2],
    [3, 4],
    [5, 6]
];

// 二维数组扁平化
//就是把二维数组分割出来
var arr4 = arr3.reduce(function (previous, current) {
    return previous.concat(current);
});

console.log(arr4);