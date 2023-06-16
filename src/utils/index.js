export const cleanObject = (obj) => {
    const filteredEntries = Object.entries(obj).filter(([key, value]) => value !== undefined && value !== '')
    Object.fromEntries(filteredEntries)
}