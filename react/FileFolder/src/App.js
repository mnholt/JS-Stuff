import logo from "./logo.svg";
import "./styles.css";
import sortBy from "lodash/sortBy";
import Menu from "./Menu";

const tree = {
  children: [
    { name: "emptyFolder", children: [] },
    {
      name: "public",
      children: [{ name: "index.html" }, { name: "fireworks.js" }],
    },
    {
      name: "src",
      children: [
        { name: "App.css" },
        { name: "App.js" },
        {
          name: "components",
          children: [{ name: "ComponentA" }, { name: "ComponentB" }],
        },
      ],
    },
    { name: "package.json" },
  ],
};

function App() {
  const sortedTree = sortBy(tree.children, "name");
  return (
    <div className="App">
      <Menu items={sortedTree} />
    </div>
  );
}

export default App;
