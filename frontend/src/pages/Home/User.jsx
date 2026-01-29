import React from "react";

const User = () => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-base-200 cursor-pointer transition">
      <div className="avatar avatar-online">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="font-medium text-base-content">Full Name</h2>
        <p className="text-sm text-base-content/60">@username</p>
      </div>
    </div>
  );
};

export default User;
