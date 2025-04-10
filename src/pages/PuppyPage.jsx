import { useParams } from "react-router-dom";
import { useGetPlayerQuery } from "../features/puppySlice";
export default function PuppyPage() {
  const { id } = useParams();
  const { data } = useGetPlayerQuery(id);
  console.log(data);

  return (
    <div className="flex flex-col justify-center items-center ">
      <p className="m-4 p-6 text-6xl font-extrabold tracking-widest text-shadow-lg flex flex-col justify-center">
        Player Details
      </p>
      <div className=" p-10 border-4 border-amber-300 flex-2/4 bg-linear-to-br from-15% from-blue-500 via-40% via-yellow-500 to-65% to-green-500 ">
        <p className="pb-4 text-9xl font-extrabold tracking-widest inline">
          {data?.name}
        </p>
        <img src={data?.imageUrl} alt="" className="h-60 inline px-4" />
        <p className="pb-3 text-2xl ">
          <span className="font-bold text-shadow-md">Player Id:</span>{" "}
          {data?.id}
        </p>
        <p className="pb-3 text-2xl ">
          <span className="font-bold text-shadow-md">Player Breed:</span>{" "}
          {data?.breed}
        </p>
        <p className="pb-3 text-2xl ">
          <span className="font-bold text-shadow-md">Player Game Status:</span>{" "}
          {data?.status}
        </p>
        <p className="pb-3 text-2xl ">
          <span className="font-bold text-shadow-md">Player Team Name:</span>{" "}
          {data?.team.name}
        </p>
      </div>
    </div>
  );
}
