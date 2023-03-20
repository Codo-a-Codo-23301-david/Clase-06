

export default class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
        // completa this.text
    }

    // Diseño inventado por el profe...
    render(){
        let myApp = document.getElementById(this.parentID);

        //quise ejecutar un evento onclick pero no pude hacerlo funcionar.
        // const myButtonHTML = myApp.innerHTML + "<button onclick= " + "presionar()>"+ this.text + "</button>";
        
        const myButtonHTML = myApp.innerHTML + "<button>"+ this.text + "</button>";

        myApp.innerHTML = myButtonHTML; // VAmos a escribir el html para que se 
        // dibuje un boton con el texto de this.text
    }
}
