var i = 0;
var j = 0;
var k = 0;
var l = 30000;
function mainstart() {
    start1();
    start2();
    start3();
    start4();
}
function start1() { 
    const timeout = setTimeout(money, 10);
    i = i + 10000;
}
function start2() { 
    const timeout = setTimeout(talab, 350);
    j = j + 1;
}
function start3() {
    const timeout = setTimeout(check, 600);
    k = k + 1;
}
function start4() {
    const timeout = setTimeout(dolar, 100);
    l = l + 100;
}
function money() {
    document.getElementById('counter').innerHTML =  + i + ' ' + 'تومان (بدهکار)';
    start1();
}
function talab() {
    document.getElementById('counter2').innerHTML =  + j + ' ' + 'طلبکار';
    start2();
}
function check() {
    document.getElementById('counter3').innerHTML =  + k + ' ' + 'چک';
    start3();
}
function dolar() {
    document.getElementById('dolar1').innerHTML =  + l + ' ' + 'تومان';
    start4();
}