import React, { useState, useEffect } from 'react';
import { useTransition, animated, useSpringRef } from '@react-spring/web';

const pages = [
  (props) => (
    <animated.div style={{ ...props.style, background: 'lightpink' }}></animated.div>
  ),
  (props) => (
    <animated.div style={{ ...props.style, background: 'lightblue' }}></animated.div>
  ),
  (props) => (
    <animated.div style={{ ...props.style, background: 'lightgreen' }}></animated.div>
  ),
];

export default function AnimatedPageSlider() {
  const [index, set] = useState(0);

  const onClick = () => set((state) => (state + 1) % 3);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <div className={`flex fill`} onClick={onClick}>
      {transitions((props, i) => {
        const Page = pages[i];
        return <Page style={props.style} />;
      })}
    </div>
  );
}
