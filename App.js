const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "hello world"
);
console.log(heading);
const rootElement = document.getElementById("root");
ReactDOM.render(heading, rootElement);
