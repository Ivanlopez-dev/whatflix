function Search ({ searchTerm, setSearchTerm }) {
  return (

    <div className='search'>
      <div>
        <img src='search-icon.svg' alt='Search icon' />
        <input
          type='text'
          placeholder='Search through thousands of Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search
