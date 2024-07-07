const updateContent = ()=> {
    const content = document.querySelector('#content');
    const hash = window.location.hash.substring(1);

    switch(hash){
        case 'home':
            content.innerHTML = `
                <h1>Home</h1>
                <p>Welcome to the home page.</p>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <h1>About</h1>
                <p>Welcome to the about page.</p>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <h1>Contact</h1>
                <p>Welcome to the contact page.</p>
            `;
            break;
    }
};

window.addEventListener('hashchange', updateContent);
