import React from 'react';

const Reactions = (props) => {
  return (
    <p>L {props.likes} Lv {props.love} S {props.sad} A {props.angry} H {props.haha} </p>
    // <FacebookCounter counters={counters} important={important}/>
  );
};

export default Reactions;