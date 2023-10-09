import React from "react";
import styled from "styled-components";

const Component = styled.div`
    padding: 1rem;
`

const Item = styled.div`
    display: flex;
    align-items: center;

    &:not(:last-of-type) {
        margin-bottom: 0.5rem;
    }
`

const buttonStyles = `
    background-color: transparent;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 0.9rem;

    &:focus {
        outline: 0;
    }

    &:hover {
        cursor: pointer;
        filter: brightness(105%);
    }
`

const Complete = styled.button`
    ${buttonStyles}

    border: ${props => props.completed ? 0 : '1px solid #e2e8f0'};
`

const Label = styled.p`
    margin: 0 0 0 0.5rem;
    flex: 1;

    &:hover {
        cursor: pointer;
        color: #4a5568;
    }
`

const Delete = styled.button`
    ${buttonStyles}

    border: 0;
`

const List = ({ items }) => (
    <Component>
        {items.map(item => (
            <Item key={item.id}>
                <Complete completed={item.completed}>{item.completed && '✅' }</Complete>
                <Label>{item.label}</Label>
                <Delete>❌</Delete>
            </Item>
        ))}
    </Component>
)

export default List;