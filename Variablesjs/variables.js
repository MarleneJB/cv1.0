function getNombre() {
    const nombre = prompt("Ingrese su nombre:");
    document.getElementById("nombre").innerHTML = "Nombre: " + nombre;
  }
  
  function getEmail() {
    const email = prompt("Ingrese su email:");
    document.getElementById("email").innerHTML = "Email: " + email;
  }
  
  function getEdad() {
    const edad = prompt("Ingrese su edad:");
    document.getElementById("edad").innerHTML = "Edad: " + edad;
  }
  