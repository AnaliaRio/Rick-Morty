import React, {useEffect, useState} from 'react';
import { info } from '../functions/functions';

const Index = () => {
    const [characters, setCharacters] = useState(null)

    useEffect(()=>{
        info(setCharacters)
    }, [])

    return(
        <>
        {characters != null ? (
            characters.map(character =>(
                <div key={character.id}>
                    <a href={`/character/${character.id}`}>{character.name}</a>
                </div>
            )) 
        ) : ('There are no characters')}
        </>
    )
}

export default Index;