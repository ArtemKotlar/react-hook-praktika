import user from '../Data/user.json';
import color from '../Data/color.json';
import videos from '../Data/videos.json';
import publications from '../Data/publications.json';
import { ToastContainer } from 'react-toastify';
import {
  Dropdown,
  Profile,
  ColorPicker,
  Form,
  LoginForm,
  ProductForm,
  Modal,
  Clock,
  Player,
  VideoList,
  Reader,
  PokemonForm,
  PokemonInfo,
} from '../components/index.js';
import { Component } from 'react';
import * as API from 'services/api';
import { MaterialForm } from './MaterialEditor/MaterialForm';
import { Materials } from './MaterialEditor/Materials';

class App extends Component {
  state = {
    options: color,
    showModal: false,
    selectedVideo: null,
    publications: publications,
    pokemonName: '',
    // Для матеріалс
    materials: [],
    isLoading: false,
    error: false,
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

  // Для модалкі
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // Для відео
  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  // Для поекмонів
  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  // Для матеріалс

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log('error: ', error);
    }
  };

  deleteMaterial = async id => {
    await API.deleteMaterial(id);
    this.setState(state => ({
      materials: state.materials.filter(material => material.id !== id),
    }));
  };

  updateMaterial = async fields => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);
      this.setState(state => ({
        materials: this.state.materials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log('error: ', error);
    }
  };

  render() {
    const {
      options,
      showModal,
      publications,
      selectedVideo,
      materials,
      isLoading,
      error,
    } = this.state;
    return (
      <div>
        <Clock></Clock>
        <button type="button" onClick={this.toggleModal}>
          Відкрити модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Привіт</h1>
            <p>asddfdldndn nfle f wjwiujiw woiwqiopeq wquiiwr 88978907</p>
            <button type="button" onClick={this.toggleModal}>
              Закрити
            </button>
          </Modal>
        )}

        <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
          <PokemonForm onSubmit={this.handleFormSubmit} />
          <PokemonInfo pokemonName={this.state.pokemonName} />
          <ToastContainer />
        </div>

        <div style={{ padding: 24 }}>
          <h1>Selected video: {selectedVideo}</h1>
          <VideoList videos={videos} onSelect={this.selectVideo} />
          <Player url={selectedVideo} />
        </div>
        <Reader items={publications} />
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

        <div>
          {error && <p>Ой щось пішло не так :( спробуйте ще раз</p>}
          <MaterialForm onSubmit={this.addMaterial} />
          {isLoading ? (
            ''
          ) : (
            <Materials
              items={materials}
              onDelete={this.deleteMaterial}
              onUpdate={this.updateMaterial}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
