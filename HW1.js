// 1
var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    alert(foo);
}
bar();

//2
/*
 сторінка виведе на екран повідомлення з числом 10
 тому що змінна foo є локальною змінною.
 для якої доступна блочна область видимості також
 */

//3
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);
/*
 локальна змінна а=10 недоступна глобально
 */

//4
var a = 1;
function b() {
    window.a = 10;
    return;
    function a() {}
}
b();
console.log(a);

//тепер змінна а = 10 доступна глобально

//5
//unary
var o1 = -o1; //3 -> -3
o2 = +o2 ;   // '3' -> 3 (num)
o3 = ++;     // 3 -> 4
o4 = --;     // 3 -> 2
o5 = ~o5;    // 3 -> -4
o6 = !o6;     // 3 -> false, 0 -> true
o7 = typeof o7;   // 3 -> number
//binary
var o8 =  a-b;
var o9 = a+b;
var o10 = a*b;
var o11 = a/b;
var o12 = a%b;
var o13 = a>b;
var o14 = a!=b;
var o15 = a&&b;
//trinary
var o = 3>0 ? "a" : "b";  // a

//6
var a = 'Нехай завжди буде сонце,\n';
var b = 'Нехай завжди буде небо,\n';
var c = 'Нехай завжди буде мама,\n';
var d = 'Нехай завжди буду я.';

var e = a.concat(b).concat(c).concat(d);
console.log(e);

//7
var s = '*****************************';
var b = 4;
var c = 5;
var a;

while (Math.abs(b)<6){
    a=s.slice(0, (29- Math.abs(b)*Math.abs(c)));
    b--;
    c--;
    console.log(a);
}

//8
var date = new Date();
var i = 0;
console.log(date);
while (true){
    i++;
    var f = new Date();
    if (f-date>10000){
        break;
    }
}
console.log(f);
