import { Outlet, useSearchParams } from "react-router-dom"

export const Users = () => {

  const [searchParams, setSearchParams]= useSearchParams()
  const ShowActiveUsers = searchParams.get('filter') === 'active'


  return (
  
      <div>
        <h1>user 1</h1>
        <h1>user 2</h1>
        <h1>user 3</h1>
        <Outlet />
        <div>
          <button onClick={()=> setSearchParams({filter: 'active'})}>Active Users</button>
          <button onClick={()=> setSearchParams({})}>Reset Filter</button>
        </div>
        <div>
          {
            ShowActiveUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>
          }
        </div>
    </div>
   

  
  )
}

