import { Button, Card, CardFooter, Modal } from "react-bootstrap"

interface User {
    id: number
    name: string
    email: string
    phone: string
}

interface UserModalProps {
    user: User | undefined
    show:boolean
    close: VoidFunction
}

export const UserModal = ({user, show, close}:UserModalProps )=>{
    return (<Modal show={show} > 
        <Modal.Header>Usuario: {user?.name}</Modal.Header>
        <Modal.Body>
            <Card>
                <Card.Body>
                    <div>Email: {user?.email}</div>
                    <div>Telefono: { user?.phone}</div>
                </Card.Body>
                <CardFooter><Button onClick={close}>Salir</Button></CardFooter>
            </Card>
        </Modal.Body>
    </Modal>)
}