// function createmachine(name, status){
//     return {
//         name: name,
//         status: status
//     }
// }
// ES6

// function createmachine(name, status){
//     return {
//         name,
//         status
//     }
// }
// Computed property name
let mname = 'machine name'
let machine = {
    [mname]: 'server',
    'hours': 2000,
}
console.log(machine[mname]);
console.log(machine['hours']);

// Concise method syntax
let server = {
    name: 'Server',
    restart: function(){
        console.log(`The ${this.name} is restarting...`);
    }
}
console.log(server.restart());