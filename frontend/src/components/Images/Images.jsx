import { useEffect, useState } from 'react';
import './Images.css'

export default function Images() {
    const [imgs, setImgs] = useState([]);
    useEffect(() => {
        const getImgs = async () => {
            let response = await fetch("http://localhost:3001/api/imgs/");
            let data = await response.json();
            console.log(data)
            setImgs(data);
        }
        getImgs();
    }, []);

    return (
        <>
            <div className="images">
                <h2 className="imgHeader">Photos</h2>
            </div>
            {imgs.map((img) => (
                <div className='imgagesContainer' key={img._id}>
                    {img.imgs.map((image, index) => (
                        <a key={index} href={`/img/${image}`}>
                            <p>
                                <img className='serviceImg2' src={`/img/${image}`} alt="Dog images" />
                            </p>
                        </a>
                    ))}
                </div>
            ))}
        </>
    );
}