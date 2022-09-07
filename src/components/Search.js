import { Form } from 'react-bootstrap'

export const Search = ({ search, setSearch })=> {

  return (
    <Form.Control 
      type='text' 
      placeholder='Search for description, manufacturer or catalog number' 
      value={search} 
      onChange={(e) => setSearch(e.target.value)} 
      className='search-input'
      style={{border: '8px solid #04348d'}}
    />
  );
}