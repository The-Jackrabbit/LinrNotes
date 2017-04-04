import React from 'react';
import '../styles/timer.css';
//import ReactDOM from 'react-dom';
import { Link, withRouter} from 'react-router-dom';
import { connect,  } from 'react-redux';

class Timer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        count: 1,
        seconds: 0,
        minutes: 0,
        hours: 0,
        timeString: '00:00:00'
    }
  }


  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({
        count: (this.state.count + 1),
        seconds: this.state.count%60,
        minutes: Math.floor(this.state.count/60),
        hours: Math.floor(this.state.count/3600)
    })
    this.buildTimeString();
    if (this.props.currentTime===this.props.endTime) {
      this.stopTimer();
    }
  }
  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
  stopTimer () {
    clearInterval(this.timer)
  }

  buildTimeString() {
      var str = '';
      if (this.state.hours < 10) {
          str += '0' + this.state.hours;
      }
      else {
          str += this.state.hours;
      }
      str += ':';
      if (this.state.minutes < 10) {
          str += '0' + this.state.minutes;
      }
      else {
          str += this.state.minutes;
      }
      str += ':'
      if (this.state.seconds < 10) {
          str += '0' + this.state.seconds;
      }
      else {
          str += this.state.seconds;
      }
      this.setState({
          timeString: str
      })
      this.props.setCurrentTime(this.state.timeString);
  }

  render () {
    return (
      <div className='container-fluid'>
        <ul className="nav navbar-nav">
          <li className="headerEntry"><button  type="button" className="btn btn-default" onClick={this.startTimer.bind(this)}><span className="glyphicon glyphicon-play"/></button> </li>
          <li className="headerEntry"><button  type="button" className="btn btn-default" onClick={this.stopTimer.bind(this)}><span className="glyphicon glyphicon-pause"/></button> </li>
          <li className="headerEntry"><p className="time">{this.props.currentTime} / {this.props.endTime}</p></li>
       </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentTime: state.currentTime,
    endTime: state.endTime,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //methods go here
    setCurrentTime: (time) => {
      dispatch({
        type: "SETCURRENTTIME",
        payload: time,
      })
    },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Timer));