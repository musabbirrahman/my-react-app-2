export default function User({user}){
    const {name, email, address} = user
    return(
        <div className="box">
            <p className="paragraph">User: {name}</p>
            <p className="paragraph">Email: {email}</p>
            <p className="paragraph">City: {address.city}</p>
        </div>
    )
}