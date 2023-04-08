function getApiUrl() {
    const host = window.location.hostname;
    const port = process.env.REACT_APP_BACKEND_PORT
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
    return `${protocol}://${host}:${port}`
}

export { getApiUrl }