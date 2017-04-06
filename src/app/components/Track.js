import React from "react";
import { withRouter} from 'react-router-dom';;
import { connect,  } from 'react-redux';//dispatch

class Track extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: this.props.i,
        }
    }

    render() {
        return (
            <a href={`#${this.props.tracklist[this.state.index].id}`} className="list-group-item"
            onClick={() => this.props.setActiveSong(this.props.tracklist[this.state.index].name)}
            >
                {this.state.index + 1}) {this.props.tracklist[this.state.index].name}
            </a>
        );
    }
}

Track.propTypes = {
    i: React.PropTypes.number.isRequired
}


const mapStateToProps = (state) => {
  return {
    tracklist: state.tracklist,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      setActiveSong: (song) => {
      dispatch({
        type: 'SETACTIVESONG',
        payload: song
      })
    },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Track));