import user from '../Data/user.json';
import color from '../Data/color.json';
import {
  Dropdown,
  Profile,
  ColorPicker,
  Form,
  LoginForm,
  ProductForm,
} from '../components/index.js';
import { Component } from 'react';

class App extends Component {
  state = {
    options: color,
  };

  // Сенхроний код
  formSubmitHandler = data => {
    console.log('data: ', data);
  };

  // Асинхроний код
  // formSubmitHandler = data => {
  //   setTimeout(() => {
  //     console.log('data: ', data);
  //   }, 1000);
  // };

  render() {
    const { options } = this.state;
    return (
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <LoginForm></LoginForm>
        <ColorPicker options={options}></ColorPicker>
        <Dropdown></Dropdown>
        <Form onSubmit={this.formSubmitHandler} />
        <ProductForm></ProductForm>
      </div>
    );
  }
}

export default App;

// export const App = () => {
//   return (
//     <div>
//       <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
//       <ColorPicker options={colorPickerOptions}></ColorPicker>
//       <Dropdown></Dropdown>
//     </div>
//   );
// };
