import { useState, useRef, useEffect } from 'react';
import { Btn, Item, Wrap } from './Clock.styled';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <Wrap>
      <Btn onClick={() => setTime(new Date())}>Обновити час</Btn>
      <Item>Поточний час: {time.toLocaleTimeString()} </Item>
      <Btn type="button" onClick={stop}>
        Зупинити
      </Btn>
    </Wrap>
  );
}

// class Clock extends Component {
//   state = {
//     time: new Date().toLocaleTimeString(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(
//       () => this.setState({ time: new Date().toLocaleTimeString() }),
//       1000
//     );
//   }

//   render() {
//     return <div>{this.state.time}</div>;
//   }
// }

// export default Clock;
