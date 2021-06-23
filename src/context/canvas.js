import { createContext, useState } from "react";

export const CanvasState = createContext(null);

const CanvasStateProvider = ({ children }) => {
  const [line, setLine] = useState(5);
  const [color, setColor] = useState("black");
  const [image, setImage] = useState(null);
  const [webP, setWebP] = useState(null);

  const exportCanvas = () => {
    const _canvas = document.getElementById("canvas");
    const imageStr = _canvas.toDataURL("image/png");
    setImage(imageStr);
    setWebP(_canvas.toDataURL("image/webp"));
  };

  return (
    <CanvasState.Provider
      value={{
        line,
        setLine,
        color,
        setColor,
        exportCanvas,
        image,
        setImage,
        webP,
        setWebP,
      }}
    >
      {children}
    </CanvasState.Provider>
  );
};

export default CanvasStateProvider;
