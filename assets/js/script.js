

let Tareas = [
    { id: 1, tareaRealiza: "Lavar la ropa", completed: false },
    { id: 2, tareaRealiza: "Pasear al perro", completed: false },
    { id: 3, tareaRealiza: "Bañar al tigre", completed: false }
];

let listTareas = document.getElementById("listaTareas");
let totalTareas = document.getElementById("totalTareas");
let totalTareasRealizadas = document.getElementById("totalTareasRealizadas");
let presBtn = document.getElementById("presBtn");

function ListaRealizada() {
    let listaHtml = "";

    Tareas.forEach((tarea) => {
        const checkbox  = tarea.completed ? "checked" : "";
        const tareaHtml = `
          <li id="${tarea.id}">
            <label>${tarea.tareaRealiza}</label> 
            <input type="checkbox" onclick="marcarTarea(${tarea.id})" ${checkbox }>
            <button onclick="borrarTarea(${tarea.id})">Borrar</button> 
          </li>`;
        listaHtml += tareaHtml;
    });
    listTareas.innerHTML = listaHtml;
    totalTareas.textContent = Tareas.length;
    totalTareasRealizadas.textContent = Tareas.filter(tarea => tarea.completed).length;
};

function agregarTarea() {
    const inputTarea = document.getElementById("inputTarea"); 
    const agregar = inputTarea.value.trim();

    if (agregar !== "") {
        const id = Tareas.length + 1;
        const nuevaTarea = {
            id: id, tareaRealiza: agregar,
            completed: false
        };

        Tareas.push(nuevaTarea);
        inputTarea.value = "";
        ListaRealizada();
    }
};

ListaRealizada();

function borrarTarea(id) {
    const index = Tareas.findIndex(tarea => tarea.id === id);

    if (index !== -1) {
        Tareas.splice(index, 1);
        ListaRealizada();
    }
};

function marcarTarea(id) {
    const tarea = Tareas.find(tarea => tarea.id === id);

    if (tarea) {
        tarea.completed = !tarea.completed;
        ListaRealizada();
    }
};

presBtn.addEventListener("click", agregarTarea);