// import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { applictionId } from "../Store";


function Details(){
    const booksdata=useLoaderData();

    const {id}=useParams();
    const intId=parseInt(id);
    const books=booksdata.find(books=>books.id===intId)
    console.log(books)
    const readhandle=()=>{
     applictionId(id)
        toast ("already Exsit!");
        //alert("already exist")

    }
    const wishLislHandle=()=>{
        applictionId(id)
        toast ("already Exsit ! ");

    }
    return(
        <>
        <div className="container max-w-screen-lg mx-auto mb-5">

            <div className="card w-full  shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
                <div className="lg:w-30%">
                    <img className="h-50% w-2/4" src={books.image} alt="" />
                   
                </div>
                <div className="lg:w-70%">
                    <h1 className="text-left py-3 font-bold text-4xl">{books.bookName}</h1>
                    <p className="text-left pb-1 font-medium text-lg">By:{books.author}</p>
                    <hr className="py-3" />
                    <p className="text-left font-medium text-xl">{books.category}</p>
                    <hr className="py-3" />
                    <p className="text-left font-normal text-base ">Review:{books.review}</p>
                  {/* <p className="text-left  font-bold text-lg flex py-3 gap-4 flex-start items-center">Tag#
                  {books.tags.map(tag=>
                     <ul className="">
                    <li className="text-lg font-medium text-[#23BE0A]">#{tag}</li>
                    </ul>)}
                  </p> */}
                  <hr className="py-3" />
                  <p  className="text-left font-normal pr-2 pb-3 text-lg">Number of Pages: {books.totalPages}</p>
                  <p  className="text-left font-normal pr-2 pb-3 text-lg">Publisher:: {books.publisher}</p>
                  <p  className="text-left font-normal pr-2 pb-3 text-lg">Year of Publishing:: {books.yearOfPublishing}</p>
                  <p  className="text-left font-normal pr-2 pb-3 text-lg">Year of Publishing:: {books.rating}</p>
                   
                    <div className="flex py-4 flex-start items-center gap-4">
                        <button onClick={readhandle} className="btn px-7  font-semibold text-lg">Read</button>
                        <button onClick={wishLislHandle} className="btn  font-semibold text-lg bg-[#50B1C9]">WishList</button>
                    </div>

                    
                </div>

            </div>
              
            <ToastContainer/>

        </div>
        
               </>
    )
}
export default Details;