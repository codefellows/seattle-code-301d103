import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';


const PORT = import.meta.env.VITE_server_url;


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  fetchAllBooks = () => {
    console.log('reaching to server')
    axios.get(`${PORT}/books`)
      .then(response => {
        this.setState({ books: response.data });
        console.log(response.data)
      });
  }

  // this is a lifecycle method, any code put here will occur automatically when the component "mounts" the DOM.
  componentDidMount() {
    this.fetchAllBooks();
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */
    console.log(PORT);
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
              <Carousel>
                    {this.state.books.map((books, idx) =>
                    <Carousel.Item key={idx}>
                            <img
                              className="d-block w-100"
                              src="https://media.discordapp.net/attachments/1136025197523259402/1145868153285525514/arkuris42069_a_bookshelf_drawn_in_a_realistic_depiction_bcf85a72-12e1-4da1-bc7c-0aa73e44f912.png?width=889&height=889"
                              alt="First slide"
                            />
                      <Carousel.Caption>
                        <h3>
                          {books.title}
                        </h3>
                        <p>
                          {books.description}
                        </p>
                        <p>
                          Availible? {books.status}
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>)
                    }
              </Carousel>
        ) : (
          <h3>No Books Found :</h3>
        )}

      </>
    )
  }
}

export default BestBooks;
