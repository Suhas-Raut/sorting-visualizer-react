import { useEffect, useState } from "react";
import Bar from "./Bar";
import { generateArray } from "../utils/generateArray";
import { bubbleSort } from "../algorithms/bubbleSort";
import { selectionSort } from "../algorithms/selectionSort";
import { insertionSort } from "../algorithms/insertionSort";
import { animateSort } from "../utils/animateSort";
import "../styles/sorting.css";

export default function SortingBoard() {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("bubble");
  const [speed, setSpeed] = useState(5); // 🔥 FAST

  useEffect(() => {
    setArray(generateArray(60));
  }, []);

  const runSort = () => {
    let animations = [];

    if (algorithm === "bubble")
      animations = bubbleSort([...array]);
    else if (algorithm === "selection")
      animations = selectionSort([...array]);
    else if (algorithm === "insertion")
      animations = insertionSort([...array]);

    animateSort(animations, setArray, speed);
  };

  return (
    <div className="sorting-root">
      <h1>Sorting Visualizer</h1>

      <div className="controls">
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
        </select>

        <button onClick={runSort}>Visualize</button>
        <button onClick={() => setArray(generateArray(60))}>
          New Array
        </button>

        {/* <input
          type="range"
          min="1"
          max="20"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        /> */}
      </div>

      <div className="bars-container">
        {array.map((value, idx) => (
          <Bar key={idx} value={value} />
        ))}
      </div>
    </div>
  );
}
