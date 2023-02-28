import { Btn } from './ColorPicker.styled';
// import classNames from 'classnames';
const { PureComponent } = require('react');

class ColorPicker extends PureComponent {
  state = {
    activeOptionIdx: '2',
  };

  setActiveIdx = index => {
    console.log('index: ', index);
    this.setState({ activeOptionIdx: index });
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;

    const { label } = options[activeOptionIdx];

    return (
      <div>
        <h2>Color Picker</h2>
        <p>Вибраний колір: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <Btn
              key={label}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></Btn>
          ))}
        </div>
      </div>
    );
  }
}
export default ColorPicker;
