/*const heading = React.createElement("h1", { id: "heading" }, "Hello from lapi to React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/

const parent = React.createElement

("div", { id: "grandparent" },

     [React.createElement("div", { id: "parent1" }, [React.createElement("h1", {}, "i am child 1 from parent 1"), React.createElement("h1", {}, "i am the child 2 from the parent 1")]),

    React.createElement("div", { id: "parent1" }, [React.createElement("h1", {}, "i am child 1 from parent 2"), React.createElement("h1", {}, "i am the child 2 from the parent 2")])]
);
console.log(parent)
const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);