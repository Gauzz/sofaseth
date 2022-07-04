import React from "react";
import ReactDOM from "react-dom/client";


import Pages from "./router/Pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <React.StrictMode>
    <Pages/>
    </React.StrictMode>
);