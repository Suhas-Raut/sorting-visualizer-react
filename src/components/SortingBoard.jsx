import { useEffect, useState } from "react";
import Bar from "./Bar";
import { generateArray } from "../utils/generateArray";
import { bubbleSort } from "../algorithms/bubbleSort";
import { selectionSort } from "../algorithms/selectionSort";
import { insertionSort } from "../algorithms/insertionSort";
import { mergeSort } from "../algorithms/mergeSort";
import { quickSort } from "../algorithms/quickSort";
import { animateSort } from "../utils/animateSort";
import "../styles/sorting.css";

export default function SortingBoard() {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("bubble");
  const [speed, setSpeed] = useState(5);

  useEffect(() => {
    setArray(generateArray(60));
  }, []);

  const runSort = () => {
    // 👇 extract ONLY values for algorithm
    const values = array.map(bar => bar.value);
    let animations = [];

    if (algorithm === "bubble")
      animations = bubbleSort(values);
    else if (algorithm === "selection")
      animations = selectionSort(values);
    else if (algorithm === "insertion")
      animations = insertionSort(values);
    else if (algorithm === "merge")
      animations = mergeSort(values);
    else if (algorithm === "quick")
      animations = quickSort(values);

    animateSort(animations, setArray, speed);
  };

  return (
    <div className="sorting-root">
      <h1>SORTING VISUALIZER</h1>

      <div className="controls">
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="quick">Quick Sort</option>
        </select>

        <button onClick={runSort}>Visualize</button>
        <button onClick={() => setArray(generateArray(60))}>
          New Array
        </button>

        <input
          type="range"
          min="1"
          max="20"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>

      <div className="bars-container">
        {array.map((bar, idx) => (
          <Bar
            key={idx}
            value={bar.value}
            state={bar.state}   // 🔥 THIS enables colors
          />
        ))}
      </div>
    </div>
  );
}
