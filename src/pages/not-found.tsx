import { Button } from "flowbite-react";

export default function Notfound(){
    return(
        <div className="w-full h-full">
            <div className="flex flex-col justify-center items-center">
                <img src="./../../public/404-image.png" alt="404 not found image" />
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col gap-[20px] text-center">
                        <h1 className="self-center text-gray-500 text-2xl font-bold whitespace-nowrap dark:text-white">404 - Page Not Found</h1>
                        <p className="self-center text-wrap text-center text-gray-500 text-2xl font-medium whitespace-nowrap dark:text-white">Oops! The page you’re looking for doesn’t exist. <br /> It might have been moved or deleted.</p>
                    </div>
                    <Button className="w-full mt-[20px] max-w-[150px]" href="/">
                        Refresh home
                    </Button>
                </div>
            </div>
        </div>
    )
}