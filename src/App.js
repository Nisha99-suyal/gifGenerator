import './App.css';
import RandomGif from './components/RandomGif';
import TagGIF from './components/TagGIF';

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <h2 className='nav-heading'>Random GIFS</h2>
      </div>
      <div className='gif-row row'>
        <div className='random-gif col-lg-4 col-sm-6'>
          <RandomGif/>
        </div>
        <div className='tag-gif col-lg-4 col-sm-6'>
          <TagGIF/>
        </div>
      </div>
    </div>
  )
}

export default App;
