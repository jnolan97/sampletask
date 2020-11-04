import React, { useState,setState } from 'react';
import './Task.css'
import styled from 'styled-components';
import useFetchAll from "./services/useFetchAll";
import tasks from './db.json';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: white;
`;
export default function Task(props) {

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
            

            <div className='tasks'>
                    </div>
             
        </Container>
        )}
        </Draggable>
            </div>
    )
    }

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
