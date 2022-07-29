import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewToDoForm from './NewToDoForm';
import ToDoListItem from './ToDoListItem';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest
 } from './thunks';
import './ToDoList.css';

const ToDoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <div className="list-wrapper">
            <NewToDoForm />
            {todos.map(todo => <ToDoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}/>)}
        </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);