function download(Afterdownloaded)
{
    path="http://github.com/upendra28sh/Algorithms"
    console.log("The File at Path "+path+" is being downloaded")
    setTimeout(() => 
    {
        save="c:\\donwloads\\"
        console.log("File donloaded to path : "+save)
        Afterdownloaded()
    }, 2000);
}

let otherTask=function()
{
    return new Promise (function (resolve, reject)
    {
        download(resolve)
    })
}

otherTask().then(function ()
{
    setTimeout(() =>
    {
        console.log("file ready for use")
    },2000)

})