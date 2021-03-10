import React from 'react';
import PropTypes from 'prop-types';

function MaladyList(props) {
  const { onSelectMalady } = props;

  return (
    <>
      <div className="row">
        <div className="col-6 mx-auto">
          <div className="card border-0">
            <div className="card-body">
              <h4>Welcome to the Nutri supplement database!</h4>
              <h5>Click the links below to view supplement suggestions.</h5>
              <hr />
              <h2><button className="btn btn-info" onClick={ () => onSelectMalady('sugar', 'Blood Sugar Support') }>Blood Sugar Support</button></h2>
              <h2><button className="btn btn-info" onClick={ () => onSelectMalady('detox', 'Detox Support') }>Detox Support</button></h2>
              <h2><button className="btn btn-info" onClick={ () => onSelectMalady('immune', 'Immune System Support') }>Immune System Support</button></h2>
              <h2><button className="btn btn-info" onClick={ () => onSelectMalady('liver', 'Liver Health') }>Liver Health</button></h2>
              <h2><button className="btn btn-info" onClick={ () => onSelectMalady('skin', 'Skin Health') }>Skin Health</button></h2>
              <h2><button className="btn btn-info" onClick={ () => onSelectMalady('digestive', 'Digestive Health') }>Digestive Health</button></h2>
              <h2><button className="btn btn-info" onClick={ () => onSelectMalady('athletic', 'Athletic Performance') }>Athletic Performance</button></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

MaladyList.propTypes = {
  onSelectMalady: PropTypes.func
}

export default MaladyList;

// click a malady.. an API call is made with that malady as a parameter?
// could put the API call function in the malady list component

//onSelectMalady toggles what is visible on page, and is triggered if a malady is clicked
// after a malady is clicked, an API call needs to be made with that malady as the argument
// should these both be in one function? 
// error could be displayed on main page as before if an API call fails using error prop and isLoading
// can I have a function doing 3 things from here? maybe.. dispatching 2+ actions with API call.


// create another state in store, to hold malady or null, pull it using useSelector, and display it above the .map