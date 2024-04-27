// Arreglo de tareas inicial
let tasks = [
    { id: 1, description: "Realizar el desafío de la semana.", completed: false },
    { id: 2, description: "Preparar clase del día lunes y miércoles.", completed: false },
    { id: 3, description: "Llevar el carro al taller.", completed: false }
];

// Función para mostrar todas las tareas
function mostrarTareas() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = task.description;
        if (task.completed) {
            descriptionElement.classList.add("completed");
        }

        const changeButton = document.createElement("button");
        changeButton.textContent = task.completed ? "Realizado" : "Cambiar";
        changeButton.onclick = () => cambiarEstadoTarea(task.id);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = () => eliminarTarea(task.id);

        taskElement.appendChild(descriptionElement);
        taskElement.appendChild(changeButton);
        taskElement.appendChild(deleteButton);
        taskList.appendChild(taskElement);
    });

    // Actualizar totales
    actualizarTotales();
}

// Función para limpiar el campo de entrada al hacer clic en él
function limpiarCampo() {
    const taskInput = document.getElementById("taskInput");
    taskInput.placeholder = ""; // Establecer el valor del campo en vacío (limpiar el contenido)
}

// Función para agregar una nueva tarea
function agregarTarea() {
    const taskInput = document.getElementById("taskInput");
    const description = taskInput.value.trim();
    if (description !== "") {
        const newTask = { id: tasks.length + 1, description: description, completed: false };
        tasks.push(newTask);
        taskInput.value = "";
        mostrarTareas();
    }
}

// Función para cambiar el estado de una tarea
function cambiarEstadoTarea(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        mostrarTareas();
    }
}

// Función para eliminar una tarea
function eliminarTarea(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    mostrarTareas();
}

// Función para actualizar los totales
function actualizarTotales() {
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");

    totalTasks.textContent = tasks.length;
    const completedCount = tasks.filter(t => t.completed).length;
    completedTasks.textContent = completedCount;
}

// Mostrar tareas iniciales al cargar la página
mostrarTareas();
