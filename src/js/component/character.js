import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Item } from "./item";
import { Card } from "react-bootstrap";

export const Character = () => {
	const { store, actions } = useContext(Context);
	const { Characters, setCharacters } = useState([]);

	useEffect(() => {
		getCharacters();
	}, []);

	async function getCharacters() {
		let ang = await actions.getCharacters();
		const characterResults = getCharacterDetails();
		setCharacters(characterResults);
		// eslint-disable-next-line no-console
		console.log(characterResults);
	}

	function getCharacterDetails() {
		// let characterDetails = [];
		// characterDetails = store.characters.results.map((character, index) => {
		// 	let url = character.url;
		// 	return {
		// 		name: character.name,
		// 		gender: character.gender,
		// 		eye_color: character.eye_color,
		// 		hair_color: character.hair_color
		// 	};
		// });
		// return characterDetails;
	}

	return (
		<div>
			<Item />
		</div>
	);
};
