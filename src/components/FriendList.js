import React, { useState } from "react";
import "./FriendList.css";

const FriendList = () => {
  const [friends, setFriends] = useState([]);
  const [name, setName] = useState("");

  const addFriend = () => {
    if (name.trim() === "") return;
    setFriends([...friends, { id: Date.now(), name }]);
    setName("");
  };

  return (
    <div className="friend-list">
      <h2>Friends</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter friend's name"
      />
      <button onClick={addFriend}>Add Friend</button>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;