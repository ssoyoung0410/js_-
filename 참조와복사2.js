var a = 100;
b = a //복사

var c= {d: 1};
var e = c //참조

var obj1 = {a: 1};
var obj2 = {};
Object.keys(obj).forEach(function(key){
    obj2[key] = obj[key];
}) //1단계만 복사 , 나머지는 참조

var arr1 = [1,2,3];
var arr2 = arr.slice() //1단계만 복사 , 나머지는 참조

var obj3 = JSON.parse(JSON.stringify(obj1)); //복사 성능최악
var arr3 = JSON.parse(JSON.stringify(arr1)); //복사 성능최악