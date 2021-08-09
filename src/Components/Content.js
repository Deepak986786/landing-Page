import React ,{ useState } from "react";
import db from "./Firebase";
import firebase from "firebase/app";
import Footer from "./Footer";
import Navbar from "./Navbar";

import feature from './new18feature.png';



const Content = () => {

    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");
    
    const inputHandler = (e) => {
      setInput(e.target.value);
    };
    const submitHandler = (e) => {
      e.preventDefault();
      if (input) {
        console.log(input);
        // add to firebase
        db.collection("emails").add({
          email: input,
          time: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
        setMessage("Thank you for Subscribing!!!");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }

    }
    return (
        <div>
        <Navbar/>

<section class="text-gray-600 body-font  bg-gradient-to-tr from-gray-400 via-blue-600 to-purple-900" id="company">
  <div class="container  mx-auto text-center items-center">

  <h3 className="p-2 text-3xl text-white">MUDRA NFT MARKETPLACE </h3>
    <p className="text-xs text-gray-300">ULTIMATE NFT EXPERIENCE</p>

    <p className="px-2 py-4 text-xl text-red-200">Mudra – A smart NFT marketplace built on Binance SmartChain has been carefully
     designed and engineered to allow its users to create, buy and sell NFTs in a decentralised 
     permissionless environment.</p>

   

     <p className="text-xl text-yellow-50">Our mission is to push forward the mass adoption of blockchain technology 
     and cryptocurrencies to everyday users</p>

     <div className="flex items-center justify-center object-contain">
       <img src={feature} alt="feature" className="items-center lg:max-w-screen-md "  />
       </div>

    </div>


    <h4 className="text-2xl text-center" >We are Launching Soon ! </h4>
   <div className="flex items-center justify-center rounded-md">
    <div className="relative grid items-center grid-cols-1 jsutify-center">
      
      <form onSubmit={submitHandler} className="relative grid items-center justify-center grid-cols-1 p-12 border-solid rounded-md shadow-md border-6">
        <h2 className="text-2xl text-center text-white">Subscribe to our Newsletter</h2>
        <p>for exclusive NFT drops , latest news and more</p>
        <input type="email" onChange={inputHandler} value={input} placeholder="Please Enter your Email..." className="p-2.5  text-green-600 rounded-lg w-11/12" />
        <button type="submit" className="rounded-lg mt-2 w-1/3 items-center text-white bg-gradient-to-tr from-gray-400 via-blue-600 to-purple-900 shadow-2xl w-1/10 p-2.5 text-center outline-none cursor-pointer ">Submit</button>
      </form>
      <div >
      {message && <div className="relative p-2 text-white bg-green-600 ">{message}</div>}
      </div>
  </div>
  </div>

    </section>

    {/* Sub scribe newslaetter */}

    {/* <div className="flex items-center justify-center overflow-hidden App bg-gradient-to-tr from-gray-400 via-blue-600 to-purple-900"> */}
      {/* <div className="relative ">
      
        <form onSubmit={submitHandler} className="relative p-12 border-solid shadow-md border-6">
          <h2 className="text-4xl text-center text-white">Subscribe to our Newsletter</h2>
          <input type="email" onChange={inputHandler} value={input}  className="p-2.5 w-10/12 outline-none text-green-600"/>
          <button type="submit" className="bg-red-500 w-1/10 p-2.5 text-center outline-none cursor-pointer ">Submit</button>
        </form>
        {message && <div>{message}</div>}
      
    </div> */}
    <Footer/>
    </div>
  
    )

    }


export default Content;
