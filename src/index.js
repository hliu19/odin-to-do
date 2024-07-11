import todo from './todo';
import './style.css';

let todos = [];

let todo_container = document.getElementById('root');

let todo_1 = todo("Cook Chicken", "Go to Walmart to buy some chicken. Then, cut it up and season it with some delicious marinades. Then, cook in a pan to make a delicious chicken dinner!", "01/01/2022", "3");
let todo_2 = todo("Buy Bread", "Go to Target to buy some bread.", "01/01/2022", "2");
let todo_3 = todo("Buy Rice", "Go to Target to buy some rice.", "01/01/2022", "1");

function createItem(obj) {
    const item = document.createElement('div');
    const titleElement = document.createElement('h3');
    const descriptionElement = document.createElement('p');
    const dueDateElement = document.createElement('p');
    const priorityElement = document.createElement('p');

    item.classList.add('item');
    titleElement.classList.add('title');
    descriptionElement.classList.add('description');
    dueDateElement.classList.add('due-date');
    priorityElement.classList.add('priority');

    titleElement.textContent = obj.title;
    descriptionElement.textContent = obj.description;
    dueDateElement.textContent = "Due Date: " + obj.dueDate;
    priorityElement.textContent = "priority: " + obj.priority;

    item.appendChild(titleElement);
    item.appendChild(descriptionElement);
    item.appendChild(dueDateElement);
    item.appendChild(priorityElement);
    item.appendChild(createButtons()[0]);
    item.appendChild(createButtons()[1]);
    return item;
}

function createButtons() {
    const del = document.createElement('button');
    const edit = document.createElement('button');

    del.classList.add('delete');
    edit.classList.add('edit');

    del.textContent = "Delete";
    edit.textContent = "Edit";

    return [del, edit];
}

//Display todos
function addItem(todo) {
    todo_container.appendChild(createItem(todo));
    console.log("Added item: " + todo.title);
}

addItem(todo_1);
addItem(todo_2);
addItem(todo_3);

