//js code to calculate fibonacci series upto n terms
function fibonacci(nums) {

    let fib = [0, 1];
    let data = [];
    data.push(fib[0]);
    data.push(fib[1]);
    for (let i = 2; i < nums; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];

        data.push(fib[i]);
    }

    return data;
}
