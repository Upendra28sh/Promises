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
                filename="img.jpg"
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
                resizedFileName="resize.jpg"
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
        console.log("Uploading file on internet")
        setTimeout(function()
        {
            uploadurl="http://upload.com"
            resolve(uploadurl)
        },3000)
    })
}

download("http://project//image.jpg")
    .then(resize)
        .then(upload)
            .then(function(uploadurl)
            {
                console.log("File saved to: "+uploadurl)
            })
                .catch(function(msg)
                {
                    console.error(msg);
                })

