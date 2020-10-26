import React from 'react';
import './Task.css'
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: white;
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
export default function Task() {
    return (
        <Container>
            <Title>Title</Title>
            <TaskList>
            <p>Task works!</p>
            </TaskList>
        </Container>
    )
}