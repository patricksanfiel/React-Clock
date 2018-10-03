import React, { Component } from 'react';
import '../assets/stylesheets/Clock.css';

class Clock extends Component {
    
    state = {
        date: new Date(),
        classIndex: 0
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.updateTime(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    updateTime(){
        this.setState({
            date: new Date()
        });
    }

    classHandler(){
        let classIndex = this.state.classIndex
        if (this.state.classIndex < 5){
            classIndex++
        } else {
            classIndex = 0
        }
        this.setState({classIndex: classIndex})
    }
 

    render(){
        const clockClassArray = ["clock-class-one", "clock-class-two", "clock-class-three", "clock-class-four", "clock-class-five", "clock-class-six"]
        const bgClassArray = ["bg-class-one", "bg-class-two", "bg-class-three", "bg-class-four", "bg-class-five", "bg-class-six"]
        const clockNameArray = ["Typical Digital", "Hardwood", "Superfly", "Cloning Facility", "Savannah Sunset", "School Desk"]
        const selectedClockClass = clockClassArray[this.state.classIndex]
        const selectedBGClass = bgClassArray[this.state.classIndex]
        const clockName = clockNameArray[this.state.classIndex]

        return(
            <div id="background" className={selectedBGClass}>
                <div id="clock" className={selectedClockClass}>
                    <h1 id="time-text">
                        It is {this.state.date.toLocaleTimeString()}
                    </h1>
                </div>
                <button 
                    onClick={
                        () => this.classHandler()
                    }
                >
                    {clockName}
                </button>
            </div>
        )
    }
}

export default Clock;