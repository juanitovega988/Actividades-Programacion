document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const text = taskInput.value.trim();
        if (text === '') return;

        const li = document.createElement('li');
        li.className = 'task-item';
        
        li.innerHTML = `
            <i class="fa-solid fa-circle-check icon-check"></i>
            <span class="task-text">${text}</span>
            <i class="fa-solid fa-xmark delete-btn"></i>
        `;

        // Evento para eliminar la tarea al hacer clic en la "X"
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }

    // Eventos de clic y tecla Enter
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Activar el botón de eliminar para los elementos iniciales de ejemplo
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.task-item').remove();
        });
    });
});