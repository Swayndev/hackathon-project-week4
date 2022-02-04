import test from "./modal.js";
import  {Widget} from "./widget.js";


//fetching the data from the API for
const loadData = async () => {
  
  try {
      // This is fetching the API to get all the events
    const response = await fetch(
      "https://test-api.codingbootcamp.cz/api/e1c1d0fc/events"
    );
        // this is converting the response into JSON format
    const responseData = await response.json();
        console.log('This is the responseData const', responseData);

    return responseData;

    } catch(error) {
        console.log(error);
    }

};





// Display the widgets into the webpage wihtin the .container div
const widget_container = document.querySelector('.event__widgets');

document.addEventListener("DOMContentLoaded", async () => {

    const events = await loadData();
    events.forEach ( (event) => {
        const mywidget = new Widget( event);  // loadData is an array
        widget_container.appendChild(mywidget.create());
    })

});











// console.log('responseData.name', responseData.name);

