import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { oneCharacter } from '../functions/functions';

const Character = () => {
    const [character, setCharacter] = useState(null);

    const params = useParams();

    useEffect(()=>{
        oneCharacter(params.id, setCharacter)
    },[]);

    return(
        <>
        <h2>Character with id {params.id} </h2>
        <p>Whose name is {character?.name} </p>
        <img src={character?.image} alt="Character"/>
        </>
    )
}

export default Character;

{/* Lines 17-18
Also:
{character.name = null ? '' : character.name}
{character.image = null ? '' : character.image}

*/}
