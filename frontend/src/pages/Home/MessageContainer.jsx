import React from "react";
import User from "./User";
import Message from "./Message";
import { IoIosSend } from "react-icons/io";

const MessageContainer = () => {
  return (
    <div className="flex-1 h-screen flex flex-col bg-base-200">
      {/* Header */}
      <div className="p-3 border-b border-base-content/10">
        <User />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        <Message />
        <Message />
        <Message />
      </div>

      {/* Input */}
      <div className="w-full flex gap-2 p-3 border-t border-base-content/10">
        <input
          type="text"
          placeholder="Type your message here..."
          className="input input-bordered input-primary w-full rounded-none"
        />
        <button className="btn btn-square">
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;
