import { useParams } from "react-router-dom";
import { useGetPlayerQuery, useDeletePuppyMutation } from "../components/playersSlice";
import { useNavigate } from "react-router-dom";





export default function PuppyPage() {
  const { id } = useParams();
  const { data } = useGetPlayerQuery(id);
  const [deletePuppy] = useDeletePuppyMutation();
  const navigate = useNavigate();
  console.log(data);



  const handleDeletePlayer = async (id) => {
    try {
      const response = await deletePuppy(id).unwrap();
      console.log(response);
      navigate('/');

    } catch (error) {
      console.error(error.message);
    }
  }



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
        <div className="flex justify-end ">
          <button
            onClick={() => {handleDeletePlayer(data?.id)}}
            className="bg-red-800 py-2 px-10 rounded-md text-white"
          >
            DELETE
          </button>
        </div>
      </div>

      <div className="mt-10 pt-10 px-10 border-4 border-amber-300 flex-2/4 p-10 bg-linear-to-tr from-15% from-blue-500 via-40% via-yellow-500 to-65% to-green-500 ">
        <p className="text-center text-5xl mb-5 underline">Teammates</p>
        <table className="table-fixed">
          <thead className="">
            <tr>
              <th className="px-5 pb-5 text-2xl text-center">Id</th>
              <th className="px-5 pb-5 text-2xl text-center">Name</th>
              <th className="px-5 pb-5 text-2xl text-center">Breed</th>
              <th className="px-5 pb-5 text-2xl text-center">Game Status</th>
            </tr>
          </thead>
          {data?.team.players.map((player) => {
            if(data?.name != player.name && data?.id != player.id){
              return (
              <tr className="font-bold">
                <td className="px-5">{player.id}</td>
                <td className="px-5">{player.name}</td>
                <td className="px-5">{player.breed}</td>
                <td className="px-5 text-center">{player.status}</td>
              </tr>
            );}
          })}
        </table>
      </div>

    </div>
  );
}
