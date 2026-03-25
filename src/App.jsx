
import './App.css'
import Counter from './counter'
import Batsman from './batsman'
import Users from './users'
import { Suspense } from 'react'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())


function App() {
  
    
  return (
      <div>
        <Batsman></Batsman>
        {/* <Counter></Counter> */}

        <Suspense fallback = {<h1>Loading....</h1>}>
            <Users fetchUsers = {fetchUsers}></Users>
        
        </Suspense>
      </div>
      
    
  )
}

export default App
