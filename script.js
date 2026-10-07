// el primer punto de boton que cambia estilos
const parrafo = document.getElementById('parrafo');
const botonEstilo = document.getElementById('botonEstilo');

botonEstilo.addEventListener('click', () => {
    parrafo.style.fontFamily = 'Georgia, serif';
    parrafo.style.fontSize = '1.6rem';
    parrafo.style.color = '#f5576c';
});

//el segunto punto obtener valores del formulario

const form1 = document.getElementById('form1');
form1.addEventListener('submit', (event) => {
    event.preventDefault(); // esto evita que el formulario se envie y recargue la pagina}
    const fname = form1.elements['fname'].value;// profe yo huibiera dejado fristname completo jaja 
    const lname = form1.elements['lname'].value;// igual aca jaja 
    console.log('Nombre:', fname);
    console.log('Apellido:', lname);

});

// el 3er punto Mostrar alerta con información de enlaces

const botonEnlaces = document.getElementById('botonEnlaces');
botonEnlaces.addEventListener('click', () => {
    const enlaces = document.querySelectorAll('a');
    alert(
        'Total de enlaces: ' + enlaces.length + '\n' +
        'Primer enlace: ' + enlaces[0].href + '\n' +
        'Ultimo enlace: ' + enlaces[enlaces.length - 1].href
    );
});

// tareas extras - posibles cascaritas 

const contenedor = document.getElementById('contenedor');
const segundos = document.querySelectorAll('.segundo');
const terceroEnOl = document.querySelector('ol .tercero');

console.log(contenedor, segundos, terceroEnOl);
const ul = contenedor.querySelector('ul');
contenedor.textContent = 'hola';

const footer = document.querySelector('.footer');
footer.classList.add('principal');
footer.classList.remove('principal');

const nuevoLi = document.createElement('li');
nuevoLi.textContent = 'cuatro';
ul.append(nuevoLi);