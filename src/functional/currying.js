function add(a) {
    return function (b) {
        return a + b;
    }
}

add(1)(5);   // add(1,5);

const addition = a => b => a + b; //arrow functions