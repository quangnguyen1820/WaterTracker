export const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export const convertMinutesToSeconds = (minutes: number): number => {
    return minutes * 60;
};

export const convertSecondsToMinutes = (seconds: number): number => {
    return seconds / 60;
};