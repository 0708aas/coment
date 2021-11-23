
const input = document.querySelector('input')
const addButton = document.querySelector('#add')
const addButton1 = document.querySelector('#delete')
const todo = document.querySelector('#todo')


const addTodo = () => {
    const li = document.createElement('li')
    li.textContent = input.value
    if(  input.value.trim() === '' || input.value === '' ){

    } else{
        input.value = ''
        todo.append(li)
    }
li.addEventListener('click',() => {
   if( li.className === ''){
       li.classList.add('line')
   } else if(li.className === 'line'){
       confirm('вы точно хотите удалить?')
       li.remove()
   }

})
 }
addButton.addEventListener('click', ()=> {
    addTodo()
 })

addButton1.addEventListener('click', ()=> {
    confirm('сначала выведи')
    todo.innerHTML = ''
    todo.value = ''
 })
