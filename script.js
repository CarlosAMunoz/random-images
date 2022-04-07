//Generamos un número aleatorio para elegir la imagen. 
const minimum = 1;
const maximum = 900;
const random = () => {
  
  let num = Math.floor(Math.random() * (maximum - minimum)) + minimum;
  return num;
}


//Se crea una funcionón encargada de generar e imprimir los nuevos elementos. 
const createImageNodes = (columnas) => {
  
  const image = document.createElement("img");
  image.src = `https://source.unsplash.com/collection/${random()}`;
  image.className = "photo";
  console.log(image.src);
  let contImages = document.getElementById(`cont-images${columnas}`);
  contImages.appendChild(image);
}



//Función para imprimir las imágenes
export const printImages = (columnas, cantidad) => {
  //El bucle ejecuta CANTIDAD veces la función para imprimir imágenes en pantalla.  
  for (let i = 0; i < cantidad; i++) {
    createImageNodes(columnas);
  }
} 
