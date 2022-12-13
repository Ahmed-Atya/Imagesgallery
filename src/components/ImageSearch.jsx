import React ,{useState}from 'react'

const ImageSearch = ({searchText}) => {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }
  return (
    <div className='rounded overflow-hidden mx-auto'>
      <form onSubmit={onSubmit} className="max-w-sm">
        <div className="flex items-center border-b border-b-2 py-2">
        <input onChange={e => setText(e.target.value)} className="form-control border-none text-gray py-2 px-2 h" type="text" placeholder="Search Image Term..." />
        <button className="bg-info text-white rounded border border-info mt-3 px-5 py-3" type="submit">
      Search
      </button>
      </div>
      </form>
	</div>
  )
}

export default ImageSearch
