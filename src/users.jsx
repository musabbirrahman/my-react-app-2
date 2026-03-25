import { use } from "react"
import User from "./user"


export default function Users({fetchUsers}){

    const users = use(fetchUsers)
    return(
        <div className="box">
            {users.map(user => <User key={user.id} user = {user}></User>)}
        </div>
    )
}