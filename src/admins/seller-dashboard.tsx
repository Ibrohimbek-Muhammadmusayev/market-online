import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export default function SellerDashboard(){
    return(
        <div className="">            
            <Sidebar aria-label="Sidebar with logo branding example">
                <Sidebar.Items className="mb-[30px]">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="h-[50px] overflow-hidden flex items-center justify-center">
                        <img src="./../public/site-logo.png" className="h-[70px]" alt="Online market Logo" />
                        </div>
                        <span className="self-center text-gray-500 text-2xl font-bold whitespace-nowrap dark:text-white">OnlineShop</span>
                    </a>
                </Sidebar.Items>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiViewBoards}>
                            Kanban
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiInbox}>
                            Inbox
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiUser}>
                            Users
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiShoppingBag}>
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiArrowSmRight}>
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiTable}>
                            Sign Up
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}