import React, { Component } from 'react';

class Student extends Component {
    constructor() {
        super();
        this.state = ({
            gradesVisible: false
        })
    }

    seeGrades = () => {
        this.setState({
            gradesVisible: true
        })
    }

    hideGrades = () => {
        this.setState({
            gradesVisible: false
        })
    }

    render() {
        return (
            <div>
                <div className="buttonHolder">
                    {this.state.gradesVisible
                        ? <button onClick={this.hideGrades}>-</button>
                        : <button onClick={this.seeGrades}>+</button>
                    }
                </div>

                <p className="studentName">{this.props.student.name}</p>
                <p>{this.props.student.email}</p>
                <p>{this.props.student.skill}</p>
                <p>{this.props.student.average}</p>

                {this.state.gradesVisible ?
                    <p>grades here</p>
                : null}
            </div>
        );
    }
};

export default Student;