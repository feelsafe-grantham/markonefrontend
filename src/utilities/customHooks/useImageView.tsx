import { useState, useRef, useEffect } from 'react';

interface ImageViewerProps {
    images: string[];
    startIndex?: number;
    onClose: () => void;
}

const useImageView = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [scale, setScale] = useState<number>(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    const openImageViewer = (images: string[], index: number = 0) => {
        console.log("openImageViewer", images, index);
        setCurrentIndex(index);
        setIsOpen(true);
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    const closeImageViewer = () => {
        setIsOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeImageViewer();
        }
    };

    const handlePopState = () => {
        if (isOpen) {
            closeImageViewer();
        }
    };

    useEffect(() => {
        if (isOpen) {
            // Add keyboard event listener
            window.addEventListener('keydown', handleKeyDown);
            // Add popstate event listener for back button
            window.addEventListener('popstate', handlePopState);
            // Push a new state to the history stack
            window.history.pushState({ imageViewer: true }, '');
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('popstate', handlePopState);
            // Remove the state we added when closing
            if (isOpen) {
                window.history.back();
            }
        };
    }, [isOpen]);

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setScale(prev => Math.max(1, Math.min(3, prev + delta)));
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setPosition({
            x: e.clientX - startPos.x,
            y: e.clientY - startPos.y
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (images: string[]) => {
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) {
                // Swipe left
                setCurrentIndex(prev => (prev + 1) % images.length);
            } else {
                // Swipe right
                setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
            }
        }
    };

    const ImageViewer = ({ images, onClose }: ImageViewerProps) => {
        return (
            <div
                className="fixed inset-0  flex items-center justify-center z-[1550] bg-[rgba(0,0,0,0.5)] backdrop-blur-sm"
                onWheel={handleWheel}
                onMouseUp={handleMouseUp}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-2xl z-999"
                >
                    ×
                </button>

                <div className="absolute top-4 left-4 text-white z-50">
                    {currentIndex + 1} / {images.length}
                </div>

                <div className="relative w-full h-full flex items-center justify-center">
                    <img
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        className="max-w-full max-h-full object-contain"
                        style={{
                            transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                            cursor: isDragging ? 'grabbing' : 'grab'
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={() => handleTouchEnd(images)}
                    />
                </div>
                <button
                    onClick={() => setCurrentIndex(prev => (prev - 1 + images.length) % images.length)}
                    className="absolute left-4 text-white text-2xl z-50"
                >
                    ←
                </button>
                <button
                    onClick={() => setCurrentIndex(prev => (prev + 1) % images.length)}
                    className="absolute right-4 text-white text-2xl z-50"
                >
                    →
                </button>
            </div>
        );
    };

    return {
        isOpen,
        openImageViewer,
        closeImageViewer,
        ImageViewer,
    };
};

export default useImageView;
