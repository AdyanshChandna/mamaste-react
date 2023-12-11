
const parent=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},[
React.createElement("h1",{}, "react is used here" ),
React.createElement("h2",{ id:"heading"},"hello world") ]),
React.createElement("div",{id:"child"},[
    React.createElement("h1",{}, "react is used here" ),
    React.createElement("h2",{ id:"heading"},"hello world") ]) ]);




const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
