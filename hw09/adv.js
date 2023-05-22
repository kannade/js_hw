//Чи́сла Фибона́ччи — элементы числовой последовательности в которой первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел.

function* fibonacci() {
    let current = 0;
    let next = 1;
    while (true) {
        yield current;
        [current, next] = [next, current + next];
    }
}

function fibonacciGenerator(n) {
    let fibArray = [];
    const fib = fibonacci();

    if (n === 0) {
        fibArray = [];
    }
    else if (n === 1) {
        fibArray = [0];
    }
    else {
        for (var i = 0; i < n; i++) {
            fibArray.push(fib.next().value);
        }
    }

    return fibArray;
}

console.log('Фибоначчи — ', fibonacciGenerator(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//Просто́е число́ — натуральное число, имеющее ровно два различных натуральных делителя. Другими словами, натуральное число p является простым, если оно отлично от 1 и делится без остатка только на 1 и на само p. 

function* primeGenerator() {
    let num = 2;
    while (true) {
        if (isPrime(num)) {
            yield num;
        }
        num++;
    }
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function primeGeneratorArray(n) {
    let primeArray = [];
    const primes = primeGenerator();

    for (var i = 0; i < n; i++) {
        primeArray.push(primes.next().value);
    }

    return primeArray;
}

console.log('Простые числа — ', primeGeneratorArray(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]