import React, { Component } from "react";
import "./Search.css";
import keys from "../../config.json";
import axios from "axios";

class Search extends Component {
  state = {
    results: []
  };

  onSearch = value => {
    if (value) {
      const { url, api_key } = keys.maps;
      const query = `${url}json?address=${value}&key=${api_key}`;
      axios.get(query).then(response => {
        const results = response.data.results.map(result => {
          return {
            formatted_addres: result.formatted_address,
            location: result.geometry.location,
            place_id: result.place_id
          };
        });
        this.setState({ results });
      });
    }
  };

  render() {
    const onSelect = this.props.onSelectHandler;
    return (
      <div className="Search">
        <input
          id="inputfield"
          className="FormFields InputField"
          placeholder="Introduce ciudad"
          type="text"
        />
        <button
          id="search"
          className="FormFields ButtonField"
          onClick={() =>
            this.onSearch(document.getElementById("inputfield").value)
          }
        >
          Buscar
        </button>
        <div className="FormFields Results">
          {this.state.results.map(result => (
            <div
              className="Result"
              key={result.place_id}
              onClick={() => onSelect(result)}
            >
              {result.formatted_addres}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export { Search as default };
