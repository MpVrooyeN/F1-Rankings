import React from "react";
import ReactDOM from "react-dom/client";

function RenderTitle(titleString) {
    return ReactDOM.createRoot(document.getElementById('root')).render(React.createElement('h1', {}, titleString));
}