import { useState } from 'react';
import useHook from '..//customHook/useHook'
import Spinner from './Spinner'

export default function TagGIF() {

    const [tag,setTag] = useState('car')
    const {gif,loading,fetchDATA}= useHook(tag)

  return (
    <div className="tagGIF-section">
      <h3 className="GIF-heading">random {tag} gif</h3>
      {loading?(<Spinner/>):(<img className="GIF-img" src={gif} alt="`${tag} gif`"/>)}
      <div className='below-section'>
        <input className='enterTagName' type='text' value={tag} onChange={(e)=>setTag(e.target.value)} />
        <button onClick={()=>fetchDATA()} className='btn btn-primary'>generate</button>
      </div>
    </div>
  )
}
