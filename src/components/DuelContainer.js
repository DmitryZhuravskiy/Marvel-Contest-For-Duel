import React from "react";
import { connect } from "react-redux";
import { findDuelTarget } from "../actions/duelAction";
import { championsList } from "../App";

function DuelContainer(props) {
  let list = Object.keys(championsList);

  return (
    <div className="champions-duel-list">
      <select onChange={props.findDuelTarget} id="duel">
        {list.map(trr => (
          <option>{trr.toUpperCase()}</option>
        ))}
      </select>
      <div>
        <p>This is full --{props.champion.toUpperCase()}-- </p>
        <ul>
          {championsList[props.champion].map(trr => (
            <li>{trr}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    champion: state.champion
  };
};

const mapDispatchToProps = dispatch => {
  return {
    findDuelTarget: () => dispatch(findDuelTarget())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DuelContainer);
