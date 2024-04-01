import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuFileBarChart, LuUsers } from "react-icons/lu";
import { useLoaderData } from "react-router-dom";
import { ApplicationgetItem } from "../Store";

function Booklist() {
  const loaderData = useLoaderData();

  const [bookread, setBookRead] = useState([]);
  const [showpost, setShowPost] = useState([]);

  const showHandle = (filter) => {
    if (filter === "all") {
      setShowPost(bookread);
    } else {
      const sortedPosts = [...bookread].sort((a, b) => {
        if (filter === "rating") {
          return b.rating - a.rating;
        } else if (filter === "totalPages") {
          return b.totalPages - a.totalPages;
        } else if (filter === "yearOfPublishing") {
          return b.yearOfPublishing - a.yearOfPublishing;
        }
      });
      setShowPost(sortedPosts);
    }
  };

  useEffect(() => {
    const storedbookIds = ApplicationgetItem();
    if (loaderData.length > 0) {
      const addread = [];
      for (let id of storedbookIds) {
        const data = loaderData.find((bookitem) => bookitem.id === id);
        if (data) {
          addread.push(data);
        }
      }
      setBookRead(addread);
      setShowPost(addread);
    }
  }, []);

  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="mx-auto pb-4">
        <h1 className="text-center text-3xl font-bold">Books</h1>
      </div>
      <details className="dropdown my-4">
        <summary className="m-1 btn text-white bg-[#23BE0A]">Sort By</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a className="text-lg font-medium" onClick={() => showHandle("rating")}>
              Rating
            </a>
          </li>
          <li>
            <a className="text-lg font-medium" onClick={() => showHandle("yearOfPublishing")}>
              Year Of Publishing
            </a>
          </li>
          <li>
            <a className="text-lg font-medium" onClick={() => showHandle("totalPages")}>
              Total Pages
            </a>
          </li>
          <li>
            <a className="text-lg font-medium" onClick={() => showHandle("all")}>
              All
            </a>
          </li>
        </ul>
      </details>
      <h1 className="text-left font-blod text-4xl bg-green-500 p-3 w-12 rounded-xl text-green-200">
        {bookread.length}
      </h1>
      {showpost.map((post, index) => (
        <div key={index} className="mt-12 card shadow-md w-full gap-4 grid grid-cols-2 items-center">
          <div className="">
            <img className="" src={post.image} alt="" />
          </div>
          <div className="">
            <h1 className="text-left ">{post.bookName}</h1>
            <p className="text-left py-3">By: {post.author}</p>
            <div className="flex justify-between items-center gap-4">
              <p className="flex justify-start gap-4 items-center py-3">
                Tag {post.tags.map((tag, i) => <p key={i} className="flex justify-start">#{tag.slice(0, 7)}</p>)}
              </p>
              <span className="items-center flex justify-start gap-2">
                <CiLocationOn /> Year of Publisher:{post.yearOfPublishing}
              </span>
            </div>
            <div className="flex justify-start items-center gap-6 py-3">
              <span className=" items-center flex gap-1">
                <LuUsers />
                {post.publisher}
              </span>
              <span className=" items-center flex gap-1">
                <LuFileBarChart />
                {post.totalPages}
              </span>
            </div>
            <div className="flex justify-start gap-6">
              <span className="btn font-medium text-lg bg-[#328EFF] text-white ">{post.category}</span>
              <span className="btn font-medium text-lg bg-[#FFAC33] text-white">Rating:{post.rating}</span>
              <button className="btn bg-[#23BE0A] font-medium text-lg rounded-lg text-white">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Booklist;
