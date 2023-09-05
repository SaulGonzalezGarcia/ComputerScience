
alumnos = [];

function agregarAlumno(nombre, apellidos, edad, materiasInscritas, calificaciones, grupo) {
    const nuevoAlumno = {
        nombre,
        apellidos,
        edad,
        materiasInscritas,
        calificaciones,
        grupo
    };
    alumnos.push(nuevoAlumno);
}

function renderizarAlumnos() {
    const alumnosListDiv = document.getElementById("alumnos-list");
    alumnosListDiv.innerHTML = "";

    alumnos.forEach((alumno) => {
        const alumnoDiv = document.createElement("div");
        alumnoDiv.className = "alumno-item";
        alumnoDiv.innerHTML = `<h2> ${alumno.nombre} ${alumno.apellidos} </h2>
        <p> Edad: ${alumno.edad} </p><p>Materia: ${alumno.materiasInscritas}</p><p>Calificaciones: ${alumno.calificaciones}</p><p>Grupo: ${alumno.grupo}`;
        alumnosListDiv.appendChild(alumnoDiv);
    });
}


function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const nombre = form.elements[0].value;
    const apellidos = form.elements[1].value;
    const edad = form.elements[2].value;
    const materiasInscritas = form.elements[3].value;
    const calificaciones = form.elements[4].value;
    const grupo= form.elements[5].value;

    agregarAlumno(nombre, apellidos, edad, materiasInscritas, calificaciones, grupo);
    form.reset();
    renderizarAlumnos();
}

document.getElementById("alumno-form").addEventListener("submit", handleFormSubmit);

agregarAlumno("Juan", "Perez", 20, "Español", 100, "A");
agregarAlumno("Maria", "Gomez", 19, "Español", 100, "B");

renderizarAlumnos();



