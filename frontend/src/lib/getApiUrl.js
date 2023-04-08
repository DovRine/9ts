function getApiUrl() {
    const host = window.location.hostname ?? 'club9ts.com';
    const port = process.env.REACT_APP_BACKEND_PORT ?? 5000
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
    return `${protocol}://${host}:${port}`
}

export { getApiUrl }