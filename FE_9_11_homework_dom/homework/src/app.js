let listItemCounter = 0;
let listMaxItems = 10;

let addItemButton = document.querySelector('.add-btn');
let toDoList = document.querySelector('.container');
let inputNewItem = document.querySelector('.input-new-item');
let maxListItems = document.querySelector('.warning');

inputNewItem.onchange = inputNewItem.onkeyup = e => {
    const newTask = inputNewItem.value.trim();

    newTask ? addItemButton.disabled = false : addItemButton.disabled = true;

    if (e.key === 'Enter' && newTask) {
        addTask(newTask);
    }
};

addItemButton.onclick = () => {
    addTask(inputNewItem.value.trim());
}

let addTask = newTaskText => {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'list-item');
    listItem.setAttribute('draggable', true);

    const task = document.createElement('span');
    task.appendChild(document.createTextNode(newTaskText));

    const checkBox = document.createElement('i');
    checkBox.setAttribute('class', 'material-icons');
    checkBox.appendChild(document.createTextNode('check_box_outline_blank'));

    const checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'checkbox-btn');

    const deleteItem = document.createElement('i');
    deleteItem.setAttribute('class', 'material-icons');
    deleteItem.appendChild(document.createTextNode('delete'));

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete-btn');

    checkBtn.appendChild(checkBox);
    checkBtn.appendChild(task);
    deleteBtn.appendChild(deleteItem);
    listItem.appendChild(checkBtn);
    listItem.appendChild(deleteBtn);
    toDoList.appendChild(listItem);

    if (++listItemCounter >= listMaxItems) {
        inputNewItem.disabled = true;
        maxListItems.style.display = 'block';
    }

    checkBtn.onclick = () => {
        checkBox.textContent = 'check_box';
    };

    deleteBtn.onclick = () => {
        listItem.remove();
        listItemCounter--;

        inputNewItem.disabled = false;
        maxListItems.style.display = 'none';
    };

    inputNewItem.value = '';
    addItemButton.disabled = true
}

let dragAndDrop = null;

toDoList.addEventListener('start', e => {
    dragAndDrop = e.target;
});

toDoList.addEventListener('over', e => {
    if (e.target.className === 'list-item') {
        e.preventDefault();
        e.target.style.transform = 'translate(10px, 10px)';
    }
});

toDoList.addEventListener('leave', e => {
    e.target.style.transform = '';
});

toDoList.addEventListener('drop', e => {
    if (e.target.className === 'list-item') {
        e.preventDefault();
        e.target.style.transform = '';
        toDoList.insertBefore(dragAndDrop, e.target);
    }
});
