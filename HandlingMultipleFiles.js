function download (url)
{
    return new Promise(function (resolve,reject)
    {
        
        if(!url.startsWith('http'))
        {
            reject(new Error ("File does not start with http"))
        }
        else
        {
            console.log("Downloading file from the path: "+url)
            setTimeout(function()
            {
                filename=url.split("//")[2]
                console.log("File has been donloaded and saved as: "+filename)
                resolve(filename)
            },3000)
        }
    })
}

function resize(filename)
{
    return new Promise(function(resolve,reject)
    {
        if(!filename.endsWith('jpg'))
        {
            reject(new Error("File is not jpg"))
        }
        else
        {
            console.log("Resizing the file: "+filename)
            setTimeout(function()
            {
                resizedFileName=filename.split(".")[0]+"-resized.jpg"
                console.log("The file has been resized!! resized file name is: "+resizedFileName)
                resolve(resizedFileName)
            },3000)
        }
    })
}

function upload(resizedFileName)
{
    return new Promise(function(resolve,reject)
    {
        console.log("Uploading file "+resizedFileName+" on internet")
        setTimeout(function()
        {
            uploadurl="http://upload.com//"+resizedFileName
            resolve(uploadurl)
        },3000)
    })
}

function uploaded(uploadurl)
{
    return new Promise(function(resolve,reject)
    {
        console.log("File uploaded to: "+uploadurl)
        resolve("Task Completed")
    })
}

Promise.all([download("http://project//image.jpg"),
download("http://project//image1.jpg"),
download("http://project//image2.jpg"),
download("http://project//image3.jpg"),
download("http://project//image4.jpg"),
download("http://project//image5.jpg")
])
    .then(function(downloadvalues)
    {
        return Promise.all(downloadvalues.map(resize))
    })
    .then(function(resizedvalues)
    {
        return Promise.all(resizedvalues.map(upload))
    })
    .then(function(uploadvalues)
    {
        return  Promise.all(uploadvalues.map(uploaded))
    })
    .then(function(endmsg)
    {
        console.log(endmsg)
    })
    .catch(function(msg)
    {
        console.error(msg);
    })

