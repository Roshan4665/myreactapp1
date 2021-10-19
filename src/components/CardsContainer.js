import React from 'react';
import TaskCard from './TaskCard';
const CardsContainer = ({taskList, setTasks}) => {

    const doneTaskHandler = (k) => {
        let newTaskList = [...taskList];
        newTaskList[k].done = true;
        setTasks(newTaskList);
        localStorage.setItem(k, JSON.stringify(newTaskList[k]));
    }

    const deleteTaskHandler = (k) => {
        let newTaskList = [...taskList];
        newTaskList[k].deleted = true;
        setTasks(newTaskList);
        localStorage.setItem(k, JSON.stringify(newTaskList[k]));
    }
    return (
        <>
            {CardConstructor(taskList, deleteTaskHandler, doneTaskHandler)}
        </>
    );
}
function CardConstructor(taskList, deleteTask, doneTask) {
    let constructedCardList = [];
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i]!==null&&taskList[i].deleted === false && taskList[i].done === false)
            constructedCardList.push(<TaskCard key={taskList[i].id}
                cardContent={taskList[i]} onDelete={deleteTask} onDone={doneTask} />);
    }
    return constructedCardList;
}



export default CardsContainer;
