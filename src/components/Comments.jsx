import React, { useEffect, useState } from "react";
import { useFetchData } from "../customHooks/useFetchData";
import SingleComment from "./SingleComment";

export default function Comments() {
  const [isLoaded,setIsLoaded] = useState(false);
  const { data } = useFetchData(
    "https://jsonplaceholder.typicode.com/comments",
    30
  );

  useEffect(()=> {
    setIsLoaded(true);
  },[data])

  return (
    <div className="comments">
      <div className="details">
        <h1>Custom hooks name : useFetchData()</h1>
        <p>
          <b>What it does?</b> <br />
          basically it helps to fetch data, just by passing an url.
          Additionally, it can give you your desired items. For Example, you
          have an array that holds 500 objects but you want only 30. It can do
          this for you.
        </p>
        <p>
          <b>How?</b> <br />
          It takes 3 arguments. first the url to be fetched, second one is the
          max item you want, third one is the index from where you want the
          items to be sliced out.
        </p>
      </div>

      {!isLoaded ? (
        "loding....."
      ) : (
        <div className="cards">
          {data.map((singledata) => (
            <SingleComment key={singledata.id} data={singledata} />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
}
 */
