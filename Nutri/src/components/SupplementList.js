import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function SupplementList(props) {

  const data = useSelector(state => state.suppData);
  const malName = useSelector(state => state.maladyName);
  const { onSelectBackButton } = props;

  return (
    <>
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1>{malName}</h1>
              <ul>
                {data.map((supplement, index) =>
                    <li key={index} className="text">
                        <h2 id="supp"><strong>{supplement.name}</strong></h2>
                        <hr />
                        <h4 id="supp">Supplement Type:</h4>
                        <p id="supp">{supplement.type}</p>
                        <h4 id="supp">Dosing:</h4>
                        <p id="supp">{supplement.dosing}</p>
                        <h4 id="supp">Contraindications:</h4>
                        <p id="supp">{supplement.contraindications}</p>
                        <br />
                    </li>
                )}
              </ul>
              <button className="btn btn-info" onClick={ () => onSelectBackButton() }>Back to Malady List</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

SupplementList.propTypes = {
  onSelectBackButton: PropTypes.func
}

export default SupplementList;