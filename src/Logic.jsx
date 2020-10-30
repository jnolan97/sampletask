import React from "react";
import "./App.css";
import Task from './Task';
import Column from './column';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';
import {tasks, columns} from './db.json';
const Container = styled.div`
  display: flex;
`;
class Logic extends React.Component {
    state = {tasks,columns};
 onDragEnd = result => {
     
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) {
          return;
        }
        console.log('test',draggableId);
        console.log('test',source);
        console.log('bleh',this.state.columns)
    let start = this.state.columns[0]
    let end = this.state.columns[0];
    for (var i= 0; i < this.state.columns.length; i++){
        if (this.state.columns[i].id === source.droppableId){
            start = this.state.columns[i]
        }
        if (this.state.columns[i].id === destination.droppableId){
            end = this.state.columns[i]
        }
    }
   // const start = this.state.columns[draggableId];
    const s = this.state.columns[start];
    console.log('start',start)
    //const end = this.state.columns[destination.droppableId];
    console.log('end',end)

    if (start !== end){
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };
      const finishTaskIds = Array.from(end.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newEnd = {
        ...end,
        taskIds: finishTaskIds,
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newEnd.id]: newEnd
        },
      };
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

  render() {
      const data = Array.from(this.state.columns)
      console.log('arr',data)
    return (
      <Container>
    <DragDropContext onDragEnd={this.onDragEnd}>
    {data.map((columnId,index) => {
                const column = this.state.columns[index];
                console.log(column.taskIds);
                const names = this.state.tasks.filter(i => i.id === column.taskIds)
                console.log('inside',column,names)
                 return <Column key={column.id} column={column.id} names={names} /> //onDelete={this.onDelete(this.state)}
                })}
    </DragDropContext>
    
    </Container>
    );
  }
}

export default Logic;