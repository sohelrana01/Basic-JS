{
    function add(x, y){
        console.log(new.target);
        return x + y;
    }
    console.log(add(4, 5));
    
    console.log(add.length);
    console.log(add.prototype);
}
{
    function add(x, y){
        if(new.target){
            throw 'The add function cannot be called as a constructor';
        }
        return x + y;
    }
    let obj = new add(10, 20);
    console.log(obj);
}

// apply(), call(), bind() methods