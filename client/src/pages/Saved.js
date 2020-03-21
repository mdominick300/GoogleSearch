import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
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
            <h1>All Saved Books</h1>
            <List>
                {books.map(book => (
                    <ListItem key={book._id}>
                        <Link to={"/books/" + book._id}>
                            <strong>
                                {book.title} Photo: <img width="200px" height="200px" src={book.image} />
                            </strong>
                        </Link>
                        <DeleteBtn onClick={() => deleteBook(book._id)} />
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default Saved;