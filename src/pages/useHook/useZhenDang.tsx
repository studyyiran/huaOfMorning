import {useEffect, useState} from "react";

export const useZhenDang = () => {
    const [timer, setTimer] = useState(0);

    const interval = 1000;

    useEffect(() => {
        window.setInterval(() => {
            setTimer((time) => {
                return time + 1;
            });
        }, interval);
    }, []);
    return timer
}