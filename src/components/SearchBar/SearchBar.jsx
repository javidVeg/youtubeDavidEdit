<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './SearchBar.css'
require('dotenv').config();
const axios = require('axios');
// import ReactDOM from 'react-dom';



function SearchBar() {
    const [searchTerm, setSearchTerms] = useState("");   


    const handleSearch = event => {
            event.preventDefault();
            setSearchTerms(event.target.value);
            console.log(searchTerm);
          
    }
  
    useEffect(() => {
        axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params":{
                'part':'snippet',
                'maxResults':'2',
                'key':"AIzaSyCh6Bf8986v3tb2o3as3LAKIkw8Yc_iCmQ",
                'q': searchTerm
            }
        })
        .then(resp => {
            const videoData = resp.data;
            console.log(videoData)
            
    }).catch(err => {
        console.log(err);
    });
});



    return (
      
        
        <Navbar bg="light" expand="lg" className="ytNavbar" >
          <Container fluid>
            <Navbar.Brand href="#"><img src="https://i.ibb.co/26BswNR/pngfind-com-youtube-png-986.png" alt="pngfind-com-youtube-png-986" width= "90" border="0"></img>
        </Navbar.Brand>
            
              
              <form 
                          className="navbar-form navbar-left" 
                          role="search"
                          onSubmit={(e) => handleSearch(e)}>
                            <div className="form-group">
                              <input 
                                  className="form-control" 
                                  type="text"
                                  placeholder="search"
                                  name="input"
                                  value={searchTerm}
                                  onChange={(e) => setSearchTerms(e.target.value)}>
                              </input>
                            </div>
                          <button 
                            type="submit"
                            className="btn btn-default"
                            >Search</button>
                    </form>
            
          </Container>
        </Navbar>
        
              
            )
  
        
        
    }



=======
import React, {  useContext,useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit = (event) =>  {
    event.preventDefault();
     setSearch(search);
    }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Find your Video..."
        value={search.text}
        onChange={handleChange}
      />
        <button
        type="submit"
      >
        Search      
        </button>
    </form>
  )
}
>>>>>>> refs/remotes/origin/main
export default SearchBar;   
