import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";


function Saved() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])


    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <>
            <h1 className="title">Your Saved Books</h1>
            <List>
                {books.map(book => (
                    <div className="columns" id="searchText">
                        <div className="column is-four-fifths">
                              
                              <div className="columns">
                              <div className="column is-half"> 
                              <img width="200px" height="200px" src={book.image}/>
                              </div>
                              <div className="column is-half"> 
                              <h1 id="bookHeader">{book.title}</h1>
                              <br></br>
                                <p>By: {book.authors}</p>
                                <br></br>
                                <p>{book.description}</p>
                                </div>
                                </div>
                                
                        </div>
                        <div className="column is-one-fifth">
                        <DeleteBtn className="button deleteBtn" onClick={() => deleteBook(book._id)} />
                        </div>
                    </div>
                ))}
            </List>
        </>
    )
}

export default Saved;

