//import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";

import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';


export default function Edit({updateNote, note, deleteNoteElement}) {



    const { noteId } = useParams();
    const navigate = useNavigate();


    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        
    };
    const formatDate = (when)  => {

         const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
            return( "");

        }
        else{
            return(formatted);

        }
    };
    
    
    //const { noteId } = useParams();
    const[x, setValue] = useState(note[noteId-1].body_html);
    const[body, setBody] = useState( x.replace(/<\/?[^>]+(>|$)/g, ""))
    const[y, setY] = useState(note[noteId-1].title);
    const[title, setTitle] = useState(y);
    const[z, setZ] = useState(note[noteId-1].DayTimeUnformated);
    const[DateT, setdateTime] = useState(note[noteId-1].DayTime);


    // setY()
    // setZ()

    const DT = (event) =>{
        setZ(event.target.value)
        const rand = formatDate(event.target.value)
        setdateTime(rand)

        }


    function bodyStor(value){

        setValue(value)
        setBody( value.replace(/<\/?[^>]+(>|$)/g, "")
        )
    }


    

    const Title = (event) =>{
        setY(event.target.value)
        setTitle(event.target.value)


    }

    useEffect(()=> {
        setValue(note[noteId-1].body_html)
    }, [note,noteId])

    useEffect(()=> {
        setY(note[noteId-1].title)
        setTitle(note[noteId-1].title)

    }, [note,noteId])

    useEffect(()=> {
        setZ(note[noteId-1].DayTimeUnformated)
        setdateTime(note[noteId-1].DayTime)

    }, [note,noteId])

  

    return(
        
        <>
        <div className="M">
    <   div className = "head">
        <div className="right">
        <input className = "title" type="text" required minLength="1" maxLength="20" placeholder="Untitled" value={y} onChange={Title} ></input>
        <div className="dateTime">
        <input type="datetime-local" id="meeting-time"  onChange = {DT} value={z}
        name="meeting-time" 
       ></input>
        
        </div></div>
        <div className="left">
          <button className="save" onClick={() => {updateNote(body,title,DateT,noteId-1,x,z); navigate('/note/' + noteId)}}>Save</button>
          <button className="delete" onClick={() => {if (window.confirm("Are you sure")){deleteNoteElement(noteId); navigate('/note')}}}>Delete</button>
        </div>
        
        </div>
        
    <div className="Quill_edit"><ReactQuill theme="snow"  value = {x} onChange={bodyStor}  /></div>
    </div>
    </>
    )
}