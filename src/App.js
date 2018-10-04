import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Student from './components/Student';


class App extends Component {
  constructor() {
    super();
    this.state = ({

    })
  }

  componentDidMount = () => {
    axios({
      method: "GET",
      url: "https://www.hatchways.io/api/assessment/students",
    }).then((res) => {
      const students = res.data.students;
      this.studentData(students);
    })
  }

  studentData = (students) => {
    let studentArray = [] 
    const add = (a, b) => {
      return Number(a) + Number(b)
    }

    students.forEach((student) => {
      const grades = student.grades
      const sum = grades.reduce(add)
      const average = `${(sum / (grades.length))}%`
      const obj = {
        pic: student.pic,
        firstName: student.firstName.toLowerCase(),
        lastName: student.lastName.toLowerCase(),
        name: `${student.firstName} ${student.lastName}`,
        email: student.email,
        skill: student.skill,
        average: average,
        key: student.id
      }
      studentArray.push(obj)
    })

    this.setState({
      students: studentArray,
      filteredArray: studentArray
    })

  }

  handleTextChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();

    console.log(searchQuery)
    const match = (students) => {
      return (
        students.firstName.includes(searchQuery) || students.lastName.includes(searchQuery)
      )
    }
    const filteredArray = this.state.students.filter(match)
    console.log(filteredArray)

    this.setState({
      filteredArray: filteredArray
    })

  }

  render() {
    return (
      <div className="App">
        <h1>hey</h1>
        <section>
          <form action="">
            <input type="text" onChange={this.handleTextChange}/>
          </form>
          {this.state.students ?
            <div>
              {this.state.filteredArray.map((student) => {
                return (
                  <Student key={student.key} student={student} />
                )
              })}
            </div>
          : null }
        </section>
      </div>
    );
  }
}

export default App;
