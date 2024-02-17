import { FunctionComponent } from "preact";

type CharacterProps = {
  name: string;
  image: string;
  status: string;
};

const Character: FunctionComponent<CharacterProps> = (props) => {
  const { name, image, status } = props;
  return (
    <div class="characterContainer">
      <h2 class="text-overflow">{name}</h2>
      <img class="img-m half-rounded" src={image} />
      <p>
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
};

export default Character;
