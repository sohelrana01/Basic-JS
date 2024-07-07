let a  = 'abc';

if(true){
    var b = 'xyz'
    // let b = 'xyz'
}

// console.log(b);


function say(){
    function hello(){
        var name = 'Sohel';
        console.log(name);
    }
    // console.log(name);
    hello()
}
// console.log(name);
say()

function test(n){
    function a(){
        return n % 3 === 0;
    }

    function b(){
        return n % 5 === 0;
    }

    if(a() && b()){
        console.log(`Both are Divided 3and 5`);
    }else{
        console.log('Not Valid Number');
    }
}
test(35)