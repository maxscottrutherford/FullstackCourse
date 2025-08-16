const Notification = ({ message, isError }) => {
    const className = isError ? 'error' : 'success'

    if (message === null) {
        return null
    }
    else {
        return (
            <div className={className}>
                {message}
            </div>
        )
    }
}

export default Notification