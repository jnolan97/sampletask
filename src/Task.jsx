import React, { useState,setState,forwardRef, useRef, useImperativeHandle } from 'react';
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
    console.log(props);

    
    const removeKey = () => {
        console.log(props.task)
        const update = {
            id: null,
            title: null,
            content: null
        }
        let clone = Object.assign({}, props.task)
        clone.id = undefined;
        clone.title = undefined;
        clone.content = undefined;
        return clone
        

        // return arr
    }
    // const parentCall = () => {
    //     this.props.handleRemoveItem()
    // }

    console.log('taskProps',props)
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
            
            <button key={props.task.id} onClick={() => props.parent()}>X</button>
            <div className='tasks'>
                    </div>
             
        </Container>
        )}
        </Draggable>
            </div>
    )
    
    }

