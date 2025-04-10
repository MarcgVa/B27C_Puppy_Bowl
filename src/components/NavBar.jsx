import { NavLink } from "react-router-dom";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";

export default function NavBar() {
  return (
    <div className="nav h-20 w-auto flex flex-row items-center dark:bg-gray-900">
      <div className="flex items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-emerald-800 inline-flex items-center px-4 pt-1 text-sm font-medium text-emerald-500 hover:border-emerald-800 hover:text-emerald-500 "
              : "inline-flex items-center px-4 pt-1 text-sm font-medium hover:border-emerald-800 hover:text-emerald-800 default: border-transparent text-gray-500"
          }
          end
        >
          Puppies
        </NavLink>

        <NavLink
          to="/puppyForm"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-emerald-800 inline-flex items-center px-4 pt-1 text-sm font-medium text-emerald-500 hover:border-emerald-800 hover:text-emerald-500 "
              : "inline-flex items-center px-4 pt-1 text-sm font-medium hover:border-emerald-800 hover:text-emerald-800 default: border-transparent text-gray-500"
          }
          end
        >
          Add Puppy
        </NavLink>
      </div>
    </div>
  );
}
