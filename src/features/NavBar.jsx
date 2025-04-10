import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav h-20 w-auto flex flex-row items-center dark:bg-gray-900">
      <div className="flex items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-b-blue-600 inline-flex items-center px-4 pt-1 text-sm font-medium text-blue-500 hover:border-gray-300 hover:text-blue-200 "
              : "inline-flex items-center px-4 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-200 default: border-transparent text-gray-500"
          }
          end
        >
          Puppies
        </NavLink>

        <NavLink
          to="/puppyForm"
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-b-blue-600 inline-flex items-center px-4 pt-1 text-sm font-medium text-blue-500 hover:border-gray-300 hover:text-blue-200 "
              : "inline-flex items-center px-4 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-200 default: border-transparent text-gray-500"
          }
          end
        >
          Add Puppy
        </NavLink>
      </div>
    </div>
  );
}
