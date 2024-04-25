import "./styles.css";

const MakeList = (props) => {
  const { data, updatesearchedValue } = props;
  const { id, suggestion } = data;
  searchedValue = () => {
    updatesearchedValue(suggestion);
  };

  return (
    <li className="listItem">
      <p className="suggestionPara">{suggestion}</p>
      <button onClick={searchedValue}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  );
};
export default MakeList;
