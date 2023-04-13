var objAlumno ={
    matricula: "",
    nombre:"",
    carrera:""
   };
   
   var myAlumnoJson ={
       matricula: "",
       nombre:"",
       carrera:""
      };
   
   var myAlumnoJson;
   var otherAlumno={};
   
   function convertObjToJson(){
    var matriculaElement= document.getElementById("matricula");
    var nombreElement= document.getElementById("nombre");
    var carreraElement= document.getElementById("carrera");
    
    objAlumno.matricula= matriculaElement.value;
    objAlumno.nombre= nombreElement.value;
    objAlumno.carrera= carreraElement.value;
   
    console.log(objAlumno);
    myAlumnoJson=JSON.stringify(objAlumno);
    console.log(myAlumnoJson);
   
    var jsonElement = document.getElementById("myjson");
    jsonElement.innerHTML= myAlumnoJson;
   }
   
   
   function convertJsonToObj(){
    var jsonElement = document.getElementById("myjson");
    var otherAlumno = JSON.parse(jsonElement.innerHTML)
   
    console.log(otherAlumno);
    console.log(otherAlumno.matricula);
    console.log(otherAlumno.nombre);
    console.log(otherAlumno.carrera);
   
    document.getElementById("newMatricula").innerHTML = otherAlumno.matricula;
    document.getElementById("newNombre").innerHTML = otherAlumno.nombre;
    document.getElementById("newCarrera").innerHTML = otherAlumno.carrera;
   }
   