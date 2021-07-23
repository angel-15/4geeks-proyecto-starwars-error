import { Character } from "../component/character";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: []
		},
		actions: {
			getCharacters: async () => {
				let response = await fetch("https://www.swapi.tech/api/people/");
				let data = await response.json(); //cenvirtiendo de json a lenguaje JS.
				setStore({ characters: data.results });
				// eslint-disable-next-line no-console
				console.log(data.results);
			}
		}
	};
};

export default getState;
