import React from 'react'
import uid from 'uid'

const CourseAddForm = props => (
  <form onSubmit={props.onAddCourse}>
    <input type="text" placeholder="Nombre del Curso" name="name" />
    <input type="text" placeholder="Profesor" name="teacher" />
    <input type="date" placeholder="Fecha de inicio" name="date" />
    <input type="hidden" name="id" value={uid(10)} />
    <input type="submit" value="Guardar" />
  </form>
)

export default CourseAddForm