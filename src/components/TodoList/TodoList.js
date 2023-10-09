import React, { Component } from "react";
import styled from "styled-components";

import Filter from './Filter';
import Input from './Input';
import List from './List';

const Wrapper = styled.div`
    background-color: #fff;
    border-radius: 0.375rem;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
    min-width: 400px;
`

class TodoList extends Component {
    state = {
        mode: 'all',
        items: [
            {
                id: 1,
                label: 'Make the <List /> component',
                completed: false
            },
            {
                id: 2,
                label: 'Finish the Todo List',
                completed: false
            },
            {
                id: 3,
                label: 'Drink a cup of tea',
                completed: true
            }
        ]
    }

    handleModeChange = mode => () => {
        this.setState( { mode } )
    }

    render() {
        const { mode, items } = this.state

        return (
            <Wrapper>
                <Filter mode={mode} onModeChange={this.handleModeChange} />
                <Input />
                <List items={items} />
            </Wrapper>
        )
    }
}

export default TodoList;