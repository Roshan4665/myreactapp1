import Button from '@mui/material/Button';

const AddTaskModal = (props) => {
    let titleVal="No title";
    let contentVal="No content";
    function handleTitleChange(event)
    {
        titleVal=event.target.value;
    }
    function handleContentChange(event)
    {
        contentVal=event.target.value;
    }
    function submitHandler()
    {
        let newList=[...props.taskList];
        let newTask={
            title:titleVal,
            content:contentVal,
            id: newList.length,
            done: false,
            deleted: false
        }
        newList.push(newTask);
        props.setTasks(newList);
        localStorage.setItem("len", newList.length);
        for(let i=0;i<newList.length;i++)
        {
            let temp=JSON.stringify(i);
            localStorage.setItem(temp, JSON.stringify(newList[i]));
        }
    }
    return (
        <div className="backdrop">
            <div className="modalCard">
                    <input type="text" required className="titleInput" placeholder="Title" onChange={handleTitleChange}></input>
                    <textarea required className="contentInput" onChange={handleContentChange}></textarea>
                    <Button type="submit" style={{position:"absolute", top:"85%",left:"55%",width:"40%", backgroundColor:"#42f56c", color:"white" }} onClick={()=>{props.modalHandler(); submitHandler();}}>Save</Button>
                    <Button style={{position:"absolute", top:"85%",left:"5%",width:"40%", backgroundColor:"#ff0f1f", color:"white"}}  onClick={props.modalHandler} >Cancel</Button>
            </div>
        </div>
    )
}

export default AddTaskModal
