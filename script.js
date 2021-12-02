const content = document.querySelector('.content');

const redp = document.createElement('p');
redp.textContent = "Hey I’m red!";
redp.style.color = "red";

const headthree = document.createElement('h3');
headthree.textContent = "I'm a blue h3!";
headthree.style.color = "blue";


const main = document.createElement('div');
main.setAttribute('style', 'background: pink; border: black 1px solid;'); 


const headone = document.createElement('h1');
headone.textContent = "I'm in a div!";

const anotherp = document.createElement('p');
anotherp.textContent = "ME TOO!";

content.appendChild(redp);
content.appendChild(headthree);
main.appendChild(headone);
main.appendChild(anotherp);
content.appendChild(main);

