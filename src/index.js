// https://picsum.photos/v2/list?limit=10
import React from "react";
import ReactDOM from "react-dom/client";
import Slider from "./component/slider";
function App(){
    return(
        <div>
           <Slider url={"https://picsum.photos/v2/list"} limi={"20"}/>
        </div>
    )
}
 const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);