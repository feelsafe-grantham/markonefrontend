import React, { createContext, useContext, useState } from 'react';
import useImageView from '../utilities/customHooks/useImageView';

interface ImageViewerContextType {
    openImageViewer: (images: string[], index?: number) => void;
}

const ImageViewerContext = createContext<ImageViewerContextType | undefined>(undefined);

export const ImageViewerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isOpen, openImageViewer, closeImageViewer, ImageViewer } = useImageView();
    const [images, setImages] = useState<string[]>([]);

    const handleOpenImageViewer = (newImages: string[], index: number = 0) => {
        setImages(newImages);
        openImageViewer(newImages, index);
    };

    return (
        <ImageViewerContext.Provider value={{ openImageViewer: handleOpenImageViewer }}>
            {children}
            {isOpen && <ImageViewer images={images} onClose={closeImageViewer} />}
        </ImageViewerContext.Provider>
    );
};

export const useImageViewer = () => {
    const context = useContext(ImageViewerContext);
    if (context === undefined) {
        throw new Error('useImageViewer must be used within an ImageViewerProvider');
    }
    return context;
}; 