import { checkIdentifier } from "$std/semver/_shared.ts";
import { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
    character:{
        name: string,
        image: string,
    }
}

const CharacterCard: FunctionalComponent<Props> = (props) => {
    const {name, image} = props.character;
    
    return(
        <div class="characterCard">
            <img src={image} alt={name}/>
            <div>{name}</div>
        </div>
    )
}

export default CharacterCard;