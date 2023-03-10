import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Test({note, note_num, active, setActive}) {

    const navigate = useNavigate();


    const handleClick = () => {
        navigate('note/' + (note_num - note.num))

    }



    return(
        <div className= "SideNote"><button className ={`add  ${note.num === active && "pick"} ` }  onClick={() =>{ setActive(note.num); handleClick()}}><div className="Side_text"> <div className="Title_side">{note.title}</div> <div className="Date_side">{note.DayTime}</div><div className="Body_side">{note.body.substring(0,200) + " ....."}</div>  </div></button></div>
    )
}