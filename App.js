const parent = React.createElement("div", { id: "parent"}, [
    React.createElement("div", { id: "child1" },[
    React.createElement("h1", {id: "heading_1"}, "hello yash"),
    React.createElement("h2", {id: "heading_2"}, "hello sandy"),
    ]),
        React.createElement("div", { id: "child2" },[
        React.createElement("h1", {id: "heading_1"}, "hello yash"),
        React.createElement("h2", {id: "heading_2"}, "hello sandy"),
        ])
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)