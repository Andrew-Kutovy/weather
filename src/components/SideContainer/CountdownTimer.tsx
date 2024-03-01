import React, {useEffect, useRef, useState} from 'react';

const CountdownTimer = ({ startDate }: { startDate: string }) => {
    const [countdown, setCountdown] = useState<{ days: number, hours: number, minutes: number, seconds: number } | undefined>()
    const countdownIntervalRef = useRef<NodeJS.Timeout>();


    useEffect(() => {
        const targetDate = new Date(startDate).getTime();

        const updateCountdown = () => {
            const currentTime = new Date().getTime();
            const difference = targetDate - currentTime;

            if (difference <= 0) {
                clearInterval(countdownIntervalRef.current);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setCountdown({ days, hours, minutes, seconds });
            }
        };

        updateCountdown(); // Update countdown immediately
        const countdownInterval = setInterval(updateCountdown, 1000);

        return () => clearInterval(countdownInterval);
    }, [startDate]);

    return (
        <div>
            {countdown && (
                <p>Countdown: {countdown.days} days, {countdown.hours} hours, {countdown.minutes} minutes, {countdown.seconds} seconds</p>
            )}
        </div>
    );
};

export default CountdownTimer;
