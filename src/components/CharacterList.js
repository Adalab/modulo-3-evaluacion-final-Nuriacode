import PropTypes from 'prop-types';
import CharacterCard from "./CharacterCard";
import ErrorMessage from "./ErrorMessage";
import "../styles/layout/Filters.scss";
import '../styles/layout/CharacterList.scss';

const CharacterList = ({ listCharacter, searchName }) => {
  if (listCharacter.length === 0 && searchName !== "") {
    return <ErrorMessage />;
  }

  const dataHtml = listCharacter.map((eachCharacter) => {

    return (
     
      <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />

    );
  });

  return <ul className="characterList">{dataHtml}</ul>;
};


CharacterList.propTypes = {
 listCharacter: PropTypes.array.isRequired,
 searchName: PropTypes.string
};

export default CharacterList;


