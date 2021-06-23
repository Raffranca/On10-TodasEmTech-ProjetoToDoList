const inputToDoList = document.querySelector('.inserir-tarefa');
const buttonAdd = document.querySelector('.add-tarefa');
const mensagemErro = document.querySelector('.mensagem-erro');
const listaTarefa = document.querySelector('.lista-tarefa');
const btnMarcarTodos = document.querySelector('.marcar-todos');
const btnDeletarTodos = document.querySelector('.apagar-todos');
const formulario = document.querySelector('form');

buttonAdd.addEventListener('click',(e)=>{
    e.preventDefault();
    const tarefa = inputToDoList.value.trim();
    const li = document.createElement('li');
    const p = document.createElement('p')
    const img = document.createElement('img')
    img.src='./img/delete.png'
    img.classList.add('img')

    if(tarefa === ''){
        mensagemErro.innerHTML = 'Digite uma tarefa';
        formulario.reset();
    }else{
        p.innerText = tarefa;
        li.appendChild(p)
        li.appendChild(img)
        listaTarefa.appendChild(li)
        mensagemErro.innerHTML = '';
        formulario.reset();
    }

    li.addEventListener('click', (e)=>{
        console.log(e.target)
        if(e.target.tagName == 'P'){
            e.target.classList.toggle('checked')
        }
    })

    img.addEventListener('click',()=>{
        listaTarefa.removeChild(li)
    })
    
})

btnMarcarTodos.addEventListener('click', (e)=>{
    e.preventDefault();
    let getTodosP = document.querySelectorAll('p');
    if(btnMarcarTodos.innerHTML==='Marcar todos'){
        getTodosP.forEach(tarefas=>{
            tarefas.classList.add('checked')
        })
        btnMarcarTodos.innerHTML='Desmarcar todos'

    }else{
        getTodosP.forEach(tarefas=>{
            tarefas.classList='';
        })
        btnMarcarTodos.innerHTML='Marcar todos'

    }
    

})

btnDeletarTodos.addEventListener('click', ()=>{
    listaTarefa.innerHTML='';
})



