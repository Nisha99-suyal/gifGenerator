import Spinner from './Spinner';
import useHook from "../customHook/useHook"
export default function RandomGif() {

  const {gif,loading,fetchDATA}= useHook();

  return (
    <div className="randomGIF-section">
      <h3 className="GIF-heading">A random gif</h3>
      {loading?(<Spinner/>):(<img className="GIF-img" src={gif} alt='random gif'/>)}
      <button onClick={()=>fetchDATA()} className='generate-btn btn btn-primary'>generate</button>
    </div>
  )
}
