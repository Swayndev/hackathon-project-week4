import {loadData} from "./script.js";
// ==================================
export class Widget {
    constructor(event) {
        this.myElem = null;
        this.name = event.name;
        this.date = event.date;
        this.id= event.id;
        this.description = event.description;
        this.image_url = event.image_url;
    }

    create() {
        
        this.myElem = document.createElement('div');
        this.myElem.className = "event__widget";
        this.myElem.innerHTML +=
        `
             <div class="event__widget">
                 <h2 class="event__widget-title">${this.name}</h2>
                 <span><button class="btn event__widget-button">Info about the event</button></span>
                 <p>${this.date}</p>
                 <p>${this.description}</p>
                 <img class="event__widget-image" src="${this.image_url}" alt="event image"/>
                 
             </div>
         `



        return this.myElem;
    };


    
};







