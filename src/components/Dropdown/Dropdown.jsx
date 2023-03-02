import { Component } from 'react';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prev => ({
      visible: !prev.visible,
    }));
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          {visible ? 'Скрити' : 'Показати'}
        </button>
        {visible && <div>Спливающе меню</div>}
      </div>
    );
  }
}

export default Dropdown;
