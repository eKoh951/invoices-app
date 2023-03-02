import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Auth0Prov from "./Auth0Prov";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Prov>
        <App />
      </Auth0Prov>
    </BrowserRouter>
  </StrictMode>
);
