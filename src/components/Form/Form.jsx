import { nanoid } from 'nanoid';

const { Component } = require('react');

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = nanoid();
  tagInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  handleLicenceChange = e => {
    this.setState({ licence: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    const { experience } = this.state;
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Ім'я
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          Фамілія
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>

        <p>Ваш рівень програмування</p>
        <label htmlFor="">
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={experience === 'junior'}
            id=""
          />
          Junior
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={experience === 'middle'}
            id=""
          />
          Middle
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={experience === 'senior'}
            id=""
          />
          Senior
        </label>
        <br />

        <label htmlFor="">
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Погодження на умови договору
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Відправити
        </button>
      </form>
    );
  }
}

export default Form;
