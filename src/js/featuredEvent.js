const featuredEvent = document.querySelector("");

const getEvents = async () => {
	try {
		//prettier-ignore
		const data = await fetch("https://test-api.codingbootcamp.cz/api/9e5603be/events");
		const listAllEvents = await data.json();
		return listAllEvents;
	} catch (error) {
		console.error(error);
	}
};
getEvents();

export default function featured() {}
