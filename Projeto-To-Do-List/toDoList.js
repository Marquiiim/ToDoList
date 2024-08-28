const taskListAdd = document.querySelector(".task-list")
const taskButtonAdd = document.querySelector(".task-add")
const listComplet = document.querySelector(".list-task")
let list = []

rechargeTasks()
taskButtonAdd.addEventListener("click", addTask)

function addTask() {
    if(taskListAdd.value.trim() === '' ) {
        alert('[ERROR] Escreva algo para adicionar na lista')
        return
    } else {
        {const taskValue = taskListAdd.value.trim();
            if (taskValue) {
                list.push({
        
                    task : taskValue,
                    concluded: false
        
                });
                listTasks();
                taskListAdd.value = ''; // Limpa o campo de entrada
    }
    }
}
}

function listTasks() {
    let html = ''; // Variável temporária para armazenar o HTML

    list.forEach((item, index) => {
        html += `
        <li class="task ${item.concluded && "done"}">
            <img src="./img/checked.png" alt="check-afazeres" onclick="concludedItem(${index})">
            <p>${item.task}</p>
            <img src="./img/trash.png" alt="trash-afazeres" onclick="deletItem(${index})">
        </li>
        `;
    });

    listComplet.innerHTML = html; // Atualiza o conteúdo da lista

    localStorage.setItem('list', JSON.stringify(list))

}

function concludedItem(index) {
    list[index].concluded = !list[index].concluded

    listTasks()
}

function deletItem(index) {
    list.splice(index, 1)

    listTasks()
}

function rechargeTasks() {
    const tasksLocalStorage = localStorage.getItem('list')

    if (tasksLocalStorage) {
    list = JSON.parse(tasksLocalStorage)
    }

    listTasks()
}