let inpToDo = document.querySelector('.inpToDo');
let btnAdd = document.querySelector('.btnAdd');
let list = document.querySelector('.list'); 

btnAdd.onclick = () => {
    addItem()
}

inpToDo.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        addItem();
    }
})

function addItem() {
    let inpValue = inpToDo.value;
    let h3 = document.createElement('h3');
    h3.innerHTML += '- ' + inpValue;

    h3.onclick = () => {
        h3.style.textDecoration = 'line-through';
        h3.style.color = 'rgb(33, 167, 0)';
    }
    list.insertAdjacentElement('beforeend', h3);
    inpToDo.value = '';
}
