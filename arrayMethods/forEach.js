let ranks = ['A', 'B', 'C'];
// for(let i = 0; i < ranks.length; i++){
//     console.log(ranks[i]);
// }

// ranks.forEach(function(e){
//     console.log(e);
// })

function Counter(){
    this.count = 0;
    let self = this;
    return {
        increase: function(){
            return self.count++;
        },
        current: function(){
            return self.count;
        },
        reset: function(){
            return self.count = 0
        }
    }
}

let counter = new Counter();
let numbers = [1, 2, 3];
let sum = 0;

numbers.forEach(function(e){
    sum += e;
    this.increase();
}, counter);

console.log(sum);
console.log(counter.reset());