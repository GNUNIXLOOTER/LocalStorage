// En este  veamos como obtener lo sdatos de Local storage
const nombre = localStorage.getItem('nombre');
console.log(nombre);


//ESTO ES PARA QUE SE MUESTRE COMO UN ARREGLO VALIDO OSEA SE VISUALICE BIEN
const productoJSON = localStorage.getItem('productoJSON');
console.log(JSON.parse( productoJSON ));


const meses = JSON.parse( localStorage.getItem('meses'));
console.log(meses);

