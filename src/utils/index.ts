import { useEffect, useState } from "react"

export const cleanObject = (obj: Object) => {
    const filteredEntries = Object.entries(obj).filter(([key, value]) => value !== undefined && value !== '')
    Object.fromEntries(filteredEntries)
}

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}


export const useDebounce = <V>(value: V, delay?: number): V => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(timeout)
    }, [value, delay])

    return debouncedValue
}