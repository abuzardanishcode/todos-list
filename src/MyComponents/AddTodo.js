import React, { useState } from 'react';

const AddTodo = (props) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
     e.preventDefault();
     if(!title || !desc){
       alert("Title or description can't be empty");
       return
     }
     //console.log("submit function hits");
     props.addkaro(title, desc);
     setTitle("");
     setDesc("");
  }

  return (
    <div className='container'>
      <h3>Add Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="todoTitle" aria-describedby="todoHelp" />
            <div id="todoHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="description"/>
        </div>
    
        <button type="submit" className="btn btn-success">Submit</button>
        </form>
    </div>
  )
}

export default AddTodo
