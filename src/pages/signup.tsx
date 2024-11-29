import { Button, Label, Select, Modal, FloatingLabel, FileInput, } from "flowbite-react";
import { useState } from "react";

export default function Signup(){
    const [openModal, setOpenModal] = useState(false);
    const [userdata, setUserdata] = useState({
        fullname: "",
        password: "",
        role: "siller",
        phoneNumber: "",
    })
    const [token, setToken] = useState('')

    const registerdata = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        fetch("http://localhost:3000/api/register",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userdata)
        })
        .then(res=> res.json())
        .then(data=>{console.log(data); setToken(data.token)})
    }   
    if (token) {
        fetch('http://localhost:3000/api/protected-route', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}` // 'Bearer TOKEN' formatida tokenni yuboring
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }
    
    

    return (
        <div className="w-full mx-auto flex justify-center items-center">
            <form onSubmit={(e)=>registerdata(e)} className="flex w-full max-w-[400px] flex-col gap-4">
                <div className="mx-auto flex justify-center items-center">
                    <h1 className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Signup</h1>
                </div>
                <div>
                    <FloatingLabel value={userdata.fullname} onChange={(e)=>{setUserdata({...userdata, fullname: e.target.value})}} type="text" variant="outlined" label="Full name" required />
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="countries" value="Select User Type" />
                    </div>
                    <Select id="countries" required helperText="It is very important to choose">
                        <option>User</option>
                        <option>Seller</option>
                    </Select>
                </div>
                <div>
                    <FloatingLabel value={userdata.password} onChange={(e)=>{setUserdata({...userdata, password: e.target.value})}} type="password" variant="outlined" label="Password" required/>
                </div>
                <div>
                    <FloatingLabel value={userdata.phoneNumber} onChange={(e)=>{setUserdata({...userdata, phoneNumber: e.target.value})}} type="tel" variant="outlined" label="Phone number" required/>
                </div>
                <div className="mb-2">
                    <div>
                    <Label htmlFor="default-file-upload" value="Default size file input" />
                    </div>
                    <FileInput onChange={(e)=>console.log(e.target.files)} id="default-file-upload" />
                </div>
                <div className="flex justify-between">
                    <div className=""></div>
                    <div className="flex justify-between">
                        <a href="login" className="text-sm text-blue-600 text-center hover:underline dark:text-blue-500">Login</a>
                    </div>
                </div>
                <Button type="submit">Submit</Button>
            </form>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Congratulations you successfully shot from the list 👋😄</Modal.Header>
                <Modal.Body>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                    to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                    soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button href="/siller-dashboard">switch to dashboard</Button>
                    <Button color="gray" href="/ ">
                    Home page return
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}