import React, { useEffect, useState } from "react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";
import { useGetAllPuppiesQuery } from "../components/playersSlice";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  
  const [listOfPuppies, setListOfPuppies] = useState([]);
  const { status, isLoading, data: players } = useGetAllPuppiesQuery();
  const navigate = useNavigate();


  useEffect(() => {
    if (status === "fulfilled") {
      setListOfPuppies(players);
    }
  }, [status]);


  const viewPlayer = (id) => {
    console.log(id);
    navigate(`/puppy/${id}`);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    const searchResults = players.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setListOfPuppies(searchResults);
  }
  
  
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col justify-center">
        <p className="p-3 flex justify-center text-5xl text-gray-900 text-shadow-lg text-shadow-indigo-300 font-extrabold drop-shadow-2xl">
          Welcome to the Puppy Bowl Event
        </p>
        <p className="p-3 flex justify-center text-xl text-gray-900 text-shadow-sm text-shadow-blue-300 font-semibold drop-shadow-2xl">
          Come and join in for a fun-filled day of adorable puppy football!
        </p>
        <p className="p-3 flex justify-center text-xl text-gray-900 text-shadow-sm text-shadow-blue-300 font-semibold drop-shadow-2xl">
          Get Ready to meet the talented pups competing in this year's Puppy
          Bowl...and here they are.
        </p>
      </div>
      <div>
        <article className="">
          <p className="py-6 text-gray-900 text-center text-7xl  text-shadow-lg text-shadow-indigo-300 font-bold tracking-widest underline">
            Roster
          </p>

          <div className="flex flex-1 justify-center px-2 lg:mr-20 lg:ml-10">
            <div className="grid w-full max-w-lg grid-cols-1 lg:max-w-xs">
              <input
                name="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="col-start-1 row-start-1 block w-full rounded-md bg-gray-700 py-1.5 pr-3 pl-10 text-base text-white outline-hidden placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400 sm:text-sm/6"
                onChange={handleSearch}
              />
              <MagnifyingGlassCircleIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
              />
            </div>
          </div>
          
          <ul className=" mx-20 py-2 h-100 grid lg:grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-2 xs:grid-cols-1">
            {isLoading && <li>Loading puppies...</li>}
            {listOfPuppies.map((p) => (
              <li
                key={p.id}
                className="border-0 rounded-t-2xl hover:border-0 hover:shadow-xl hover:shadow-lime-400 hover:border-lime-300 hover:drop-shadow-2xl hover:drop-shadow-sky-200"
              >
                <p
                  className={`${
                    p.status === "field"
                      ? "flex text-2xl justify-center font-bold tracking-wider text-emerald-400 text-shadow-md text-shadow-emerald-900 hover:text-6xl hover:text-lime-400 hover:text-shadow-black"
                      : "flex text-2xl justify-center font-bold tracking-wider text-amber-900 text-shadow-md text-shadow-amber-600 hover:text-6xl hover:text-lime-400 hover:text-shadow-black"
                  }`}
                >
                  {p.name} #{p.id}
                </p>
                <figure>
                  <img src={p.imageUrl} alt={p.name} />
                </figure>
                <button
                  type="button"
                  name={p.id}
                  onClick={() => viewPlayer(p.id)}
                  className="px-20 py-4 w-full rounded-b-2xl bg-gray-300 text-shadow-sm drop-shadow-lg drop-shadow-gray-400 hover:bg-gray-900 hover:text-gray-400 hover:drop-shadow-lime-400"
                >
                  See details
                </button>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
