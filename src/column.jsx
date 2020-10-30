import React, { useState } from 'react';
import styled from 'styled-components';
import Task from './Task.jsx';
import tasks from './db.json';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 30%;
    display: inline-block;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
    transition: 0.5s all ease-out;
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
    }
`;
const TaskList = styled.div`
    padding: 8px;
    flex-grow: 1;
    min-height: 200px;

    
`;

export default function Column({ column, names }) {
    const d = tasks;
   
    console.log(names);
    return (
        <Container>
            <Title>
            {column}
            </Title>
            <Droppable droppableId={column}>
                {(provided,snapshot) => (

                    console.log('prov',provided),
                    console.log('snapshot',snapshot),
                <TaskList 
                {...provided.droppableProps}
                {...snapshot.isDraggingOver}
                ref={provided.innerRef}
                style={{backgroundColor: snapshot.isDraggingOver ? 'lightgreen': 'white'}}
                >
                    <div className='tasks'>
                    {names.map((task,index) => <Task key={task.id} task={task} index={index} />)}
                    {provided.placeholder}
                     {/* {props.tasks.map((task,index) => <Box onClick={props}>X</Box>)} */}
                     {/* <div onClick={() => props.tasks.splice(props.tasks,1)}>Delete</div> */}
                    </div>
                </TaskList>
                
                 )}
                 </Droppable>
        </Container>
    );
}