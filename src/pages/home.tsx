import { Card, Carousel, Pagination } from "flowbite-react";
import { useEffect, useState } from "react";
import Loader from "../components/loader";



export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const getdata = ()=>{
    fetch('http://localhost:3000/api/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "x-api-key": "12345"
    },
  })
  .then(response => response.json())
  .then((res)=>{
    setData(res)
  })
  }
  console.log(data);
  
  useEffect(()=>{
    getdata()
  },[])
  
  const onPageChange = (page: number) => setCurrentPage(page);
    return (
      <div className="w-full h-full">
        <div className="">
          <div className="mt-[40px] h-[175px] sm:h-[270px] xl:h-96 2xl:h-96">
            <Carousel>
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                <img className="h-full w-full" src="./../../public/reklama maket.png" alt="" />
              </div>
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                <img className="h-full w-full" src="./../../public/reklama maket.png" alt="" />
              </div>
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                <img className="h-full w-full" src="./../../public/reklama maket.png" alt="" />
              </div>
            </Carousel>
          </div>
          <div className="w-full flex px-[10px] justify-center items-center mt-[40px] flex-wrap gap-[30px]">
            {data.length == 0 ? 
              <div className="mt-[30px]">
                <Loader/>
              </div>
              :
              data?.map((item:any)=>(
                <div key={item.id} className="">
                  <Card
                    href={item.id}
                    className="max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {item.description}
                    </p>
                  </Card>
                </div>
              ))
            }
          </div>
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
          </div>
        </div>
      </div>
    )
  }