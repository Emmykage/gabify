import { FiSearch, FiUser } from "react-icons/fi";

export default function Topbar() {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50 flex justify-between items-center px-6 py-3">
      <div className="flex items-center gap-3 w-full max-w-lg bg-gray-100 rounded-full px-4 py-2">
        <FiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search posts..."
          className="bg-transparent w-full focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
          <FiUser />
        </div>
      </div>
    </div>
  );
}
