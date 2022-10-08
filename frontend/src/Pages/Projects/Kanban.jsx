import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { fetchLink } from "../../App";
import { GET_DATA } from "../../Redux/AppReducer/action";


///////////////
const Kanban = () => {
// let  token = JSON.parse(localStorage.getItem("token"))
//  const [alertStatus, setAlertStatus] = useState(false);
//  const data = useSelector((store)=>store.AppReducer.data);
 
//   const dispatch = useDispatch();
//   const [info,setInfo] = useState([])
//   function getProject() {
//     fetch(`${fetchLink}/project`,{
//       method:"GET",
//       headers:{
//         "content-type":"application/json",
//         "authorization":`bearer ${token}`
//       }
//     }).then((res) => res.json())
//       .then((res) => {
//         setInfo(res.data);
//         console.log(res.data)
//       })
//       .catch((err) => console.log(err));
//   }
//   useEffect(() => {
//     dispatch(GET_DATA());
//     setInfo([...data])
//     getProject()
//     // console.log("task", task)
//   }, []);

////////////////////////

const itemsFromBackend = [
  { id: uuidv4(), content: "First task" },
  { id: uuidv4(), content: "Second task" },
  { id: uuidv4(), content: "Third task" },
  { id: uuidv4(), content: "Fourth task" },
  { id: uuidv4(), content: "build something cool" },
  { id: uuidv4(), content: "build masai last project" },
];

// const itemsFromBackend = []
// info.map((el)=> itemsFromBackend.push({id:el._id, content:el.project}))
// console.log(itemsFromBackend,"venu")

const columnsFromBackend = {
  [uuidv4()]: {
    name: "To do",
    items: itemsFromBackend,
  },
  [uuidv4()]: {
    name: "In Progress",
    items: [],
  },
  [uuidv4()]: {
    name: "Done",
    items: [],
  },
};

// console.log(columnsFromBackend,"kjhj")

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};


  const [columns, setColumns] = useState(columnsFromBackend);
  // console.log("col", columns)

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "1%",
                }}
                key={columnId}
              >
                <h2>
                  <b>{column.name}</b>
                </h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Kanban;
