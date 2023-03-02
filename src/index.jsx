import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserStorage } from "./UserContext";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
        <BrowserRouter>
            <UserStorage>
		        <App />
            </UserStorage>
        </BrowserRouter>
	</React.StrictMode>
);