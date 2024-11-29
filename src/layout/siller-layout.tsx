import { Avatar, Button, Drawer, Dropdown, Sidebar, } from "flowbite-react";
import { useState } from "react";
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { Outlet } from "react-router-dom";

export default function SellerDashboard(){
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    return(
        <div className="h-[100vh] flex bg-[#F9FAFB]">
            <Sidebar className="h-full hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex" aria-label="Sidebar with logo branding example">
                <Sidebar.Logo href="#" img="/vite.svg" imgAlt="Flowbite logo">
                    OnlineShop
                </Sidebar.Logo>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/siller-dashboard/" icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="/siller-dashboard/add-product" icon={HiShoppingBag}>
                            Add product
                        </Sidebar.Item>
                        <Sidebar.Item href="/siller-dashboard/all-products" icon={HiTable}>
                            All products
                        </Sidebar.Item>
                        <Sidebar.Item href="/siller-dashboard/sold" icon={HiUser}>
                            Sold out
                        </Sidebar.Item>
                        <Sidebar.Item href="/" icon={HiArrowSmRight}>
                            Exit Admin Panel
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
            <div className="w-full h-full">
                <div className="min-h-[70px] py-[10px] px-[30px] bg-[#F9FAFB] flex items-center justify-between gap-[30px]">
                    <div className="">
                        <Button onClick={() => setIsOpen(true)} className="block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden p-0 w-[50px] h-[40px]">
                            <img className="w-[25px]" src="./../../public/menu-2-line.svg" alt="hamburger logo" />
                        </Button>
                        <Drawer open={isOpen} onClose={handleClose}>
                            <Drawer.Header title="OnlineShop" titleIcon={() => <></>} />
                            <Drawer.Items>
                                <Sidebar
                                    aria-label="Sidebar with multi-level dropdown example"
                                    className="[&>div]:bg-transparent [&>div]:p-0"
                                >
                                    <div className="flex h-full flex-col justify-between py-2">
                                        <div>
                                            <Sidebar.Items>
                                                <Sidebar.ItemGroup>
                                                    <Sidebar.Item href="/siller-dashboard/" icon={HiChartPie}>
                                                        Dashboard
                                                    </Sidebar.Item>
                                                    <Sidebar.Item href="/siller-dashboard/add-product" icon={HiShoppingBag}>
                                                        Add product
                                                    </Sidebar.Item>
                                                    <Sidebar.Item href="/siller-dashboard/all-products" icon={HiTable}>
                                                        All products
                                                    </Sidebar.Item>
                                                    <Sidebar.Item href="/siller-dashboard/sold" icon={HiUser}>
                                                        Sold out
                                                    </Sidebar.Item>
                                                    <Sidebar.Item href="/" icon={HiArrowSmRight}>
                                                        Exit Admin Panel
                                                    </Sidebar.Item>
                                                </Sidebar.ItemGroup>
                                            </Sidebar.Items>
                                        </div>
                                    </div>
                                </Sidebar>
                            </Drawer.Items>
                        </Drawer>
                    </div>
                    <div className="flex gap-[20px]">
                        <h1 className="hidden sm:block lg:block text-wrap text-[20px] font-semibold text-gray-500">✨ Ibrohimbek Muhammadmusayev</h1>
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
                            <Dropdown.Item href="/signup">Create Account</Dropdown.Item>
                            <Dropdown.Item href="/siller-dashboard">Dashboard</Dropdown.Item>
                            {/* <Dropdown.Item>Settings</Dropdown.Item> */}
                            {/* <Dropdown.Item>Earnings</Dropdown.Item> */}
                            <Dropdown.Divider />
                            <Dropdown.Item icon={HiArrowSmRight}>Log out</Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>
                <div className="p-[30px] min-h-[92.4vh] rounded-[10px] bg-white">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}