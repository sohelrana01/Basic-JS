function something(greet, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }
    }
    let result = `${greet} ${getFirstName()}`
    console.log(result);
}
something('Hello', 'Sohel rana')