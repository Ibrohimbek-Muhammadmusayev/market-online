import { Avatar, Button, Dropdown, Navbar, Modal, Tooltip } from "flowbite-react";
import { useState } from "react";
import { HiArrowSmRight, } from "react-icons/hi";

export default function Navbars(){
    const [openModal, setOpenModal] = useState(false);
    const token = localStorage.getItem("token");

    return (
        <div className='w-full max-w-[1440px] mx-auto'>
            <Navbar fluid rounded>
                <Navbar.Brand>
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="h-[50px] overflow-hidden flex items-center justify-center">
                        <img src="./../public/site-logo.png" className="h-[70px]" alt="Online market Logo" />
                        </div>
                        <span className="self-center text-gray-500 text-2xl font-bold whitespace-nowrap dark:text-white">OnlineShop</span>
                    </a>
                </Navbar.Brand>
                <div className="flex gap-[5px] items-center md:order-2">
                    {!token ?
                        <Tooltip content="Login or signup" style="light">
                            <div onClick={() => setOpenModal(true)} className="md:hidden">
                                <svg className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(106,106,136,1)"><path d="M10 11V8L15 12L10 16V13H1V11H10ZM2.4578 15H4.58152C5.76829 17.9318 8.64262 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9H2.4578C3.73207 4.94289 7.52236 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C7.52236 22 3.73207 19.0571 2.4578 15Z"></path></svg>
                            </div>
                        </Tooltip>
                        :
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                            }
                            >
                            <Dropdown.Header>
                                <span className="block text-sm">User name</span>
                                <span className="block truncate text-sm font-medium">Ibrohimbek Muhammadmusayev</span>
                            </Dropdown.Header>
                            <Dropdown.Item>Create Account</Dropdown.Item>
                            <Dropdown.Item href="/siller-dashboard">Dashboard</Dropdown.Item>
                            {/* <Dropdown.Item>Settings</Dropdown.Item> */}
                            {/* <Dropdown.Item>Earnings</Dropdown.Item> */}
                            <Dropdown.Divider />
                            <Dropdown.Item icon={HiArrowSmRight}>Log out</Dropdown.Item>
                        </Dropdown>
                    }
                    <Navbar.Toggle />
                </div>

                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Terms of Service</Modal.Header>
                    <Modal.Footer className="flex justify-center gap-[40px]">
                    <Button href="/login">Login</Button>
                    <Button href="/signup">
                        Signup
                    </Button>
                    </Modal.Footer>
                </Modal>
                {!token ?
                    <div className="order-2 hidden items-center md:flex">
                        <a
                            href="/login"
                            className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
                        >
                            Login
                        </a>
                        <Button href="/signup">Sign up</Button>
                    </div>
                    :
                    null
                }
                <Navbar.Collapse>
                    <Navbar.Link href="/">
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/about">About</Navbar.Link>
                    <Navbar.Link href="/contact">Contact</Navbar.Link>
                    {/* <Navbar.Link>
                    </Navbar.Link> */}
                    {/* <Navbar.Link href="#">Pricing</Navbar.Link> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}