import React, { useContext } from "react";
import COLORS from "../constants/colors";
import Color from "./Toolbar/Color";
import { CanvasState } from "../context/canvas";

const Toolbar = () => {
  const { line, setLine, exportCanvas, image, webP } = useContext(CanvasState);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "15%",
        height: "95%",
        padding: "1rem",
        backgroundColor: "#ddd",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRight: "5px solid #000",
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label htmlFor="line" style={{ textAlign: "center" }}>
          Line Width:
        </label>
        <input
          id="line"
          type="range"
          min="1"
          max="50"
          value={line}
          onChange={({ target }) => setLine(target.value)}
        ></input>
        <span style={{ textAlign: "center" }}>{line}</span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gridGap: "0px 0px",
          height: "160px",
          width: "25%",
        }}
      >
        {COLORS.map((color) => (
          <Color key={color} color={color} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}
      >
        <button
          onClick={exportCanvas}
          style={{
            background: "blue",
            color: "#fff",
            border: "none",
            outline: "none",
            padding: "0.5rem 0.25rem",
            fontWeight: "bold",
          }}
        >
          Export
        </button>
        {image && (
          <a href={image} download>
            Download PNG
          </a>
        )}
        {webP && (
          <a href={webP} download>
            Download Webp
          </a>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
