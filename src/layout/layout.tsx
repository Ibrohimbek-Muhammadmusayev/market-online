import { Outlet } from "react-router-dom";
import Navbars from "../components/navbar";
import { Footers } from "../components/footer";

export default function Layout(){
    return (
        <div className="w-full min-h-[100vh] flex flex-col justify-between">
            <div className="w-full">
                <Navbars/>
                <div className="flex h-full w-full px-[16px] max-w-[1280px] mx-auto">
                    <Outlet/>
                </div>
            </div>
            <div className="w-full">
                <Footers/>
            </div>
        </div>
    );
}
