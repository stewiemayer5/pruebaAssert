import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"

interface User {
    id: number
    name: string
    email: string
    phone: string
}

export const JqToReact = () => {

    const [users] = useState<User[]>([
        {
            "id": 1,
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "phone": "123-456-7890"
        },
        {
            "id": 2,
            "name": "Bob Smith",
            "email": "bob@example.com",
            "phone": "321-654-0987"
        },
        {
            "id": 3,
            "name": "Carol Davis",
            "email": "carol@example.com",
            "phone": "987-654-3210"
        }
    ])
    const [filteredUsers, setFilteredUsers] = useState<User[]>([])

    const search = (val: string) => {
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(val.toLowerCase()))
        setFilteredUsers(filteredUsers)
    }

    useEffect(() => {
        setFilteredUsers(users)
    }, [users])

    return (
        <div className="d-flex">
            <div className="d-flex w-100 p-4 flex-column border">
                <h3>Conversión de jQuery a React + TypeScript</h3>
                <hr />
                <div className="d-flex flex-column row-gap-2">
                    <div className="d-flex column-gap-2 align-items-center">
                        <span>
                            Buscar
                        </span>
                        <div>
                            <input type="text" className="rounded p-1" onChange={(e) => search(e.target.value)} />
                        </div>
                        <Button size="sm" className="">Buscar</Button>
                    </div>
                    <div>
                        <ul>
                            {filteredUsers.map(user=><li key={user.id}>{user.name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}