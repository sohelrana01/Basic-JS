let colors = ['red', 'green', 'blue'];
colors.pop();

// console.log(colors);

let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 2,
    removeLast() {
      return [].pop.call(this);
    },
  };
  
  let greting = greetings.removeLast();
  
  console.log(greting);
  console.log(greetings);
  