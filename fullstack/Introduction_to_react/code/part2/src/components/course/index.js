import React from 'react'
import Header from './header/index'
import Content from './content/index'

const Course = ({course}) => {
  console.log(course);
  return (
    <div>
      {
        course.map(item => <div key={item.id}>
          <Header title={item.name}></Header>
          <Content parts={item.parts}></Content>
        </div>
          
        )
      }
        
        
    </div>
  )
}

export default Course