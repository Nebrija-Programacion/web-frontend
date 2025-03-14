import { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
    name: string;
    status: string;
    origin: string;
    image: string;
}

const Character: FunctionalComponent<Props> = (props) => {
    return (
        <div class="characterComponent">
            <img src={props.image} alt={props.name}/>
            <div>
                <div>Status: {props.status}</div>
                <div>Origin: {props.origin}</div>
            </div>
        </div>
    )
}

export default Character;