import React, { useEffect, useState } from 'react'
import { useGetAllPuppiesQuery } from '../features/puppySlice';
import { useNavigate } from 'react-router-dom';


export default function HomePage() {
  const [listOfPuppies, setListOfPuppies] = useState([]);
  const { status, isLoading, data: players } = useGetAllPuppiesQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'fulfilled') {
      setListOfPuppies(players);
    }
  }, [status]);

  const viewPlayer = (id) => {
    console.log(id);
    navigate(`/puppy/${id}`);
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
          <p className="pt-6 text-gray-900 text-center text-7xl  text-shadow-lg text-shadow-indigo-300 font-bold tracking-widest">
            Roster
          </p>
          <ul className=" mx-20 py-2 h-100 grid grid-cols-3 gap-4">
            {isLoading && <li>Loading puppies...</li>}
            {listOfPuppies.map((p) => (
              <li key={p.id}
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
                  onClick={()=>viewPlayer(p.id)}
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
