import React, { useState,setState } from 'react';
import './Task.css'
import styled from 'styled-components';
import useFetchAll from "./services/useFetchAll";
import tasks from './db.json';
import { Draggable } from 'react-beautiful-dnd';
// import Column from './column.jsx'
const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: white;
`;
export default function Task(props) {
   // const d = data.tasks
   //console.log(props.task[0].title)
    // const [task, setTask] = useState(props)
    
    // const handleRemoveItem = (e) => {
    //     const id = props.task.id
    //     setTask({ props: undefined });
    // };
   console.log('taskprops',props)
    return (
        <div>
            <Draggable draggableId={props.task.id} index={props.index}>
        {(provided,snapshot) => (
        <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        {...snapshot.isDragging}
        {...snapshot.draggingOver}
        ref={provided.innerRef}>
            <h5>{props.task.title}</h5>
            {props.task.content}
            

            {/* {data.tasks.map(s => (<TaskList> {s.description} </TaskList>))} */}
            <div className='tasks'>
                    {/* {data.tasks.map((task,index) => <Column key={task.id} task={task} index={index}></Column>)} */}
                    {/* {provided.placeholder} */}
                     {/* {props.tasks.map((task,index) => <Box onClick={props}>X</Box>)} */}
                     {/* <div onClick={() => props.tasks.splice(props.tasks,1)}>Delete</div> */}
                    </div>
             
        </Container>
        )}
        </Draggable>
            </div>
    )
    }
    // function handleClick() {
    //     this.setState({ props: undefined })
    // }

    const removeKey = () => {
        const updatedState = {
            task: {
                id: undefined,
                title: undefined,
                content: undefined
            },
        };
        console.log('delete',updatedState)
        return updatedState;
    }
    // function removeTask(e) {
    //     console.log(e);
    //     var array = e; // make a separate copy of the array
    //       array.splice(, 1);
    //       setState({props: array});
    // }