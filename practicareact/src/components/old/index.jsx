import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uid from 'uid'
import $ from 'jquery'
import { courses } from '../data/courses'
import CourseList from './CourseList'
import CourseAddForm from './CourseAddForm'

class App extends Component {
  constructor(...props) {
    super(...props)

    this.state = {
      courses: []
    }

    this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.resetData = this.resetData.bind(this)
  }

  handleOnAddCourse(e) {
    e.preventDefault()

    let form = e.target,
    course = {
      id: ( form.id.value ) ? form.id.value : App.defaultProps.id,
      name: ( form.name.value ) ? form.name.value : App.defaultProps.name,
      teacher: ( form.teacher.value ) ? form.teacher.value : App.defaultProps.teacher
    }
  
    this.setState({ 
      courses: this.state.courses.concat([course]) 
    })

    form.reset()
  }

  fetchData() {
    $('#root')
      .fadeOut(2000, () => this.setState({ courses:courses }))
      .fadeIn()
  }

  resetData() {
    $('#root')
      .fadeOut(2000, () => this.setState({ courses: [] }))
      .fadeIn()
  }
  
  componentDidMount() {
    this.fetchData()
  }

  render() {
    if ( !this.state.courses.length ) {
      return (
        <div>
          <p>No hay cursos</p>
          <button onClick={this.fetchData}>Cargar cursos</button>
        </div>
      )
    } else {
      return(
        <div>
          <CourseAddForm onAddCourse={this.handleOnAddCourse} />
          <CourseList courses={this.state.courses} />
          <button onClick={this.resetData}>Borrar cursos</button>
        </div>
      )
    }
  }
}

App.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired
}

App.defaultProps = {
  id: uid(10),
  name: 'Curso Desconocido',
  teacher: 'Profesor no asignado'
}

export default App