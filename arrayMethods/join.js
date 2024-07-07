const classes = ['btn', 'btnPrimary', 'btn-active'];
const btnclasses = classes.join(': ');
console.log(btnclasses);

const title = 'JavaScript array join example';
const url = title.split(' ')
      .join('-')
      .toLowerCase();
console.log(url);