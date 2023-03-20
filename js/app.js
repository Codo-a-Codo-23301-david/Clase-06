

/// Importar funciones o clases
import Button from "./components/button.js";
import Input from "./components/input.js";
import Video from "./components/video.js";


//////////////////////////////////////////////////////
////DATOS
//////////////////////////////////////////////////////
let arrayDeInput = ["Usuario", "Apellido","Password", "E-mail"];
let arrayFiltrado = arrayDeInput.filter(element => element=="Password");
let mySuperArrayofStrings = ["Usuario", "Apellido", "Password", "E-mail"];
let ancho_video= 600;
let alto_video= 400;
let url_video = "https://www.w3schools.com/tags/movie.mp4"
let tipo_video = "video/mp4";
//let url_video ="https://www.youtube.com/watch?v=rpo_mZXoyig";


// //////////////////////////////////////////////////
//FUNCIONES
/////////////////////////////////////////////////////

function renderButton(text){
    let myButon = new Button("app", text);
    myButon.render();
 }

function renderInput(type){
    let input_type = "none";
    switch(type){

        case "Password":
        input_type = "password"
        break;

        case "E-mail":
            input_type = "email"
            break;

        default: 
        input_type = "text"
        break;
    }
    let myInput2 = new Input("objInput", input_type);
    myInput2.render();
}

function renderVideo(ancho, alto, url, tipo){
    let myVideo = new Video("video_peli", ancho, alto, url, tipo);
    myVideo.render();
 }

/////////////////////////////////////////////////////////
//LOGICA DE LA APP
/////////////////////////////////////////////////////////

 //aplicar el filtrado
 arrayFiltrado.forEach(function (element) {
    renderInput(element);
});


mySuperArrayofStrings.forEach(element => {
    renderButton(element)
});


renderVideo(ancho_video, alto_video, url_video, tipo_video);