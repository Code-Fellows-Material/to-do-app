import React, {useState} from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";

function Items({ list, toggleComplete }) {

  const [showIndex, setShowIndex] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const numToShow = 3; 

  let items = list.map((item) => (
    <div key={Math.random() * 10} style={{ display: 'flex', justifyContent: 'center'}} >
    <Card style={{width: '1000px', margin: '30px'}} interactive={true} elevation={Elevation.TWO}>
        <h5><a href="#">{item.text}</a></h5>
              <p>
                <small>Assigned to: {item.assignee}</small>
              </p>
              <p>
                <small>Difficulty: {item.difficulty}</small>
              </p>
              <div >
                Complete: {item.complete.toString()}
              </div>
        <Button onClick={() => toggleComplete(item.id)}>Complete</Button>
    </Card>
    </div>
  ))

  function setItems(itemList, num){
    if(items.length <= 3) return items;
    let tempArr = [];
    for(let i = showIndex; i <(showIndex + num); i++){
      tempArr.push(itemList[i])
    }
    return tempArr;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Button style={{ margin: "10px"}} onClick={() => {pageNum > 1 && setShowIndex(showIndex - numToShow); pageNum > 1 && setPageNum(pageNum - 1)}}>prev</Button> 
      <Button style={{ margin: "10px"}} onClick={() => {setShowIndex(showIndex + numToShow); setPageNum(pageNum + 1)}}>next</Button>
      </div>
      {setItems(items, numToShow)}
    <div style={{    display: 'flex', justifyContent: 'center', fontSize: '2em'}}>{pageNum}</div>
    </div>
  );
}

export default Items;
