import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
    onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {

    useEffect(() => {
        // Fallback timeout in case video fails or stalls
        const fallbackTimeout = setTimeout(() => {
            onComplete();
        }, 8000); // 8 seconds max wait

        return () => clearTimeout(fallbackTimeout);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <video
                src="/loading.mp4?v=1"
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
                onEnded={onComplete}
                onError={() => {
                    console.error("Loading video failed to load");
                    onComplete();
                }}
            />
        </motion.div>
    );
};
