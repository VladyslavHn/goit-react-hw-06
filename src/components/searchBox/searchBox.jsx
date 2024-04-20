import css from './searchBox.module.css';

const SearchBox = ({filter, setFilter }) => {
  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input className={css.inputFilter} type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
    </div>
  )
}

export default SearchBox
