import React, { useState,Fragment} from 'react'
import UserTable from './table/UserTable'
import AddUserForm from './form/AddUserFrom'
import EditUserForm from "./form/EditUserForm"
import './App.css'

const App = () => {
  const usersData = [
    { id: 1, name: 'Durgesh', username: 'durgeshjhalwa' },
    { id: 2, name: 'admin', username: 'admin123' },
    { id: 3, name: 'Ram', username: 'ramlaxman' },
  ]

  const initialFormState = { id: null, name: '', username: '' }

  const [users, setUsers] = useState(usersData)
  const [ currentUser, setCurrentUser ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)


  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = (id) => {
    setEditing(false)
    setUsers(users.filter((user) => user.id !== id))
  } 
  const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

  return (
    <div className="container">
      <h1>CRUD App</h1>
      <div className="row">
				<div className="editform">
					{editing ? (
						<Fragment>
							<h2>Edit Employee</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
            <div className="Add_user">
							<h2>Add Employee</h2>
							<AddUserForm addUser={addUser} />
              </div>
						</Fragment>
					)}
				</div>
        <div>
          <h2>View Employee</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
          
        </div>
        
      </div>
    </div>
  )
}

export default App