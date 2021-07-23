import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';

export const character = () => {

    const [character, setCharacter] = useState({});
    const {store, actions} = useContext(Context);

    return (
        <div>

            <p>Imagen</p>
            <h2>Nombre</h2>
            <p> Loremhjgdsjklgsdbjsabsj</p>
            <br></br>
            <p>Birth year</p>
            <p>Gender</p>
            <p>Height</p>
            <p>Eye color</p>
            <p>Skin color</p>

        </div>
    );

};