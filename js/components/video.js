
export default class Video {
    constructor(parentID, ancho, alto, url, type) {
        this.parentID = parentID;
        this.ancho = ancho;
        this.alto = alto;
        this.url = url;
        this.type= type;
        // completa this.text
    }

    // Diseño inventado por el profe...
    render(){
        let myApp = document.getElementById(this.parentID);

        //<iframe width="560" height="315" src="https://www.youtube.com/embed/rpo_mZXoyig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        const myVideoHTML = myApp.innerHTML + "<video width="+this.ancho+ " height="+this.alto + " controls autoplay >"+ "<source src="+this.url+ " type= "+ this.type + ">"+ "</source>"+"</video>";
        

        myApp.innerHTML = myVideoHTML; // VAmos a escribir el html para que se 
        // dibuje un boton con el texto de this.text
    }
}