import { useEffect, useCallback, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
    onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleEnd = useCallback(() => {
        onComplete();
    }, [onComplete]);

    useEffect(() => {
        // Reduced timeout for better mobile experience
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
                onPlaying={() => setIsVideoLoaded(true)}
            />

            {/* Fallback spinner if video takes too long */}
            {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                    <div className="w-12 h-12 border-4 border-anvora-indigo/30 border-t-anvora-indigo rounded-full animate-spin" />
                </div>
            )}
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
