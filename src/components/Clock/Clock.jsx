import { useState, useRef, useEffect } from 'react';

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
    <div>
      <button onClick={() => setTime(new Date())}>Обновити час</button>
      <p>Поточний час: {time.toLocaleTimeString()} </p>
      <button type="button" onClick={stop}>
        Зупинити
      </button>
    </div>
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
