import { loadData } from "./script.js";
// ==================================
export class Widget {
	constructor(event) {
		this.myElem = null;
		this.name = event.name;
		this.date = event.date;
		this.id = event.id;
		this.description = event.description;
		this.image_url = event.image_url;
	}

	create() {
		this.myElem = document.createElement("div");
		this.myElem.className = "event__widget";
		this.myElem.innerHTML += `
             <div class="event__widget">
                 <h2 class="event__widget-title">${this.name}</h2>
                    <span><button class="btn event__widget-button">
                        Info about the event
                    </button></span>

                    <div class="event__info event__info--hidden" id="event_${this.id}">
                        <p>${this.date}</p>
                        <p>${this.description}</p>
                     <img class="event__widget-image" src="${this.image_url}" alt="event image"/>
                    </div>
                 
             </div>
         `;
		this.widget_btn();
		return this.myElem;
	}

	widget_btn() {
		this.myElem
			.querySelector(".event__widget-button")
			.addEventListener("click", (e) => {
				const changeInfoState = document.getElementById(`event_${this.id}`);

				if (changeInfoState.classList.contains("event__info--hidden")) {
					changeInfoState.classList.remove("event__info--hidden");
				} else if (!changeInfoState.classList.contains("event__info--hidden")) {
					changeInfoState.classList.add("event__info--hidden");
				}

				// changeInfoState.className = 'event__info';
			}); // the end of the addEventListener on .event__info
	} // The end of the widget_btn function
} // The end of the Widget class
