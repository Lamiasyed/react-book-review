import { useEffect, useState } from "react";



function Home (){
    const [data, setData]=useState([])
    const [datalength, setDatalength]=useState(6);
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return(
        <>
        <div className="mx-auto container max-w-screen-lg">
  

           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
            {
        // data.slice(0,datalength).map((books)=> <Books  books={books}></Books>)

            }
            
        </div>
        <div className={datalength=== data.length && `hidden `}>
                    <div className=" mx-auto w-full items-center my-4 flex justify-center">
                    <button className="text-center text-xl  bg-[#23BE0A] text-white btn " onClick={()=>setDatalength(data.length)}>Show all Books</button>

                    </div>
            </div>

        </div>
        
        </>
    )
}
export default Home;