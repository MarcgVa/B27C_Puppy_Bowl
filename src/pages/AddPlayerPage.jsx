import { useAddPuppyMutation } from "../components/playersSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPuppyPage() {
  const navigate = useNavigate();
  const [addPuppy] = useAddPuppyMutation();
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: "",
    teamId: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await addPuppy(formData).unwrap();
      if (response) {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 sm:space-y-16 mx-30 my-20 flex justify-center ">
        <div>
          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
              >
                Name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleUpdate}
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-xs sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="breed"
                className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
              >
                Breed
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  id="breed"
                  name="breed"
                  type="text"
                  onChange={handleUpdate}
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-xs sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="status"
                className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
              >
                Status
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  id="status"
                  name="status"
                  type="text"
                  onChange={handleUpdate}
                  autoComplete="status"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-md sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="teamId"
                className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
              >
                Team Id
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  id="teamId"
                  name="teamId"
                  type="text"
                  onChange={handleUpdate}
                  autoComplete="street-address"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-xl sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="imageUrl"
                className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
              >
                Image Url
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  id="imageUrl"
                  name="imageUrl"
                  type="text"
                  onChange={handleUpdate}
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-xs sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6  flex items-center justify-center gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
