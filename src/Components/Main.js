import React,{useState,useEffect} from 'react'
import {FaRegStar} from 'react-icons/fa';
import {Animated} from "react-animated-css";
import AOS from 'aos';
import 'aos/dist/aos.css';




import Data from "../data.json"
import Feature from "../feature.json"

function Main() {

  const [data, setData] = useState([]);
  const [featuredata, setFeatureData] = useState([]);
    // console.log(Data);

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));

      fetch("../feature.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);


  useEffect(()=>{
    AOS.init({duration:1000});
  },[]);

  

  return (
    <>
    <div>
    {Data.map(item => (


    <div className='product'>

        <div className='left' >
            <div className='left-in' data-aos="fade-up">
            <img src={item.Product_img} className='img'/>
            </div>
        </div>


        <div className='right' >
            <h2 data-aos="fade-up">{item.product_name}</h2>
            <p data-aos="fade-up">{item.description}</p>

            <div className='Rating' data-aos="fade-up"><span>Ratings </span>
            <FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/>
            </div>

            <h3 data-aos="fade-up">About</h3>
            <p data-aos="fade-up">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <h3 data-aos="fade-up">Price</h3>
            <p data-aos="fade-up" className='price-before'>{item.priceb}</p>
            <p data-aos="fade-up">{item.price}</p>
            

            <button data-aos="fade-up" className="cssbuttons-io-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
             <span>Add to Cart</span>
            </button>

        </div>


    </div>

    ))}

    </div>
      
    <div>
    {Feature.map((item,index) => (
          <div className='f-product'>
          {
            index%2==0 ? <>

<div className='f-left-first'>

    <h1 className='head' class="animate__animated animate__bounce animate" data-aos="fade-down">{item.f_name}</h1>
    <div data-aos="fade-down" className='f-des'>
    <p data-aos="fade-down">{item.f_description}</p>
    </div>
</div>
<div className='f-right-first'>
    <img data-aos="fade-left" src={item.img1}/>

</div>
</> 


:
          
          <>
          <div className='f-right-second'>
              <img data-aos="fade-right" src={item.img1}/>
          </div>
          <div className='f-left-second'>
              <h1 className='head' data-aos="fade-down">{item.f_name}</h1>
              <div className='f-des' data-aos="fade-down">
                <p>{item.f_description}</p>
              </div>
          </div>
          </>
        }
          </div>
      ))}
  </div>
    
    </>
  )
}

export default Main
