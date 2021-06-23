import Canvas from "./components/Canvas";
import Toolbar from "./components/Toolbar";

const App = () => {
  return (
    <div
      style={{
        position: "relative",
        width: window.innerWidth,
        height: window.innerHeight,
        maxWidth: "800px",
        maxHeight: "640px",
        border: "5px solid black",
        overflow: "visible",
      }}
    >
      <Toolbar />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          maxWidth: "85%",
          height: "100%",
        }}
      >
        <Canvas />
      </div>
    </div>
  );
};

export default App;
