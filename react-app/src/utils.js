const timeConverter = (timestamp) => {
    let timePassed = new Date(timestamp * 1000)
    return timePassed
}

export default timeConverter