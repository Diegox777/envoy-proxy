import React from 'react';
import { FacebookCounter } from 'react-reactions';
const Reactions = (props) => {
  const counters = [];
  for (let i = 0; i < props.likes; i++) {
    counters.push({
      emoji: 'like',
      by: 'x'
    });
  }
  for (let i = 0; i < props.sad; i++) {
    counters.push({
      emoji: 'sad',
      by: 'x'
    });
  }
  for (let i = 0; i < props.haha; i++) {
    counters.push({
      emoji: 'haha',
      by: 'x'
    });
  }
  for (let i = 0; i < props.angry; i++) {
    counters.push({
      emoji: 'angry',
      by: 'x'
    });
  }
  for (let i = 0; i < props.love; i++) {
    counters.push({
      emoji: 'love',
      by: 'x'
    });
  }
  const important = ['Diegox']
  return (
    // <p>L {props.likes} Lv {props.love} S {props.sad} A {props.angry} H {props.haha} </p>
    <FacebookCounter counters={counters} important={important}/>
  );
};

export default Reactions;