import React, { useEffect, useState } from "react";

import { useAuth } from "@arcana/auth-react";
import handler from "./api/hello";
import axios from "axios";

export default function Home() {
  const [userData, setUserData] = useState<any>(null);
  const {
    user,
    connect,
    isLoggedIn,
    loading,
    loginWithSocial,
    provider,
    loginWithLink,
  } = useAuth();

  useEffect(() => {
    onConnectClick();
  });
  const onConnectClick = async () => {
    await connect();
    console.log(user);
    await setUserData(user);
    if (userData != null) {
      await saveData();
    }
  };

  const saveData = async () => {
    await axios({
      url: "http://localhost:3001/api/hello",
      method: "POST",
      data: {
        address: userData.address,
        email: userData.email,
      },
    });
    console.log("adding data");
  };

  // useEffect(() => {
  //   provider.on("connect", onConnect);
  //   onConnectClick();
  //   return () => {
  //     provider.removeListener("connect", onConnect);
  //   };
  // }, [provider]);
  return (
    <>
      {!loading && !isLoggedIn && (
        <button
          className="bg-[blue] p-[17px] rounded-[3px] text-[white]"
          onClick={onConnectClick}
        >
          Connect
        </button>
      )}
      {!loading && isLoggedIn && (
        <div className="flex justify-center items-center h-[100vh]  flex-col">
          <h1 className="font-bol mb-[44px] text-[52px]">User Info</h1>
          <ul className="flex flex-col gap-[16px]">
            <li className="border-b-[1px]">
              <span className="font-bold">Address:</span> {user?.address}
            </li>
            <li className="border-b-[1px]">
              <span className="font-bold">Email: </span>
              {user?.email}
            </li>
            {/* <li className="border-b-[1px]">Pu{user?.publicKey}</li> */}
          </ul>
        </div>
      )}
    </>
  );
}
