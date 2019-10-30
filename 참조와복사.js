
//원시데이터타입 --> 복사.
var 값 = '소영';
var 복사 = 값; 
console.log(복사); // '소영'
복사 = '어피치';
console.log(복사); // '어피치'
console.log(값); // '소영'

값 = false;
복사 = 값;
console.log(값); // false
console.log(복사); // false
복사 = true;
console.log(복사); // true
console.log(값); // false


//객체(객체,배열,함수) --> 참조!!
//원본 객체도 변경된다.
var 사람 = {name:'제로초'};
var 복제인간 = 사람;
복제인간.name = '어피치';
console.log(사람); // {name:'어피치'}

var 배열 = ['사과','오렌지','포도'];
var 복사 = 배열;
복사[0] = '메론';
console.log(배열)// ['메론','오렌지','포도']

var 함수 = function() {};
함수.abc = 'abc';
복사 = 함수;
복사.abc = 'def';
console.log(함수.abc); // 'def'

//객체 복사하기
/* var obj = {a:1 , b:2};
var obj2 = {};
obj2.a = obj.a;
obj2.b = obj.b;
console.log(obj2)// {a:1 , b:2}
obj2.a = 3;
console.log(obj1.a)// 1 */

var obj = {a: 1 , b: 2 , c: 3};
Object.keys(obj) // [a,b,c] 
var obj2 = {};
Object.keys(obj).forEach(function(key) {
   obj2[key] = obj[key];
});

console.log(obj2) // {a:1 , b:2 , c:3}
obj2.a = 4;
console.log(obj.a) // 1

//객체간 참조관계 알아보기
//obj === obj2 결과가 true 이면 참조관계, 연결되어있다.

//객체안의 객체가 있을때 (2단계 구조)
//객체안 객체는 참조가 된다.
var ob = {a: 1, b: {c: 1}};
Object.keys(ob) // [a,b,c] 

var obj3 = {};
Object.keys(ob).forEach(function(key) {
   obj3[key] = ob[key];
});
obj3.b.c = 8;
console.log(ob.b.c) // 8로 바뀐다!

//얕은복사 -- 참조 , 깊은복사 -- 복사








