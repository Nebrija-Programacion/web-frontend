import { FunctionComponent } from "preact";

type CharacterProps = {
  name: string;
  image: string;
  status: string;
};

const Character: FunctionComponent<CharacterProps> = (props) => {
  const { name, image, status } = props;
  return (
    <>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>
        <strong>Status:</strong>
        {status}
      </p>
    </>
  );
};

export default Character;
