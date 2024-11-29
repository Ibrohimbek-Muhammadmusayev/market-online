import { Footer } from "flowbite-react";
export function Footers() {
  return (
    <div className="">
      <Footer container={true}>
        <div className="w-full text-center">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
              <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="h-[50px] overflow-hidden flex items-center justify-center">
                  <img src={'./../public/site-logo.png'} className="h-[70px]" alt="Flowbite Logo" />
                </div>
                <span className="self-center text-gray-500 text-2xl font-bold whitespace-nowrap dark:text-white">OnlineShop</span>
              </a>
              <Footer.LinkGroup>
                <Footer.Link href="/">Home</Footer.Link>
                <Footer.Link href="/about">About</Footer.Link>
                <Footer.Link href="/contact">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <Footer.Divider />
            <Footer.Copyright href="/" by="OnlineShop™" year={2024} />
          </div>
        </div>
      </Footer>
    </div>
  );
}
