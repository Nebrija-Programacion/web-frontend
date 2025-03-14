import { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
    character:{
        name: string,
        img: string,
    }
}

const CharacterCard: FunctionalComponent<Props> = (props) => {
    const {name, img} = props.character;
    
    return(
        <div>
            <img src={img} alt={name}/>
            <div>{name}</div>
        </div>
    )
}

export default CharacterCard;