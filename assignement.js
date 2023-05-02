console.log('***** Music Collection *****')

let collection = []


function addToCollection(title, artist, yearPublished) {
    let myCollection = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
    }
    collection.push(myCollection)
    return collection
    
}

addToCollection('esm', 'mc', 2023)
addToCollection('hmbomt', 'bs', 1998)
addToCollection('ml', 'wl', 2003)
addToCollection('wb', 'mc', 2017)
addToCollection('hwwiw', 'sg', 2017)

console.log('collection:', collection)

