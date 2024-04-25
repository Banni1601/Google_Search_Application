import "./styles.css";
import { Component } from "react";
import MakeList from "./MakeList.js";

let suggestionsList = [
  { id: 1, suggestion: "Price of Ethereum" },
  { id: 2, suggestion: "Oculus Quest 2 specs" },
  { id: 3, suggestion: "Tesla Share Price" },
  { id: 4, suggestion: "Price of Ethereum today" },
  { id: 5, suggestion: "Latest trends in AI" },
  { id: 6, suggestion: "Latest trends in ML" },
];
class App extends Component {
  state = { searchValue: "", list: suggestionsList };
  result = (event) => {
    let { searchValue, list } = this.state;
    let typedvalue = event.target.value;
    this.setState({ searchValue: typedvalue });
  };

  updatesearchedValue = (suggestion) => {
    this.setState({ searchValue: suggestion });
  };

  render() {
    const { searchValue, list } = this.state;
    let Data = list.filter((i) =>
      i.suggestion.toLowerCase().includes(searchValue.toLowerCase())
    );
    let items = Data.length > 0;

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="GOOGLe"
        />

        <ul className="">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="searchBar"
              className="searchBar"
            />
            <input type="search" onChange={this.result} value={searchValue} />
          </li>
          {items &&
            Data.map((i) => (
              <MakeList
                data={i}
                key={i.id}
                updatesearchedValue={this.updatesearchedValue}
              />
            ))}
          {!items && <p>No history</p>}
        </ul>
      </div>
    );
  }
}

export default App;
