import React from 'react';
import { connect } from 'react-redux';
import NewToDoForm from './NewToDoForm';
import TodoListItem from './ToDoListItem';
import { removeTodo, markTodoAsCompleted } from './actions';
import './ToDoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
    <div className="list-wrapper">
        <NewToDoForm />
        {todos.map(todo => <TodoListItem
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}/>)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);