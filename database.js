const books = [
    {
        isbn: "0143130722",
        title: "ikigai",
        pubDate: "2017-08-29",
        language: "japanese",
        numPage: 208,
        author: [1,2],
        publication: [1],
        category: ["self-help","personal growth","inspirational"]
    },

    {
        isbn: "9780349434278",
        title: "twisted love",
        pubDate: "2022-05-05",
        language: "en",
        numPage: 368,
        author: [3],
        publication: [2],
        category: ["romantic fiction", "contemporary romance"]
    },
    {
        isbn: "0349434336",
        title: "twisted hate",
        pubDate: "2022-05-05",
        language: "en",
        numPage: 528,
        author: [3],
        publication: [3],
        category: ["romantic fiction", "contemporary romance"]
    }
]

const author = [
    {
        id: "1",
        name: "hector garcia",
        books: ["0143130722", "ikigai"]
    },
    {
        id: "2",
        name: "francesc miralles",
        books: ["0143130722", "ikigai"]
    },
    {
        id: "3",
        name: "ana huang",
        books: ["9780349434278","twisted love" , "0349434336" , "twisted hate"]
    }
]

const publication = [
    {
        id: "1",
        name: "penguin life",
        books: ["ikigai", "0143130722"]
    },
    {
        id: "2",
        name: "little brown book group",
        books: ["twisted love"]
    },
    {
        id: "3",
        name: "piatkus",
        books: ["twisted hate"]
    }
]

module.exports = {books, author, publication};