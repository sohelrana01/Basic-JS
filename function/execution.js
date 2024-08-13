// function sayName(){
//     let name = 'SomeName';
//     console.log('The Name is ' + name);
// }
// sayName()

{
    let a = 5;
    function testMe(){
        let b = 10;

        let user = {
            name: 'Sohel',
            country: 'Bangladesh'
        }
        function testAgain(){
            console.log('Test Again');
        }

        testAgain()
    }
    testMe()
}

// Home Works
{
    const message = 'I can do it';

    function sum(a, b){
        const result = a + b;
        return result;
    }

    function mul(a, b){
        const result = a * b;
        return result
    }

    function calc(a, b){
        return sum(a, b) + mul(a, b)
    }

    function getResult(a, b){
        return calc(a,b);
    }
    getResult(5, 7);
}