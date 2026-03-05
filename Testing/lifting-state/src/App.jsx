import { useState } from 'react'
import usersData from './data/users.json'
import User from './components/User';
import './App.css'


usersData.forEach(user => {
  user.selected = false
})


function App() {

  const [users, setUsers] = useState(usersData);

  const selectUser = (id) => {

    //create a copy to easily change it and set it
    const copiaUsers = [...users]

    //deselect all users
    copiaUsers.forEach(user => user.selected = false)

    //find the user to select
    const user = copiaUsers.find(user => user.id === id)

    //set users with new updated state
    user.selected = true

    setUsers(copiaUsers)
  }

  return (
    <>
      <div>
        {users.map(user => <User key={user.id} user={user} selectUser={selectUser} />)}
      </div>
    </>

  )
} 

export default App