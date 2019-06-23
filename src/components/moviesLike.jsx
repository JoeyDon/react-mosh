import React, { Component } from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Like extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <FontAwesomeIcon
          icon={this.props.movie.like ? faCoffee : faHome}
          onClick={() => this.props.onLike(this.props.movie)}
        />
      </div>
    );
  }
}

export default Like;
