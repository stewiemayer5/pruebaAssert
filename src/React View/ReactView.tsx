import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { UserModal } from "./components/UserModal"

interface User {
    id: number
    name: string
    email: string
    phone: string
}

export const ReactView = () => {

    const [users, setUsers] = useState<User[]>([])
    const [filteredUsers, setFilteredUsers] = useState<User[]>([])

    const [activeUser,setActiveUser]= useState<User>()
    const [show,setShow]= useState<boolean>(false)
    const handleModal = ()=> setShow(!show)

    const handleShowActiveUser=(user:User)=>{
        setActiveUser(user)
        handleModal()
    }

    const search=(val:string)=>{
        const filteredUsers = users.filter(user=>user.name.toLowerCase().includes(val.toLowerCase()))
        setFilteredUsers(filteredUsers)
    }

    useEffect(() => {
        fetch('../public/data/users.json').then(response => response.json()).then(data=>console.log(data))

    }, [])

    useEffect(()=>{
        setFilteredUsers(users)
    },[users])

    return (<div className="d-flex">
        <div className="d-flex w-100 p-4 flex-column border">
            <h3>Vista en React + TypeScript</h3>
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
                <div className="d-flex p-2 border-top">
                    <table>
                        <thead>
                            <tr className="border">
                                <th className="border">
                                    Nombre
                                </th>
                                <th className="border">
                                    Email
                                </th>
                                <th className="border">
                                    Telefono
                                </th>
                                <th className="border"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredUsers.map(user => <tr key={user.id} className="border">
                                    <td className="border">{user.name}</td>
                                    <td className="border">{user.email}</td>
                                    <td className="border">{user.phone}</td>
                                    <td className="border"><Button onClick={()=>handleShowActiveUser(user)}>Mostrar</Button></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
             <UserModal user={activeUser} show={show} close={handleModal} />               
        </div>
    </div>)
}