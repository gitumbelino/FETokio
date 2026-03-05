import { useState } from "react"

function User(props) {

    const { user, selectUser } = props
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    return (

        <div className={`user-card ${user.selected ? "selected": "" }`}>

            {showDetails
                ? <div>
                    <div>
                        Name: {user.name}
                        <div>
                            Username:{user.username}
                        </div>
                        <div>
                            Name: {user.name}
                        </div>
                    </div>
                    <button onClick={toggleDetails} >
                        Hide
                    </button>
                </div>
                :
                <div>
                    <div>
                        Name: {user.name}
                    </div>
                    <button onClick={toggleDetails} >
                        Show
                    </button>
                </div>
            }

<button className="select" onClick={()=>selectUser(user.id)} >Select</button>
        </div>
    )
}

export default User

