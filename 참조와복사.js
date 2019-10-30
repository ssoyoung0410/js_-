
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