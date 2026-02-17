import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
    onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    const handleEnd = useCallback(() => {
        onComplete();
    }, [onComplete]);

    useEffect(() => {
        const fallbackTimeout = setTimeout(handleEnd, 8000);
        return () => clearTimeout(fallbackTimeout);
    }, [handleEnd]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.05,
                transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
            }}
        >
            <video
                src="/loading.mp4?v=1"
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
                onEnded={handleEnd}
                onError={() => {
                    console.error("Loading video failed");
                    handleEnd();
                }}
            />
            {/* Crossfade overlay — softens the cut */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 0%, hsl(243 40% 12%) 0%, hsl(235 45% 6%) 60%)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1, transition: { duration: 1.0, delay: 0.2 } }}
            />
        </motion.div>
    );
};
