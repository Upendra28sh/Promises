function download(url)
{
    return new Promise(function(resolve,reject)
    {
        if(!url.startsWith('http'))
        {
            reject(new Error("Url does not start with http"))
        }
        else
        {
            console.log("Downloading file from "+url)
            setTimeout(() => 
            {
                downloadPath="c:\\Downloads"
                console.log("File Downloaded Successfully at "+downloadPath)
                resolve(downloadPath)
            }, 3000);
        }
    })
}

let getfile=download("http://github.com/upendra28sh/algorithms")

getfile.catch(function(msg)
{
    console.error(msg)
})

setTimeout(() => 
{
    getfile.then(function(downloadPath)
    {
        console.log("File can be read now")
    })    
}, 3000);