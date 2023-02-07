import React,{useState,useEffect} from 'react'
import Data from "../data.json"

function Feature() {

  const [data, setData] = useState([]);
  // console.log(Data);

useEffect(() => {
  fetch("../data.json")
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error));
}, []);

  return (
    <>
    <div>
    {Data.map(item => (


    <div className='product'>

        <div className='left'>
        <p>{item.product_name}</p>
            
        </div>


        <div className='right'>
            <img src={item.img1} />

        </div>


    </div>

    ))}

    </div>
    </>
  )
}

export default Feature
