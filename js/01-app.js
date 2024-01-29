// Veamos algunos ejemeplos de LocalStorage...

// Local Storage funciona con una especie de Llave valor...
// y localStorage persiste mas, si cierro el navegador no se puierden

localStorage.setItem('nombre', 'Juan');

// añadir algo a sessionstorage
// sesionStorage es diferente por que cuando en cuanto cierro el navegador ya se pierden los datos
sessionStorage.setItem('nombre', 'Pablo');

// Local Storage solo soporta strings, no soporta arrays ni objetos pero puedes almacenarlos convirtiendolos a string..

const producto = {
    nombre: 'Monitor 24"',
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('productoJSON', productoString);



// Lo mismo con un array
 const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses',  JSON.stringify(meses));
