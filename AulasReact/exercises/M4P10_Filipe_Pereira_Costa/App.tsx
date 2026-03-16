import { Box } from '@mui/material';
import Header from './components/header';
import UserCard from './components/userCard';
import { User } from './types/User';
import { useState, useEffect } from 'react';


function App() {

const [users, setUsers] = useState<User[]>([]);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => console.error('Error fetching users:', error));
}, []);


function refreshPage() {
  window.location.reload();
}


  return (

<Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}>


            <Header
      onRefresh={refreshPage}
      />


      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}

        </Box>    
    

  );
}

export default App 
