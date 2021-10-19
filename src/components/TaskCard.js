
import { styled } from '@mui/system';
import { Button } from '@mui/material';
let cols=["#fce803", "#03fc07", "#03fcf0", "#f803fc", "#fc036f", "#3903fc"];
let colval=parseInt(Math.random()*10)%6;
const CardStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: { height: "60vw", width: "90vw", margin: "5vw", paddingLeft: "4.5vw", paddingRight: "4.5vw" },
    [theme.breakpoints.between('sm', 'lg')]: { height: "30vw", width: "45vw", margin: "2.5vw", paddingLeft: "2.25vw", paddingRight: "2.25vw" },
    [theme.breakpoints.up('lg')]: { height: "20vw", width: "30vw", margin: "1.4vw", paddingLeft: "1.5vw", paddingRight: "1.5vw" },
    display: "inline-block",
    // backgroundColor: cols[colval],
    overflow: "auto",
    boxSizing: "border-box",
    borderRadius: "1vw",
    position: "relative",

}));

const TaskCard = (props) => {
    function dthandler() {
        props.onDelete(props.cardContent.id);
    }
    return (
        <CardStyle key={props.id} style={{backgroundColor:cols[(colval+parseInt(props.cardContent.id))%6]}}>
            <div className="cardContent">
                <h2>{props.cardContent.title}</h2>
                <p>{props.cardContent.content}</p>
            </div>
            <div className="cardBottom">
                <Button style={{ backgroundColor: "green", color: "white" }} onClick={()=>{props.onDone(props.cardContent.id);}}>Done</Button>
                <Button style={{ backgroundColor: "red", color: "white" }} onClick={dthandler}>Delete</Button>
            </div>

        </CardStyle>
    )
}


export default TaskCard;