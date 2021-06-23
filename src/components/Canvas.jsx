import { useRef, useEffect, useState, useContext } from "react";
import { CanvasState } from "../context/canvas";

const Canvas = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const { line, color, setImage, setWebP } = useContext(CanvasState);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 640;
    canvas.height = 640;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = line;
    ctxRef.current = ctx;
  }, []);

  useEffect(() => {
    ctxRef.current.strokeStyle = color;
    ctxRef.current.lineWidth = line;
  }, [line, color]);

  const startDraw = ({ nativeEvent }) => {
    setImage(null);
    setWebP(null);
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const endDraw = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;

    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };

  return (
    <canvas
      id="canvas"
      onMouseDown={startDraw}
      onMouseUp={endDraw}
      onMouseMove={draw}
      onMouseLeave={endDraw}
      ref={canvasRef}
    />
  );
};

export default Canvas;
