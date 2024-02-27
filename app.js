

const getRoverImage = async() => {
    let response = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity")
    let responseData = await response.json()
    console.log(responseData)


}

getRoverImage()