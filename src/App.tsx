import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImage } from './axios-api';
import { ImageItem } from './App.types';



function App() {
  const [pictures, setPictures] = useState<ImageItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [modalImage, setModalImage] = useState<ImageItem | null>(null);

  function openModal(photo: ImageItem) {
    setModalImage(photo);
  }

  function closedModal() {
    setModalImage(null);
  }

  const handleSearch = (image: string) => {
    setLoadMore(image);
    setPage(1);
    setPictures([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (loadMore === '') {
      return;
    }

    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImage(loadMore, page);
        setPictures((prevImage) => [
            ...prevImage,
            ...data.map(item => ({
            ...item,
          alt_description: item.alt_description ?? ""
          })),
        ]);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, loadMore]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {pictures.length > 0 && (
        <ImageGallery openModal={openModal} items={pictures} />
      )}
      {isLoading && <Loader />}
      {pictures.length > 0 && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalImage !== null}
        onClose={closedModal}
        image={modalImage}
      />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
