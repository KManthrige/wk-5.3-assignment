console.log('***** Music Collection *****')

let collection = []


function addToCollection(title, songs, artist, yearPublished) {
    let myCollection = {
        title,
        songs,
        artist,
        yearPublished
    }
    collection.push(myCollection)
    return collection

}

addToCollection(
    'esm',
    [{ name: 'song1', duration: 3.09 }, { name: 'song2', duration: 5.23 }],
    'mc',
    2023
)
addToCollection(
    'hmbomt',
    [{ name: 'track1', duration: 2.01 }, { name: 'track2', duration: 1.02 }],
    'bs',
    1998
)

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
    return artist
}//end findByArtist function

findByArtist('mco')

console.log('Find by artist:', songsByArtist)


let searchItem = {
    artist: '',
    songs: '',
    year: 2007
}
let foundItems = []

function search(criteria) {
    if (criteria.artist === '' && criteria.songs === '' && criteria.year === null) {
        console.log('first if statement')
        return collection
    }//end if checking is there is any search criteria in the object
    if (criteria.songs) {
        console.log('second if statement')
        for (i = 0; i < collection.length; i++) {
            for (t = 0; t < collection[i].songs.length; t++) {
                if (collection[i].songs[t].name === criteria.songs) {
                    foundItems.push(collection[i])
                }//end if statement looking for criteria.songs
            }//end for loop 2
        }//end for loop 1
    }
    if ((criteria.artist || criteria.year) && criteria.songs === '') {
        console.log('third if statement')
        for (p = 0; p < collection.length; p++) {
            if (collection[p].artist === criteria.artist || collection[p].yearPublished === criteria.year) {
                foundItems.push(collection[p])
            }
        }//end for loop for artist and year
    }//end if for artist and year

    return foundItems
}//end function search

console.log(search(searchItem))


//add an array of tracks to collection{}. the tracks[] should have tracks[ name, duration]. 
//update the functions to support tracks
//update addToCollection 