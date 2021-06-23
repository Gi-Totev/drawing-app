import { useContext } from "react";
import { CanvasState } from "../../context/canvas";

const Color = ({ color }) => {
  const { setColor } = useContext(CanvasState);
  return (
    <div
      onClick={() => setColor(() => color)}
      style={{ width: "16px", height: "16px", backgroundColor: color }}
    ></div>
  );
};

export default Color;
