import React from "react";

interface Prop {
  searches: string[];
  onLabelClicked: (term: string) => void;
}

export const PreviousSearches = ({ searches, onLabelClicked }: Prop) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas previas</h2>
      <ul className="previus-searches-list">
        {searches.map((item) => (
          <li key={item} onClick={() => onLabelClicked(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
