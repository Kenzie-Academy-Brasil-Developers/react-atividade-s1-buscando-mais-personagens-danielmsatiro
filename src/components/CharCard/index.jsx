import "./style.css";

export const CharCard = ({ character }) => {
  return (
    <div className={`card card--${character.status.toLowerCase()}`}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={`imagem de ${character.name}`} />
    </div>
  );
};
