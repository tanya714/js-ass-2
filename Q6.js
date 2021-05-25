// js code to evaluate the greatest number amongst three given numbers
function greatest(n) {
    var num = n.split(' ');
    let a = eval(num[0]);
    let b = eval(num[1]);
    let c = eval(num[2]);
    if (a >= b && a >= c) {
        return a;
    } else
    if (b >= a && b >= c) {
        return b;
    } else { return c; }
}