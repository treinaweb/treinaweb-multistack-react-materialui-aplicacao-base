import { useEffect, useState } from "react";

export default function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    const goOnline = () => setIsOnline(true)
    const goOffLine = () => setIsOnline(false)

    useEffect(() => {
        window.addEventListener('online', goOnline)
        window.addEventListener('offline', goOffLine)

        return () => {
            window.removeEventListener('online', goOnline)
            window.removeEventListener('offline', goOffLine)
        }
    }, [])

    return isOnline
}