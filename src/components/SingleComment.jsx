import React from "react";

export default function SingleComment({data}) {
    const {id,name,email,body} = data;
  return (
    <div className="card">
      <div>Id : {id}</div>
      <h4>Name : {name}</h4>
      <h4>Email : {email}</h4>
      <p>Comment : {body}</p>
    </div>
  );
}
