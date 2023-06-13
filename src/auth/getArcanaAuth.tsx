import { AuthProvider } from "@arcana/auth";

const auth = new AuthProvider(
  "xar_test_2cddb1a644b28370f3e22341000a93c3e1e4435e",
  {
    theme: "light",
    network: "testnet",
    alwaysVisible: true,

    //Check SDK Reference Guide for other optional parameters
  }
);

export const getAuth = () => {
  return auth;
};
