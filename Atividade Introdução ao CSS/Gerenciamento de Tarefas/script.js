document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const modal = document.getElementById('modal-edit');
    const botaoFecharModal = document.getElementById('btn-fechar-modal');
    // Carregar tarefas do localStorage ao iniciar
    loadTasks();

    // Evento de submissão do formulário
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask();
    });

    botaoFecharModal.addEventListener('click', (e) => {
        closeModal();
    })


    // Função para obter as tarefas salvas
    function getTasks() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    // Função para salvar as tarefas
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Função para adicionar uma nova tarefa
    function addTask() {
        const name = document.getElementById('task-name').value;
        const status = document.getElementById('task-status').value;
        const date = document.getElementById('task-date').value;
        const description = document.getElementById('task-description').value;

        let idContador = JSON.parse(localStorage.getItem("idContador")) || 0
        idContador = Number(idContador)
        idContador += 1

        const newTask = {
            id: idContador, // ID único baseado no timestamp
            name,
            status,
            date,
            description
        };
        localStorage.setItem("idContador", JSON.stringify(idContador))
        const tasks = getTasks();
        tasks.push(newTask);
        saveTasks(tasks);

        // Limpar o formulário e recarregar a lista
        taskForm.reset();
        displayTasks(tasks);
    }



    // Função para exibir as tarefas na interface
    function displayTasks(tasks) {
        // Limpa a lista antes de reconstruir
        taskList.innerHTML = '';

        if (tasks.length === 0) {
            taskList.innerHTML = '<p style="text-align: center; color: #6c757d;">Nenhuma tarefa cadastrada. Adicione uma!</p>';
            return;
        }

        tasks.forEach(task => {
            // CRIAÇÃO DO ELEMENTO HTML COM A CLASSE DINÂMICA
            const listItem = document.createElement('li');
            listItem.className = `task-item status-${task.status}`; // Aplica a classe de status!
            listItem.dataset.id = task.id;

            // Formata a data para exibição
            const displayDate = task.date ? new Date(task.date).toLocaleDateString('pt-BR') : 'Não definida';

            listItem.innerHTML = `
                <div class="task-details">
                    <span class="task-name"><strong>${task.name}</strong></span> 
                    <span class="task-status-text"> (${task.status.toUpperCase()})</span>
                    <br>
                    <small>Data: ${displayDate}</small>
                    ${task.description ? `<p class="task-description">${task.description}</p>` : ''}
                </div>
                <div class="task-buttons">
                
                    <button class="btn-edit" type="button">Editar</button>
                    <button class="btn-delete" type="button">Remover</button>
                
                </div>
            `;

            listItem.querySelector(".btn-edit").addEventListener("click", (e) => {
                editTask(e, task.id)
            })
            listItem.querySelector(".btn-delete").addEventListener("click", (e) => {
                removeTask(e, task.id)
            })

            taskList.appendChild(listItem);
        });
    }

    function editTask(e, idTask) {
        const campoId = document.getElementById("edit-id")
        const campoNome = document.getElementById("edit-name")
        const campoStatus = document.getElementById("edit-status")
        const campoData = document.getElementById("edit-date")
        const campoDescricao = document.getElementById("edit-description")

        const listaTarefas = getTasks()

        const tarefaEscolhida = listaTarefas.find((t) => t.id == idTask)

        campoId.value = tarefaEscolhida.id
        campoNome.value = tarefaEscolhida.name
        campoStatus.value = tarefaEscolhida.status
        campoData.value = tarefaEscolhida.date
        campoDescricao.value = tarefaEscolhida.description

        modal.style.display = "block";



    }

    function removeTask(e, idTask) {
        const confirmacao = confirm("Tem certeza que deseja remover a tarefa?")

        if (!confirmacao) {
            return
        }

        const listaTarefas = JSON.parse(localStorage.getItem("tasks"))

        const listaTarefasModificado = listaTarefas.filter((t) => t.id != idTask)

        localStorage.setItem("tasks", JSON.stringify(listaTarefasModificado))

        displayTasks(listaTarefasModificado)

    }

    function closeModal() {
        modal.style.display = "none";
    }



    // Função principal de carregamento
    function loadTasks() {
        const tasks = getTasks();
        displayTasks(tasks);
    }
});