export interface ImageItem {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

export interface SearchBarProps {
  onSearch: (image: string) => void;
}

export interface FormValues {
  image: string;
}



