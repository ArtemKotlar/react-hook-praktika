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
} from '../components/index.js';
import { useState, useEffect } from 'react';
import * as API from 'services/api';
import { MaterialForm } from './MaterialEditor/MaterialForm';
import { Materials } from './MaterialEditor/Materials';
import FormHook from './FormHook/FormHook';
import PokemonForm from './Pokemon/PokemonForm';
import PokemonInfo from './Pokemon/PokemonInfo';
import Counter from './Counter';
import Friends from './Friends';

function App() {
  const [options] = useState(color);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [publicationsData] = useState(publications);
  const [pokemonName, setPokemonName] = useState('');
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      setMaterials(prevMaterials => [...prevMaterials, material]);
    } catch (error) {
      setError(true);
      console.log('error: ', error);
    }
  };

  const deleteMaterial = async id => {
    await API.deleteMaterial(id);
    setMaterials(prevMaterials =>
      prevMaterials.filter(material => material.id !== id)
    );
  };

  const updateMaterial = async fields => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);
      setMaterials(prevMaterials =>
        prevMaterials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        )
      );
    } catch (error) {
      setError(true);
      console.log('error: ', error);
    }
  };

  const formSubmitHandler = data => {
    console.log('data: ', data);
  };

  // Для модалкі
  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  // Для відео
  const selectVideo = link => {
    setSelectedVideo(link);
  };

  // Для поекмонів
  const handleFormSubmit = pokemonName => {
    setPokemonName(pokemonName);
  };

  useEffect(() => {
    const getMaterials = async () => {
      try {
        setIsLoading(true);
        const materialsData = await API.getMaterials();
        setMaterials(materialsData);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.log(error);
      }
    };

    getMaterials();
  }, []);

  return (
    <div>
      <Counter />
      <br />
      <FormHook />
      <br />
      <Clock />
      <br />
      <button type="button" onClick={toggleModal}>
        Відкрити модалку
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <h1>Привіт</h1>
          <p>asddfdldndn nfle f wjwiujiw woiwqiopeq wquiiwr 88978907</p>
          <button type="button" onClick={toggleModal}>
            Закрити
          </button>
        </Modal>
      )}

      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={handleFormSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer autoClose={3000} />
      </div>

      <div style={{ padding: 24 }}>
        <h1>Selected video: {selectedVideo}</h1>
        <VideoList videos={videos} onSelect={selectVideo} />
        <Player url={selectedVideo} />
      </div>
      <Reader items={publicationsData} />
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
      <Form onSubmit={formSubmitHandler} />
      <ProductForm></ProductForm>

      <div>
        {error && <p>Ой щось пішло не так :( спробуйте ще раз</p>}
        <MaterialForm onSubmit={addMaterial} />
        {isLoading ? (
          ''
        ) : (
          <Materials
            items={materials}
            onDelete={deleteMaterial}
            onUpdate={updateMaterial}
          />
        )}
      </div>
      <Friends />
    </div>
  );
}

export default App;

// class App extends Component {
//   state = {
//     options: color,
//     showModal: false,
//     selectedVideo: null,
//     publications: publications,
//     pokemonName: '',
//     // Для матеріалс
//     materials: [],
//     isLoading: false,
//     error: false,
//   };

//   // Сенхроний код
//   formSubmitHandler = data => {
//     console.log('data: ', data);
//   };
//   // Асинхроний код
//   // formSubmitHandler = data => {
//   //   setTimeout(() => {
//   //     console.log('data: ', data);
//   //   }, 1000);
//   // };

//   // Для модалкі
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   // Для відео
//   selectVideo = link => {
//     this.setState({ selectedVideo: link });
//   };

//   // Для поекмонів
//   handleFormSubmit = pokemonName => {
//     this.setState({ pokemonName });
//   };

//   // Для матеріалс

//   async componentDidMount() {
//     try {
//       this.setState({ isLoading: true });
//       const materials = await API.getMaterials();
//       this.setState({ materials, isLoading: false });
//     } catch (error) {
//       this.setState({ error: true, isLoading: false });
//       console.log(error);
//     }
//   }

//   addMaterial = async values => {
//     try {
//       const material = await API.addMaterial(values);
//       this.setState(state => ({
//         materials: [...state.materials, material],
//         isLoading: false,
//       }));
//     } catch (error) {
//       this.setState({ error: true, isLoading: false });
//       console.log('error: ', error);
//     }
//   };

//   deleteMaterial = async id => {
//     await API.deleteMaterial(id);
//     this.setState(state => ({
//       materials: state.materials.filter(material => material.id !== id),
//     }));
//   };

//   updateMaterial = async fields => {
//     try {
//       const updatedMaterial = await API.updateMaterial(fields);
//       this.setState(state => ({
//         materials: this.state.materials.map(material =>
//           material.id === fields.id ? updatedMaterial : material
//         ),
//       }));
//     } catch (error) {
//       this.setState({ error: true, isLoading: false });
//       console.log('error: ', error);
//     }
//   };

//   render() {
//     const {
//       options,
//       showModal,
//       publications,
//       selectedVideo,
//       materials,
//       isLoading,
//       error,
//       pokemonName,
//     } = this.state;
//     return (
//       <div>
//         <Counter />
//         <br />
//         <FormHook />
//         <br />
//         <Clock />
//         <br />
//         <button type="button" onClick={this.toggleModal}>
//           Відкрити модалку
//         </button>
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <h1>Привіт</h1>
//             <p>asddfdldndn nfle f wjwiujiw woiwqiopeq wquiiwr 88978907</p>
//             <button type="button" onClick={this.toggleModal}>
//               Закрити
//             </button>
//           </Modal>
//         )}

//         <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//           <PokemonForm onSubmit={this.handleFormSubmit} />
//           <PokemonInfo pokemonName={pokemonName} />
//           <ToastContainer autoClose={3000} />
//         </div>

//         <div style={{ padding: 24 }}>
//           <h1>Selected video: {selectedVideo}</h1>
//           <VideoList videos={videos} onSelect={this.selectVideo} />
//           <Player url={selectedVideo} />
//         </div>
//         <Reader items={publications} />
//         <Profile
//           username={user.username}
//           tag={user.tag}
//           location={user.location}
//           avatar={user.avatar}
//           stats={user.stats}
//         />

//         <LoginForm></LoginForm>
//         <ColorPicker options={options}></ColorPicker>
//         <Dropdown></Dropdown>
//         <Form onSubmit={this.formSubmitHandler} />
//         <ProductForm></ProductForm>

//         <div>
//           {error && <p>Ой щось пішло не так :( спробуйте ще раз</p>}
//           <MaterialForm onSubmit={this.addMaterial} />
//           {isLoading ? (
//             ''
//           ) : (
//             <Materials
//               items={materials}
//               onDelete={this.deleteMaterial}
//               onUpdate={this.updateMaterial}
//             />
//           )}
//         </div>
//         <Friends />
//       </div>
//     );
//   }
// }
