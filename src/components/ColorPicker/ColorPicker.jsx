import { Btn } from './ColorPicker.styled';
import classNames from 'classnames';
const { Component } = require('react');

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 2,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    return classNames('ColorPicker__options', {
      ColorPicker__active: index === this.activeOptionIdx,
    });
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
              className={this.makeOptionClassName(index)}
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
