import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(res => res.data)
}

const create = newPersonObj => {
  const request = axios.post(baseUrl, newPersonObj)
  return request.then(res => res.data)
}

const deletePerson = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(res => res.data)
}

const update = (id, newPhone) => {
  const request = axios.put(`${baseUrl}/${id}`, newPhone)
  return request.then(response => response.data)
}

export default { 
  getAll,
  create,
  deletePerson,
  update
}