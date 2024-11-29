import { Card } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

function Detailes() {
    // const [data, setData] = useState();
    const [notFound, setNotFound] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            if (response.status === 404) {
            setNotFound(true);
            return null;
            }
            return response.json();
        })
        .then(data => {
            // if (data) setData(data);
            console.log(data);
            
        })
        .catch(error => {
            console.error("Xatolik yuz berdi:", error);
        });
    }, [id]);

    if (notFound) {
        return <Navigate to="*" />;
    }

    return (
        <div className='flex justify-center items-center mx-auto'>
            {
                <div className="">
                    <Card
                    className="max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                    >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                    </Card>
                </div>
            }
        </div>
    );
}

export default Detailes;
