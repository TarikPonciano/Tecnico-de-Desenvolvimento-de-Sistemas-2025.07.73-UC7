document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    // Carregar tarefas do localStorage ao iniciar
    loadTasks();

    // Evento de submissão do formulário
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask();
    });

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

        const newTask = {
            id: Date.now(), // ID único baseado no timestamp
            name,
            status,
            date,
            description
        };

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
            `;

            taskList.appendChild(listItem);
        });
    }

    // Função principal de carregamento
    function loadTasks() {
        const tasks = getTasks();
        displayTasks(tasks);
    }
});