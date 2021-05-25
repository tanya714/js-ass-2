//js code to calculate fibonacci series upto n terms
function fib() {
    number[0] = 0;
    number[1] = 1;
    for (var i = 2; i <= n; i++) {
        number[i] = number[i - 2] + number[i - 1];
    }
    return number[i];
}\\\\\