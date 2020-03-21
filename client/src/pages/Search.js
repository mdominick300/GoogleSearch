import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import SaveBtn from "../components/SaveBtn";
import Axios from "axios";
import axios from "axios";


function Search() {
    // Setting our component's initial state
    const [book, setBook] = useState("")
    const [result, setResult] = useState([])
    const [apiKey, setApiKey] = useState("AIzaSyAgfefI0jY5WxchNeuMSXWJK5z-vOLkSyw")

    // Load all books and store them with setBooks
    // useEffect(() => {
    //     loadBooks()
    // }, [])

    function handleChange(event){
        const book = event.target.value;
        setBook(book);
    }

    function handleSubmit(event){
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")
        .then(data => {
            console.log(data.data.items);
            setResult(data.data.items);
        })
    }

    function saveBook(){
        console.log(book);
    

    }

    return (
        <>
            <h1>Search for Books</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder="Search for books"/>
                <button type="submit" className="button">Search</button>
            </form>
            <List>
                {result.map(book => (
                    <div className="columns">
                        <div className="column is-four-fifths">
                              <h1>{book.volumeInfo.title}</h1>
                              <div className="columns">
                              <div className="column is-half"> 
                              <img width="200px" height="200px" src={book.volumeInfo.imageLinks.thumbnail}/>
                              </div>
                              <div className="column is-half"> 
                                <p>{book.volumeInfo.authors}</p>
                                <p>{book.volumeInfo.description}</p>
                                </div>
                                </div>
                                
                        </div>
                        <div className="column is-four-fifths">
                        <SaveBtn onClick={() => saveBook(book._id)} />
                        </div>
                    </div>
                ))}
            </List>
        </>
    )
}

export default Search;