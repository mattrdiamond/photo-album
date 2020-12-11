import React, { useEffect, useState } from "react";
import User from "../User/User.component";
import Spinner from "../Spinner/Spinner.component";
import { placeholderAPI } from "../../API/API";
import "./Users.styles.scss";

const Users = ({ sidebarOpen, setSidebarOpen, ...props }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const users = await placeholderAPI(`users`);
      const avatars = await placeholderAPI(`photos?_start=0&_limit=10`);
      const combined = users.map((user, index) => ({
        ...user,
        avatar: avatars[index].thumbnailUrl,
      }));

      if (isMounted) {
        setUsers(combined);
      }

      return () => (isMounted = false);
    })();
  }, []);

  return (
    <ul className="users">
      {users.length ? (
        users.map(({ id, ...userData }) => (
          <User
            key={id}
            id={id}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            {...userData}
            {...props}
          />
        ))
      ) : (
        <Spinner />
      )}
    </ul>
  );
};

export default Users;
