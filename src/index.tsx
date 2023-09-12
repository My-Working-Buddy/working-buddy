import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";

import "@fontsource/fredoka-one/400.css";
import "@fontsource/abeezee/400.css";

import theme from "./theme";
import Routing from "./Routing";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Auth0Provider
        domain="dev-ayqgkm5tkx1eftkh.us.auth0.com"
        clientId="hPIWaClUDUfRsHd9JMhXTLiLFVmHIa7W"
        authorizationParams={{
          redirect_uri: "http://localhost:3000",

        }}
      >
        <Routing />
      </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
