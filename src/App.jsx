import React, { useState } from "react";
import TodoList from "./ToDoList";

const App = () => {

   const [inputList, setinputList]=useState("");
   const [Items,setItems]=useState([]);

   const inputTextHandler=(event)=>{
        setinputList(event.target.value);
   };

   const buttonHandler=()=>{
       setItems((oldItems)=>{
         return [...oldItems,inputList];
       })

       setinputList("");
   };
   
  //  const deleteItems=(e)=>{
  //     e.target.Items.remove();
  //  };
   const deleteItems=(id)=>{
      // console.log("deleted...");

      setItems((oldItems) =>{
          return oldItems.filter((arrElem,index)=>{
             return index!==id;
          })
      })
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Items" value={inputList} onChange={inputTextHandler}/>
          <button onClick={buttonHandler}>+</button>

          <ol>
              {/* <li>{inputText}</li> */}
              
              {Items.map((itemVal, index)=>{
                return <TodoList key={index} 
                id={index}
                text={itemVal} 
                onSelect={deleteItems}
                />
              })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
