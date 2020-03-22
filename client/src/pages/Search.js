import React, { useState} from "react";
import API from "../utils/API";
import { List } from "../components/List";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";
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

     async function handleSubmit(event){
        event.preventDefault();
       axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=20")
        .then(data => {
            console.log(data.data.items);
            setResult(data.data.items);
        })
    }

    function saveBook(title, image, authors, description, link){
      
        console.log(title)
        console.log(image)
        console.log(authors);
        console.log(description);

        console.log("logged");
        alert("Your books is saved!")
          API.saveBook({
            image: image,
            title: title,
            author: authors,
            description: description,
            link: link
          })
            // .then(res => loadBooks())
            .catch(err => console.log(err));
        
      }

    return (
        <>
        <h1 className="title">Search for books on Google</h1>
        <p className="info">Navigate the using the navbar to search Googles API for books. Save your favorites and find your saved books all in one place!</p>
            <h1 className="title">Search Here</h1>
            <form className="search" onSubmit={handleSubmit}>
                <input id="input" type="text" onChange={handleChange} placeholder="Search for books"/>
                <button type="submit" className="button is-primary">Search</button>
            </form>
            <List>
                {result.map(book => (
                    <div className="columns" id="searchText">
                        <div className="column is-four-fifths">
                              
                              <div className="columns">
                              <div className="column is-half"> 
                              <a target="_blank" href={book.volumeInfo.previewLink}>
                              <img width="200px" height="200px" src={book.volumeInfo.imageLinks.thumbnail}/>
                              </a>
                              </div>
                              <div className="column is-half"> 
                              <h1 id="bookHeader">{book.volumeInfo.title}</h1>
                              <br></br>
                                <p>By: {book.volumeInfo.authors}</p>
                                <br></br>
                                <p>{book.volumeInfo.description}</p>
                                </div>
                                </div>
                                
                        </div>
                        <div className="column is-one-fifth">
                        <ViewBtn   />
                        <SaveBtn onClick={() => saveBook(book.volumeInfo.title,book.volumeInfo.imageLinks.thumbnail,book.volumeInfo.authors[0],book.volumeInfo.description,book.volumeInfo.previewLink)} />
                        </div>
                    </div>
                ))}
            </List>
        </>
    )
}

export default Search;