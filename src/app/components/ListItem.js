import React, { Component } from 'react';

class ListItem extends Component {
  constructor() {
    super();
    this.state = {
       
    }
  }

  render() {
    return (
      <div onClick={this.clickEvent.bind(this)}> 
        <hr />
        <div className="searchResult">
          <div className="art">
            <img src={this.props.imageURL} className="albumArt"/>
          </div>
          <div >
            <p className="info"> {this.props.albumName} </p>
          </div>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  imageURL: React.PropTypes.string.isRequired,
  albumId: React.PropTypes.string.isRequired,
  albumName: React.PropTypes.string.isRequired
}

export default ListItem;
