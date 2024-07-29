function getUsers(){
    return [
        {userName: 'John', email: 'john@gmail.com'},
        {userName: 'Sohel', email: 'sohel@gmail.com'}
    ]
}

function findUser(userName){
    const users = getUsers();
    const user= users.find((user)=> user.userName === userName);
    return user;
}
// console.log(findUser('John'));

// with callback function

{
    function getUsers(callback){
        setTimeout(()=>{
            callback([
                {username: 'Sohel', email: 'sohel@gmail.com'},
                {username: 'Smith', email: 'smith@gmail.com'}
            ]);
        }, 1000)
    };
    function findUser(username, callback){
        getUsers((users) => {
            const user = users.find((user)=>user.username === username);
            callback(user)
        })

    }
//    findUser('Sohel', console.log);
}

///////// To create promise 

// const promise = new Promise((resolve, reject) => {
//     if(success){
//         resolve(value);
//     }else{
//         reject(console.error);
//     }
// })

{
    function getUsers(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve([
                    {username: 'sohel rana', email: 'sohel@gmail.com'},
                    {username: 'john doe', email: 'john@gmail.com'}
                ])
            }, 1000)
        })
    }
    // function onFulfilled(users){
    //     console.log(users);
    // }
    getUsers().then((users)=>{
        // console.log(users);
    })
    // const promise = getUsers();
    // promise.then((users) => {
    //     console.log(users);
    // })
}

{
    let success = false;

    function getUsers(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(success){
                    resolve([
                        {uname: 'Md Sohel', email: 'md@gmail.com'},
                        {uname: 'Md Rana', email: 'rana@gmail.com'}
                    ])
                } else{
                    reject('Fail to the user requested');
                }
            }, 1000)
        })
    }
    // function onFulfilled(users){
    //     console.log(users);
    // }
    // function onRejected(error){
    //     console.log(error);
    // }

    // const promise = getUsers();
    // promise.then(onFulfilled, onRejected);
    
    const promise = getUsers();
    promise.then(
        (users) => console.log,
        (error) => console.log
    )
}