import React from "react";
import "./App.css";
import Task from './Task';
import Column from './column';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';
import {tasks, columns} from './db.json';
import initialData from './initial-data';
const Container = styled.div`
  display: flex;
`;
class Logic extends React.Component {
    state = initialData;
 onDragEnd = result => {
     
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) {
          return;
        }
    const start = this.state.columns[source.droppableId];
    const end = this.state.columns[destination.droppableId]
   // const start = this.state.columns[draggableId];
   // const s = this.state.columns[start];
    console.log('start',start)
    //const end = this.state.columns[destination.droppableId];
    console.log('end',end)

    if (start !== end){
      const startTaskIds = Array.from(start.taskIds);
      const finishTaskIds = Array.from(end.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };
      

      finishTaskIds.splice(destination.index, 0, draggableId);
      const newEnd = {
        ...end,
        taskIds: finishTaskIds,
      };
      console.log('state',newStart,newEnd)
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newEnd.id]: newEnd
        },
      };
      console.log('newstate',newState)
    this.setState(newState);
    return;
    } else {
      const column = this.state.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        taskIds: newTaskIds,
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };
     
      this.setState(newState);
    }

  };

  reOrder(start,end,startIndex,endIndex,drag){
      start.splice(startIndex,1);
      end.splice(endIndex,0,drag)
      return start,end

      
  }

  render() {
  return (
    <Container>
  <DragDropContext onDragEnd={this.onDragEnd}>
  {this.state.columnOrder.map((columnId) => {
              const column = this.state.columns[columnId];
              console.log(column.taskIds);
              const names = column.taskIds.map(i => this.state.tasks[i])
              console.log('inside',column,names)
               return <Column key={column.id} column={column.id} names={names} /> //onDelete={this.onDelete(this.state)}
              })}
  </DragDropContext>
  
  </Container>
  );
}
}

export default Logic;