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

function showCollection() {
    console.log('number of items in the array', collection.length)
    for (i = 0; i < collection.length; i++) {
        console.log(collection[i].title, 'by', collection[i].artist + ', published in', collection[i].yearPublished)
    }
}

showCollection()

let songsByArtist = []

function findByArtist(artist) {
    for (i = 0; i < collection.length; i++) {
        if (collection[i].artist === artist) {
            console.log('in if:', songsByArtist.push(collection[i]))
        }
    }//end for loop
    return songsByArtist
}//end findByArtist function

findByArtist('sg')

console.log('Find by artist:', songsByArtist)

function search(){
 
}