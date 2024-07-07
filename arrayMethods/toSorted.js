////// array.toSorted(compareFn)

const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }
  ];
  
  const sortedBooks = books.toSorted((a, b) => a.year - b.year);
  
  console.log(sortedBooks);

// sorting empty string
  const skills = ['JS', , 'Node.js', 'React'];
  const sortedSkills = skills.toSorted()
  console.log(skills);
  console.log(sortedSkills);
