  import React, { useState, useEffect } from "react";
import AuthService from "../../../../data/services/AuthService";
import TodoAdd from "../TodoAdd";
import TodoList from "../TodoList";
import TodoListener from "../TodoListener";
import Background from "./Background";

export default function HomePage() {

  const [user, setUser] = useState();

  const backgroundImage = 'https://thumbs.dreamstime.com/b/smart-home-icons-set-white-background-118704443.jpg';


useEffect(() => {
  
  const user = AuthService.getCurrentUser();
  const currentUser = user.FirstName + ' ' + user.LastName;
  setUser(currentUser);
}, [])




  return (
    <>
    <div>
      <h4 style={{ fontSize: "34px", textAlign: "center", color: "black" }}>
        Welcome {user}
      </h4>
      <Background />
    </div>
      
      
      
    </>
  );
}
