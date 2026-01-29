import React from "react";
import { IoSearch } from "react-icons/io5";
import User from "./User";

const UserSidebar = () => {
  return (
    <div className="w-80 h-screen bg-base-300 flex flex-col border-r border-base-content/10">
      {/* Header */}
      <div className="p-4 border-b border-base-content/10">
        <h1 className="text-xl font-semibold text-base-content">Chat Bro</h1>
      </div>

      {/* Search */}
      <div className="p-3">
        <label className="input input-bordered flex items-center gap-2 bg-base-200 w-full">
          <input
            type="text"
            className="grow"
            placeholder="Search users"
          />
          <IoSearch className="text-lg opacity-70" />
        </label>
      </div>

      {/* Users list */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1">
        <User />
        <User />
        <User />
      </div>

      {/* Bottom Avatar + Logout */}
      <div className="w-full mt-auto p-4 flex items-center justify-between border-t border-base-content/10">
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-300 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <button className="btn btn-primary btn-sm">Logout</button>
      </div>
    </div>
  );
};

export default UserSidebar;
