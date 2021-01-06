import React from 'react'
import personServer from '../../server/person'

const Person = (props) => {
  const handleDelete = (id) => {
    if (window.confirm('确定删除该条信息吗？')) {
      personServer.deletePerson(id).then( res =>{
        props.resetData()
        console.log('删除成功！')
      })
      
    }
  }
  return <p>
    {props.person.name} {props.person.number}
    <button onClick={() => handleDelete(props.person.id)}>delete</button>
  </p>
}

export default Person