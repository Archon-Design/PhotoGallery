import React from 'react';
<<<<<<< HEAD
import styled from 'styled-components';

import Header from './Header.jsx';
import PhotoGallery from './PhotoGallery.jsx';
import Modal from './Modal.jsx';
import HomeInfo from './HomeInfo.jsx';

const axios = require('axios');

const StyledWrapper = styled.div`
  display: flex;
  .one {
    flex: 1
  }
  .two {
    flex: 2
  }
`;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 100;
  width: 992px;
  height: 100%;
`;

=======

import PhotoBox1 from './PhotoBox1.jsx';

const axios = require('axios');

>>>>>>> 608a567 (Implemented s3 hosting and updated get request to retrieve home images)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeInfo: {},
      homeImages: [],
<<<<<<< HEAD
      showModal: false,
    };

    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
=======
      photobox1imgs: [],
    };
>>>>>>> 608a567 (Implemented s3 hosting and updated get request to retrieve home images)
  }

  componentDidMount() {
    this.getHomeData();
  }

<<<<<<< HEAD
  handleShowModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  getHomeData() { // refactor to one query using join
=======
  getHomeData() {
>>>>>>> 608a567 (Implemented s3 hosting and updated get request to retrieve home images)
    const randHomeID = Math.floor(Math.random() * 100);

    axios.get('/api/homeinfo', { params: { ID: randHomeID } })
      .then((response) => {
        this.setState({ homeInfo: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get('/api/homeimages', { params: { ID: randHomeID } })
      .then((response) => {
        this.setState({
          homeImages: response.data,
          photobox1imgs: [response.data[0], response.data[1], response.data[2]],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
<<<<<<< HEAD
      <StyledWrapper>
        <div className="one" />
        <HomePageContainer className="two">
          {
            this.state.showModal ? (
              <Modal onClose={this.handleCloseModal} images={this.state.homeImages}> </Modal>
            ) : null
          }
          {
            this.state.homeImages.length > 0 && (
            <>
              <Header />
              <PhotoGallery images={this.state.homeImages} handleShowModal={this.handleShowModal} />
              <HomeInfo />
            </>
            )
          }
        </HomePageContainer>
        <div className="one" />
      </StyledWrapper>
=======
      <PhotoBox1 images={this.state.photobox1imgs} />
>>>>>>> 608a567 (Implemented s3 hosting and updated get request to retrieve home images)
    );
  }
}

export default App;
