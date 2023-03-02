import useLocalStorage from 'components/Hooks/UseLocalStorage';

export default function FormHook() {
  const [email, setEmail] = useLocalStorage('email', '');

  const [password, setPassword] = useLocalStorage('password', '');

  //   const hendleEmailChange = event => {
  //     setEmail(event.target.value);
  //   };

  //   const hendlePasswordChange = event => {
  //     setPassword(event.target.value);
  //     };
  // Замість двох елементі робимо один
  const hendleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <form autoComplete="off">
      <label htmlFor="">
        <span>Пошта</span>
        <input
          type="email"
          name="email"
          onChange={hendleChange}
          value={email}
        />
      </label>

      <label htmlFor="">
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={hendleChange}
          value={password}
        />
      </label>
      <button type="submit">Регістрація</button>
    </form>
  );
}
