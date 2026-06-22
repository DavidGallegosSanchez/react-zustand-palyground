import { heroes, type Hero, Owner } from "./data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find( (hero) => {
        return hero.id === id;
    });

    //if(!hero) {
    //    throw new Error(`Does not exist heroe with id: ${id}`);
    //}

    return hero;
}

console.log(getHeroById(1));

export const getHeoresByOwner = (owner: Owner) => {
    const heroesByOwner = heroes.filter( hero => 
        hero.owner === owner
    );

    return heroesByOwner;
}