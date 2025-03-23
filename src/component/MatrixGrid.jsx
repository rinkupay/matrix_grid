import React, { useState } from "react";

const MatrixGrid = () => {
  const [grid, setGrid] = useState(Array(9).fill("white"));
  const [clickedOrder, setClickedOrder] = useState([]);

  console.log(grid);

  // HANDLE CLICK
  const handleClick = (index) => {
    if(grid[index] === "white"){
        const newGrid = [...grid];
        newGrid[index] = "green";
        setGrid(newGrid);
        setClickedOrder([...clickedOrder,index]);
    }
    if(clickedOrder.length === 8){
        // Change Color
        changeColorToOrange();
    }
  };


  // HANDLE CHANGE COLOR TO ORANGE
  const changeColorToOrange = ()=>{
    clickedOrder.forEach((index,i) =>{
        // Set Time Interval to iterate in some interval of time
      setTimeout(() => {
        setGrid((prevGrid) => {
            const newGrid = [...prevGrid];
            newGrid[index] = "orange";
            return newGrid;
        })
      },i * 500)
    })
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,100px)",
        gap: "5px",
      }}
    >
      {grid.map((color, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{
            height: "100px",
            width: "100px",
            cursor: "pointer",
            border: "1px solid black",
            backgroundColor: color,
          }}
        ></div>
      ))}
    </div>
  );
};

export default MatrixGrid;
