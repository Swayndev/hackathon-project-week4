const featuredEvent = document.querySelector(".featured__event");
const featuredName = document.querySelector(".fevent__name");
const featuredDescr = document.querySelector(".fevent__description");
const featuredImage = document.querySelector(".fevent__image");

const getEvents = async () => {
	try {
		//prettier-ignore
		const data = await fetch("https://test-api.codingbootcamp.cz/api/9e5603be/events");
		const listAllEvents = await data.json();
		featuredName.textContent = listAllEvents[0].name;
		featuredDescr.textContent = listAllEvents[0].description;
		// featuredImage.src = listAllEvents[0].img_url;
	} catch (error) {
		console.error(error);
	}
};
getEvents();

export default function featured() {}
