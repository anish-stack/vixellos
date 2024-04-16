import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './sercah.css'
import { Link } from 'react-router-dom';

const SearchBar = ({ onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setSearchResults([]);
            return;
        }

        const fetchData = async () => {
            try {
                const response = await axios.get('./data.json');
                setSearchResults(response.data.filter(item => item.heading.toLowerCase().includes(searchTerm.toLowerCase())));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchTerm]);

    return (
        <div className="search-overlay">
            <div className="search-box">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="form-control"
                />
                <button onClick={onClose} className="btn btn-primary">Close</button>
            </div>
            <div className="search-results">
                {searchResults.map(item => (
                    <a href={`/single-product/${item.heading}/${item.id}`} key={item.id}>{item.heading}</a>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;
