﻿var myApp = angular.module('myApp',[]);
myApp.controller('MyController', function($scope) {
  $scope.work = [
    {
        "order"	  : ""
	"href"    : "http://www.gutenberg.org/ebooks/1342",
        "cover"   : "https://covers.openlibrary.org/w/id/6303595-L.jpg",
        "works"   : "Pride and Prejudice",
        "name"    : "Jane Austen",
        "download": "(872)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/46",
        "cover"   : "https://covers.openlibrary.org/w/id/1150454-L.jpg",
        "works"   : "A Christmas Carol in Prose; Being a Ghost Story of Christmas",
        "name"    : "Charles Dickens",
        "download": "(796)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/84",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL1110841M-L.jpg",
        "works"   : "Frankenstein; Or, The Modern Prometheus",
        "name"    : "Mary Wollstonecraft Shelley",
        "download": "(585)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/76",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL11641603M-L.jpg",
        "works"   : "Adventures of Huckleberry Finn",
        "name"    : "Mark Twain",
        "download": "(514)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/844",
        "cover"   : "https://covers.openlibrary.org/w/id/7240791-L.jpg",
        "works"   : "The Importance of Being Earnest: A Trivial Comedy for Serious People",
        "name"    : "Oscar Wilde",
        "download": "(497)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/53638",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL8843190M-L.jpg",
        "works"   : "The Gentle Art of Faking",
        "name"    : "Riccardo Nobili",
        "download": "(485)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/11",
        "cover"   : "https://covers.openlibrary.org/w/id/7422120-L.jpg",
        "works"   : "Alices Adventures in Wonderland",
        "name"    : "Lewis Carroll",
        "download": "(472)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/2542",
        "cover"   : "https://covers.openlibrary.org/w/id/261331-L.jpg",
        "works"   : "A Dolls House : a play",
        "name"    : "Henrik Ibsen",
        "download": "(466)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1400",
        "cover"   : "https://covers.openlibrary.org/w/id/7144441-L.jpg",
        "works"   : "Great Expectations",
        "name"    : "Charles Dickens",
        "download": "(444)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/98",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL1006235M-L.jpg",
        "works"   : "A Tale of Two Cities",
        "name"    : "Charles Dickens",
        "download": "(432)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/74",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL7681343M-L.jpg",
        "works"   : "The Adventures of Tom Sawyer",
        "name"    : "Mark Twain",
        "download": "(421)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/53641",
        "cover"   : "https://openlibrary.org/images/icons/avatar_book-sm.png",
        "works"   : "The Black Box",
        "name"    : "W. Bourne Cooke",
        "download": "(419)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1232",
        "cover"   : "https://covers.openlibrary.org/w/id/996551-L.jpg",
        "works"   : "Il Principe. English",
        "name"    : "Niccolò Machiavelli",
        "download": "(418)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1661",
        "cover"   : "https://covers.openlibrary.org/w/id/368439-L.jpg",
        "works"   : "The Adventures of Sherlock Holmes",
        "name"    : "Arthur Conan Doyle",
        "download": "(376)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/345",
        "cover"   : "https://covers.openlibrary.org/w/id/1861101-L.jpg",
        "works"   : "Dracula",
        "name"    : "Bram Stoker",
        "download": "(355)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/160",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL1735481M-L.jpg",
        "works"   : "The Awakening, and Selected Short Stories",
        "name"    : "Kate Chopin",
        "download": "(319)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/5200",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL7345820M-L.jpg",
        "works"   : "Metamorphosis",
        "name"    : "Franz Kafka",
        "download": "(318)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/30254",
        "cover"   : "https://covers.openlibrary.org/b/id/6456255-L.jpg",
        "works"   : "The Romance of Lust: A Classic Victorian erotic novel",
        "name"    : "Anonymous",
        "download": "(307)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1952",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL988520M-L.jpg",
        "works"   : "The Yellow Wallpaper",
        "name"    : "Charlotte Perkins Gilman",
        "download": "(292)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/2600",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL8753153M-L.jpg",
        "works"   : "War and Peace",
        "name"    : "Leo Tolstoy",
        "download": "(287)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/174",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL12493236M-L.jpg",
        "works"   : "The Picture of Dorian Gray",
        "name"    : "Oscar Wilde",
        "download": "(285)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/2701",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL8870133M-L.jpg",
        "works"   : "Moby Dick; Or, The Whale",
        "name"    : "Herman Melville",
        "download": "(283)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/4300",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL24593106M-L.jpg",
        "works"   : "Ulysses",
        "name"    : "James Joyce",
        "download": "(281)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1260",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL8772683M-L.jpg",
        "works"   : "Jane Eyre: An Autobiography",
        "name"    : "Charlotte Brontë",
        "download": "(275)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/16328",
        "cover"   : "https://covers.openlibrary.org/w/id/248248-L.jpg",
        "works"   : "Beowulf",
        "name"    : "J. Lesslie Hall",
        "download": "(274)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/42",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL7820438M-L.jpg",
        "works"   : "The Strange Case of Dr. Jekyll and Mr. Hyde",
        "name"    : "Robert Louis Stevenson",
        "download": "(263)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/3207",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL3658304M-L.jpg",
        "works"   : "Leviathan",
        "name"    : "Thomas Hobbes",
        "download": "(256)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/2591",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL12049086M-L.jpg",
        "works"   : "Grimms Fairy Tales",
        "name"    : "Jacob Grimm and Wilhelm Grimm",
        "download": "(246)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/27827",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL9245219M-L.jpg",
        "works"   : "The Kama Sutra of Vatsyayana",
        "name"    : "Vatsyayana",
        "download": "(237)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/158",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL13233922M-L.jpg",
        "works"   : "Emma",
        "name"    : "Jane Austen",
        "download": "(236)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/23",
        "cover"   : "https://covers.openlibrary.org/w/id/1875265-L.jpg",
        "works"   : "Narrative of the Life of Frederick Douglass, an American Slave",
        "name"    : "Frederick Douglass",
        "download": "(230)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/5740",
        "cover"   : "https://covers.openlibrary.org/b/id/4705715-L.jpg",
        "works"   : "Tractatus Logico-Philosophicus",
        "name"    : "Ludwig Wittgenstein",
        "download": "(226)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/2500",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL7820212M-L.jpg",
        "works"   : "Siddhartha",
        "name"    : "Hermann Hesse",
        "download": "(222)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/53639",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL7179713M-L.jpg",
        "works"  : "Last Words on Evolution",
        "name"    : "Ernst Haeckel",
        "download": "(213)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1080",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL5694185M-L.jpg",
        "works"   : "A Modest Proposal",
        "name"    : "Jonathan Swift",
        "download": "(212)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/53642",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL10585314M-L.jpg",
        "works"   : "Two Mothers",
        "name"    : "John Gneisenau Neihardt",
        "download": "(209)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/53643",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL6525699M-L.jpg",
        "works"   : "Two Voyages to New South Wales and Van Diemens Land",
        "name"    : "Thomas H. Reid",
        "download": "(205)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/53644",
        "cover"   : "https://openlibrary.org/images/icons/avatar_book-sm.png",
        "works"   : "Historical Characters in the Reign of Queen Anne",
        "name"    : "Mrs. M. O. W. Oliphant",
        "download": "(196)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1184",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL24518233M-L.jpg",
        "works"   : "The Count of Monte Cristo, Illustrated",
        "name"    : "Alexandre Dumas",
        "download": "(188)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/135",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL8870155M-L.jpg",
        "works"   : "Les Misérables",
        "name"    : "Victor Hugo",
        "download": "(186)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/120",
        "cover"   : "https://covers.openlibrary.org/b/id/5002394-L.jpg",
        "works"   : "Treasure Island",
        "name"    : "Robert Louis Stevenson",
        "download": "(183)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/219",
        "cover"   : "https://covers.openlibrary.org/w/id/6287123-L.jpg",
        "works"   : "Heart of Darkness",
        "name"    : "Joseph Conrad",
        "download": "(179)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/2814",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL1769546M-L.jpg",
        "works"   : "Dubliners",
        "name"    : "James Joyce",
        "download": "(178)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/768",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL24310823M-L.jpg",
        "works"   : "Wuthering Heights",
        "name"    : "Emily Brontë",
        "download": "(169)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/2554",
        "cover"   : "https://covers.openlibrary.org/w/id/417683-L.jpg",
        "works"   : "Crime and Punishment Crime and Punishment",
        "name"    : "Fyodor Dostoyevsky",
        "download": "(167)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/16",
        "cover"   : "https://covers.openlibrary.org/w/id/370624-L.jpg",
        "works"   : "Peter Pan",
        "name"    : "J. M.  Barrie",
        "download": "(166)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/33",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL24369429M-L.jpg",
        "works"   : "The Scarlet Letter",
        "name"    : "Nathaniel Hawthorne",
        "download": "(165)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/244",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL9160962M-L.jpg",
        "works"   : "A Study in Scarlet",
        "name"    : "Arthur Conan Doyle",
        "download": "(163)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/35",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL12086748M-L.jpg",
        "works"   : "The Time Machine",
        "name"    : "H. G.  Wells",
        "download": "(161)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/100",
        "cover"   : "https://covers.openlibrary.org/w/id/4651594-L.jpg",
        "works"   : "The Complete Works of William Shakespeare",
        "name"    : "William Shakespeare",
        "download": "(161)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/20203",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL24573925M-L.jpg",
        "works"   : "Autobiography of Benjamin Franklin",
        "name"    : "Benjamin Franklin",
        "download": "(159)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/53637",
        "cover"   : "https://openlibrary.org/images/icons/avatar_book-sm.png",
        "works"   : "Marjorie Dean Macy",
        "name"    : "Josephine Chase",
        "download": "(157)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1112",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL12668152M-L.jpg",
        "works"   : "The Tragedy of Romeo and Juliet",
        "name"    : "William Shakespeare",
        "download": "(155)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/3296",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL7844722M-L.jpg",
        "works"   : "The Confessions of St. Augustine",
        "name"    : "Bishop of Hippo Saint Augustine",
        "download": "(151)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/730",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL24333158M-L.jpg",
        "works"   : "Oliver Twist",
        "name"    : "Charles Dickens",
        "download": "(147)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1497",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL51425M-L.jpg",
        "works"   : "The Republic",
        "name"    : "Plato",
        "download": "(146)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/19337",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL7157657M-L.jpg",
        "works"   : "A Christmas Carol",
        "name"    : "Charles Dickens",
        "download": "(143)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/28054",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL25226237M-L.jpg",
        "works"   : "The Brothers Karamazov",
        "name"    : "Fyodor Dostoyevsky",
        "download": "(142)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/203",
        "cover"   : "https://openlibrary.org/images/icons/avatar_book-sm.png",
        "works"   : "Uncle Toms Cabin",
        "name"    : "Harriet Beecher Stowe",
        "download": "(139)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/53636",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL23420963M-L.jpg",
        "works"   : "The Martyrdom of Belgium",
        "name"    : "Belgium Commission",
        "download": "(138)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/3600",
        "cover"   : "https://covers.openlibrary.org/w/id/6293692-L.jpg",
        "works"   : "Essays of Michel de Montaigne — Complete",
        "name"    : "Michel de Montaigne",
        "download": "(136)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1322",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL25228740M-L.jpg",
        "works"   : "Leaves of Grass",
        "name"    : "Walt Whitman",
        "download": "(134)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/161",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL8663769M-L.jpg",
        "works"   : "Sense and Sensibility",
        "name"    : "Jane Austen",
        "download": "(131)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/147",
        "cover"   : "https://archive.org/download/commonsensewebst00pain/page/cover_w60_h60.jpg",
        "works"   : "Common Sense",
        "name"    : "Thomas Paine",
        "download": "(130)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/14264",
        "cover"   : "https://openlibrary.org/images/icons/avatar_book-sm.png",
        "works"   : "The Practice and Science of Drawing",
        "name"    : "Harold Speed",
        "download": "(130)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/829",
        "cover"   : "https://covers.openlibrary.org/w/id/6995053-L.jpg",
        "works"   : "Gullivers Travels into Several Remote Nations of the World",
        "name"    : "Jonathan Swift",
        "download": "(130)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/236",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL13896784M-L.jpg",
        "works"   : "The Jungle Book",
        "name"    : "Rudyard Kipling",
        "download": "(130)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/996",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL9160812M-L.jpg",
        "works"   : "Don Quixote",
        "name"    : "Miguel de Cervantes Saavedra",
        "download": "(127)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/514",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL1093073M-L.jpg",
        "works"   : "Little Women",
        "name"    : "Louisa May Alcott",
        "download": "(126)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/53645",
        "cover"   : "https://openlibrary.org/images/icons/avatar_book-sm.png",
        "works"   : "Heart and Cross",
        "name"    : "Margaret  Oliphant",
        "download": "(122)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/55",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL7511248M-L.jpg",
        "works"   : "The Wonderful Wizard of Oz",
        "name"    : "L. Frank  Baum",
        "download": "(120)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1251",
        "cover"   : "https://covers.openlibrary.org/w/id/295710-L.jpg",
        "works"   : "Le Morte d Arthur: Volume 1",
        "name"    : "Sir Thomas Malory",
        "download": "(120)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/3825",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL9623199M-L.jpg",
        "works"   : "Pygmalion",
        "name"    : "Bernard Shaw",
        "download": "(120)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/4517",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL24333125M-L.jpg",
        "works"   : "Ethan Frome",
        "name"    : "Edith Wharton",
        "download": "(119)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/34901",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL7354759M-L.jpg",
        "works"   : "On Liberty",
        "name"    : "John Stuart Mill",
        "download": "(119)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/766",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL9160896M-L.jpg",
        "works"   : "David Copperfield",
        "name"    : "Charles Dickens",
        "download": "(116)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/779",
        "cover"   : "https://covers.openlibrary.org/w/id/3976241-L.jpg",
        "works"   : "The Tragical History of Doctor Faustus",
        "name"    : "Christopher Marlowe",
        "download": "(116)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/2680",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL7988568M-L.jpg",
        "works"   : "Meditations",
        "name"    : "Emperor of Rome Marcus Aurelius",
        "download": "(115)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/33283",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL4106318M-L.jpg",
        "works"   : "Calculus Made Easy",
        "name"    : "Silvanus P.  Thompson",
        "download": "(112)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1399",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL19804243M-L.jpg",
        "works"   : "Anna Karenina",
        "name"    : "Leo Tolstoy",
        "download": "(110)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1524",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL7358348M-L.jpg",
        "works"   : "Hamlet, Prince of Denmark",
        "name"    : "William Shakespeare",
        "download": "(109)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/22465",
        "cover"   : "https://covers.openlibrary.org/w/id/7104084-L.jpg",
        "works"   : "A Christmas Carol",
        "name"    : "Charles Dickens",
        "download": "(109)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/2147",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL7699160M-L.jpg",
        "works"   : "The Works of Edgar Allan Poe — Volume 1",
        "name"    : "Edgar Allan Poe",
        "download": "(108)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/2852",
        "cover"   : "https://covers.openlibrary.org/w/id/7217737-L.jpg",
        "works"   : "The Hound of the Baskervilles",
        "name"    : "Arthur Conan Doyle",
        "download": "(107)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/8800",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL11859292M-L.jpg",
        "works"   : "The Divine Comedy",
        "name"    : "Dante, Illustrated",
        "name"    : "Dante Alighieri",
        "download": "(106)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/852",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL9742155M-L.jpg",
        "works"   : "Democracy and Education: An Introduction to the Philosophy of Education",
        "name"    : "John Dewey",
        "download": "(106)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1404",
        "cover"   : "https://covers.openlibrary.org/b/id/2292456-L.jpg",
        "works"   : "The Federalist Papers",
        "name"    : "Alexander Hamilton, John Jay, James Madison",
        "download": "(105)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/7370",
        "cover"   : "https://archive.org/download/cranberriesnatio3641port/page/cover_w60_h60.jpg",
        "works"   : "Second Treatise of Government",
        "name"    : "John Locke",
        "download": "(105)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/4363",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL24320358M-L.jpg",
        "works"   : "Beyond Good and Evil",
        "name"    : "Friedrich Wilhelm Nietzsche",
        "download": "(104)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/140",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL3942088M-L.jpg",
        "works"   : "The Jungle",
        "name"    : "Upton Sinclair",
        "download": "(102)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/2148",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL7699160M-L.jpg",
        "works"   : "The Works of Edgar Allan Poe — Volume 2",
        "name"    : "Edgar Allan Poe",
        "download": "(101)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/53625",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL14041938M-L.jpg",
        "works"   : "Shakespeare and His Times [Vol. I. of II.]",
        "name"    : "Nathan Drake",
        "download": "(101)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/6130",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL6071330M-L.jpg",
        "works"   : "The Iliad",
        "name"    : "Homer",
        "download": "(100)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/526",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL8978596M-L.jpg",
        "works"   : "Heart of Darkness",
        "name"    : "Joseph Conrad",
        "download": "(99)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/17135",
        "cover"   : "https://covers.openlibrary.org/w/id/7515577-L.jpg",
        "works"   : "Twas the Night before Christmas: A Visit from St. Nicholas",
        "name"    : "Clement Clarke Moore",
        "download": "(98)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/205",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL9161222M-L.jpg",
        "works"   : "Walden, and On The Duty Of Civil Disobedience",
        "name"    : "Henry David Thoreau",
        "download": "(97)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/1155",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL24271799M-L.jpg",
        "works"   : "The Secret Adversary",
        "name"    : "Agatha Christie",
        "download": "(97)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/45",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL25993548M-L.jpg",
        "works"   : "Anne of Green Gables",
        "name"    : "L. M.  Montgomery",
        "download": "(96)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/105",
        "cover"   : "https://covers.openlibrary.org/b/olid/OL3702865M-L.jpg",
        "works"   : "Persuasion",
        "name"    : "Jane Austen",
        "download": "(95)"
    },
    {
        "href"    : "http://www.gutenberg.org/ebooks/53624",
        "cover"   : "https://openlibrary.org/images/icons/avatar_book-sm.png",
        "works"   : "Art Studies from Nature, as applied to Design",
        "name"    : "Glaisher and Hulme and Hunt and Mackie",
        "download": "(94)"
    }
  ];


});