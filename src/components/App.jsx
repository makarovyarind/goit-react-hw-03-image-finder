import React, { Component } from "react";
import 'react-notifications/lib/notifications.css';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./LoadButton/Button";
import api from 'services/searchName-api';
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";

export class App extends Component {
  state = {
    searchName: '',
    currentPage: 1,
    images: [],
    showModal: false,
    selectedImage: null,
    status: 'idle'
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchName !== this.state.searchName || prevState.currentPage !== this.state.currentPage) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const { searchName, currentPage } = this.state;
      this.setState({ status: 'pending'})
    api.fetchData(searchName, currentPage)
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data], status: 'resolved'
        }));
      })
      .catch(error => {
        this.setState({ status: 'idle'})
        alert(error);
      });
  }

  showModel = (selectedImage) => {
    this.setState(({ showModal }) => ({
      showModal: true,
      selectedImage: selectedImage,
    }));
  }

  closeModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  serchImageSubmit = searchName => {
    this.setState({ searchName, currentPage: 1, images: [] });
  }

  serchImageLoadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  }

  render() {
    const { showModal, images, selectedImage, status } = this.state;

    if(status === 'idle') {
      return(
        <div className="App">
          <Searchbar onSubmit={this.serchImageSubmit} />
        </div>
      );
    };

    if(status === 'pending') {
      return (
        <div className="App">
        <Loader />
      </div>
      );
    };

    if(status === 'resolved') {
      return (
        <div className="App">
          <Searchbar onSubmit={this.serchImageSubmit} />
          <ImageGallery images={images} onClick={this.showModel}/>
          <Button onClick={this.serchImageLoadMore} />
         
          {showModal && <Modal selectedImage={selectedImage} onClose={this.closeModal} />}
        </div>
      );
    };
  }
}