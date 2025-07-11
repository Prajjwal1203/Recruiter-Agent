"use client";
import { UserDetailContext } from "@/context/UserDetailContext";
import { supabase } from "@/services/supabaseClient";
import React, { useEffect, useState } from "react";

function provider({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    CreateNewUser();
  }, []);
  const CreateNewUser = () => {
    supabase.auth.getUSer().then(async ({ data: { user } }) => {
      let { data: Users, error } = await supabase
        .from("Users")
        .select("*")
        .eq("email", user?.email);

      console.log(Users);
      if (Users?.length == 0) {
        const {data,error} = await supabase.from("Users").insert([
          {
            name: user?.user_metadata?.full_name,
            email: user?.email,
            picture: user?.user_metadata?.picture,
          },
        ]);
        console.log(data);
        setUser(data);
        return;
      }
      setUser(user);
    });
  };
  return
  (
    <UserDetailContext.Provider value={{user,setUser}}>
        <div>{children}</div>
    </UserDetailContext.Provider>
  
  ) ;
}

export default provider;
export const useUSer=() =>{
  const context = useContext(UserDetailContext);
  return context;
}