
function ToDoList() {
    let MainBlock = document.createElement('div'),
        container = document.createElement('div'),
        name = document.createElement('p'),
        block = document.createElement('div'),
        input = document.createElement('input'),
        ButtonBlock = document.createElement('div'),
        saveButton = document.createElement('button'),
        deleteButton = document.createElement('button'),
        ul = document.createElement('ul'),
        li;

    document.body.appendChild(MainBlock);
    MainBlock.classList.add('MainBlock');

    MainBlock.appendChild(container);
    container.classList.add('container');

    container.appendChild(name);
    name.classList.add('name');
    name.innerHTML = 'Список дел';

    container.appendChild(block);
    block.classList.add('block');

    block.appendChild(input);
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'text');
    input.setAttribute('placeholder', 'Напишите своё дело');

    container.appendChild(ButtonBlock);
    ButtonBlock.classList.add('ButtonBlock');

    ButtonBlock.appendChild(saveButton);
    saveButton.classList.add('saveButton');
    saveButton.innerHTML = 'Добавить';

    ButtonBlock.appendChild(deleteButton);
    deleteButton.classList.add('deleteButton');
    deleteButton.innerHTML = 'Очистить';

    container.appendChild(ul);
    ul.classList.add('list');

    input.addEventListener('keyup', function() {
        p = document.createElement('p');
        p.innerHTML = this.value;
    });

    function save() {

        li = document.createElement('li');
        ul.prepend(li);

        let checkbox = document.createElement('input');
        checkbox.classList.add('checkbox');
        checkbox.setAttribute('type', 'checkbox');

        let redactor = document.createElement('i');
        redactor.classList.add('fa');
        redactor.classList.add('fa-pencil');

        let trash = document.createElement('i');
        trash.classList.add('fa');
        trash.classList.add('fa-trash-o');

        if (input.value) {
            li.append(checkbox, p, redactor, trash);
            input.value = '';
        }
        
        li.addEventListener('click', function(event) {
            let target = event.target;
            if (target.tagName == 'INPUT') {
                 console.log('получилось!!!');
                 target.classList.toggle('checked');
            }
        });

        redactor.addEventListener('click', function() {
            let inputRedactor = document.createElement('input');
            inputRedactor.classList.add('inputRedactor');
            inputRedactor.setAttribute('type', 'text');
            inputRedactor.setAttribute('id', 'text');
            inputRedactor.setAttribute('placeholder', p.innerHTML);
            p.hidden = true;
            redactor.remove();
            
            let saveChange = document.createElement('i');
            saveChange.classList.add('fa');
            saveChange.classList.add('fa-save');
            li.append(checkbox, inputRedactor, saveChange, trash);
                
            saveChange.addEventListener('click', function(){
            inputRedactor.remove();
            saveChange.remove();
            p.hidden = false;
            p.innerHTML = inputRedactor.value;
            li.prepend(checkbox, p, redactor, trash);
            });
        });

        trash.addEventListener('click', function() {
            trash.parentElement.remove();
        });        
    };

    saveButton.addEventListener('click', save);

    deleteButton.addEventListener('click', () => {
            ul.remove();
        });
        deleteButton.addEventListener('mouseover', () => {
            deleteButton.classList.add('red');
        }); 
        deleteButton.addEventListener('mouseout', () => {
            deleteButton.classList.remove('red');
        }); 

};

window.addEventListener('load', ToDoList);