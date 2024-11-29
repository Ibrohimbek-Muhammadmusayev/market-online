import { Button, Checkbox, FloatingLabel, Label, } from "flowbite-react";

export default function Login(){
    return (
        <div className="w-full mx-auto flex justify-center items-center">
            <form className="flex w-full max-w-[400px] flex-col gap-4">
                <div className="mx-auto flex justify-center items-center">
                    <h1 className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Login </h1>
                </div>
                <div>
                    <FloatingLabel type="email" variant="outlined" label="Your user name" required/>
                </div>
                <div>
                    <FloatingLabel type="password" variant="outlined" label="Your password" required/>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <div className="flex justify-between">
                        <a href="signup" className="text-sm text-blue-600 hover:underline dark:text-blue-500">Register</a>
                    </div>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}