// bin/seeds.js

const mongoose = require('mongoose');
const Book = require('../models/Book.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/first-project';

const books = [
  {
    title: "The Hunger Games",
    description:
      "The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the voice of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic nation of Panem in North America. The Capitol, a highly advanced metropolis, exercises political control over the rest of the nation. The Hunger Games is an annual event in which one boy and one girl aged 12–18 from each of the twelve districts surrounding the Capitol are selected by lottery to compete in a televised battle royale to the death.",
    author: "Suzanne Collins",
    rating: 10
  },
  {
    title: "Harry Potter",
    description:
      "Harry Potter is a series of seven fantasy novels written by British author, J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).",
    author: "J.K. Rowling ",
    rating: 9
  },
  {
    title: "To Kill a Mockingbird",
    description:
      "To Kill a Mockingbird takes place in the fictional town of Maycomb, Alabama, during the Great Depression. The protagonist is Jean Louise (“Scout”) Finch, an intelligent though unconventional girl who ages from six to nine years old during the course of the novel. She is raised with her brother, Jeremy Atticus (“Jem”), by their widowed father, Atticus Finch. He is a prominent lawyer who encourages his children to be empathetic and just. He notably tells them that it is “a sin to kill a mockingbird,” alluding to the fact that the birds are innocent and harmless.",
    author: "Harper Lee",
    rating: 8
  },
  {
    title: "Pride and Prejudice",
    description:
      "Pride and Prejudice, romantic novel by Jane Austen, published anonymously in three volumes in 1813. A classic of English literature, written with incisive wit and superb character delineation, it centres on the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner.",
    author: "Jane Austen",
    rating: 9
  },
  {
    title: "Twilight",
    description:
      "Twilight (stylized as twilight) is a 2005 young adult vampire-romance novel[3][4] by author Stephenie Meyer. It is the first book in the Twilight series, and introduces seventeen-year-old Isabella 'Bella' Swan, who moves from Phoenix, Arizona to Forks, Washington. She is endangered after falling in love with Edward Cullen, a 103-year-old vampire frozen in his 17-year-old body. Additional novels in the series are New Moon, Eclipse, and Breaking Dawn.",
    author: "Stephenie Meyer",
    rating: 10
  },
  {
    title: "The Book Thief",
    description:
      "The Book Thief tells the story of Liesel, a little girl who is taken to a new home because her mother can't afford to take care of her. The story is told by Death, who becomes a character you come to respect and even feel sorry for by the end. The narration puts an odd perspective on the story. Much of what Death says is very philosophical, and even beautiful.",
    author: "Markus Zusak",
    rating: 7
  },
  {
    title: "The Chronicles of Narnia",
    description:
      "The Chronicles of Narnia is a series of fantasy novels by British author C. S. Lewis. Written by Lewis, illustrated by Pauline Baynes, and originally published in London between 1950 and 1956, The Chronicles of Narnia has been adapted for radio, television, the stage, film, and computer games. The series is set in the fictional realm of Narnia, a fantasy world of magic, mythical beasts, and talking animals. It narrates the adventures of various children who play central roles in the unfolding history of the Narnian world.",
    author: "C.S. Lewis",
    rating: 8
  },
  {
    title: "Animal Farm",
    description:
      "Animal Farm is an allegorical novella by George Orwell, first published in England on 17 August 1945.[1][2] The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy. Ultimately, however, the rebellion is betrayed, and the farm ends up in a state as bad as it was before, under the dictatorship of a pig named Napoleon.",
    author: "George Orwell",
    rating: 9
  },
  {
    title: "Gone with the Wind",
    description:
      "Gone with the Wind is a novel by American writer Margaret Mitchell, first published in 1936. The story is set in Clayton County and Atlanta, both in Georgia, during the American Civil War and Reconstruction Era. It depicts the struggles of young Scarlett O'Hara, the spoiled daughter of a well-to-do plantation owner, who must use every means at her disposal to claw her way out of poverty following Sherman's destructive 'March to the Sea'. This historical novel features a coming-of-age story, with the title taken from the poem 'Non Sum Qualis eram Bonae Sub Regno Cynarae', written by Ernest Dowson.",
    author: "Margaret Mitchell",
    rating: 10
  },
  {
    title: "The Fault in Our Stars",
    description:
      "The Fault in Our Stars is a novel by John Green. It is his fourth solo novel, and sixth novel overall. It was published on January 10, 2012. The title is inspired by Act 1, Scene 2 of Shakespeare's play Julius Caesar, in which the nobleman Cassius says to Brutus: 'The fault, dear Brutus, is not in our stars, But in ourselves, that we are underlings.' The story is narrated by Hazel Grace Lancaster, a 16-year-old girl with thyroid cancer that has affected her lungs. Hazel is forced by her parents to attend a support group where she subsequently meets and falls in love with 17-year-old Augustus Waters, an ex-basketball player and amputee.",
    author: "John Green",
    rating: 8
  }
];

mongoose
  .connect(MONGO_URI)
  .then(x => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

    // Create new documents in the books collection
    return Book.create(books);
  })
  .then(booksFromDB => {
    console.log(`Created ${booksFromDB.length} books`);

    // Once the documents are created, close the DB connection
    return mongoose.connection.close();
  })
  .then(() => {
    // Once the DB connection is closed, print a message
    console.log('DB connection closed!');
  })
  .catch(err => {
    console.log(`An error occurred while creating books from the DB: ${err}`);
  });
