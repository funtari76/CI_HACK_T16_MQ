// Questions array 

const QUESTIONS_ARRAY = {
  // Array for the sporst quiz
  'rock': [
           {
                question: 'Which British rock band pioneered the use of the light show?',
                choice1: 'Led Zeppelin',
                choice2: 'the Beatles',
                choice3: 'Pink Floyd',
                choice4: 'Lynyrd Skynyrd',
                correctAnswer: 3
              },
              {
                question: 'This British rock group debuted with their album "Mr. Fantasy" (1967):?',
                choice1: 'Derek and the Dominos',
                choice2: 'The Blur',
                choice3: 'Adam and the Ants',
                choice4: 'Traffic',
                correctAnswer: 4
              },
              {
                question: 'Which rock band was formed in 1985 by Rose and Stradlin?',
                choice1: 'Guns & Roses',
                choice2: 'Aerosmith',
                choice3: 'Nirvana',
                choice4: 'The Eagles',
                correctAnswer: 1
              },
                {
                question: 'Which instrument did Jimi Hendrix play?',
                choice1: 'Piano',
                choice2: 'Drum',
                choice3: 'Electric Guitar',
                choice4: 'Saxophone',
                correctAnswer: 3
              },
                {
                question: 'Which funk style originated in Washington in the 1970s?',
                choice1: 'G-funk',
                choice2: 'Go-go',
                choice3: 'Afrobeat',
                choice4: 'Avant-funk',
                correctAnswer: 2
              },
              {
                question: 'The famous British rock group Led Zeppelin was initially known as:',
                choice1: 'The Black Album',
                choice2: 'Acca Dacca',
                choice3: 'Hollywood Rose',
                choice4: 'The New Yardbirds',
                correctAnswer: 4
              },
              {
                question: 'Which member of the Beatles was known as “the quiet Beatle"?',
                choice1: 'George Harrison',
                choice2: 'John Lennon',
                choice3: 'Ringo Starr',
                choice4: 'Pete Best',
                correctAnswer: 1
              },
              {
                question: 'What are the instruments in a classic three-piece rock band?',
                choice1: 'Guitar, violin, drums',
                choice2: 'Guitar, bass, trumpet',
                choice3: 'Guitar, bass, drums',
                choice4: 'Guitar, organ, drums',
                correctAnswer: 3
              },
              {
                question: 'The song "Born in the U.S.A." (1984) is associated with which singer?',
                choice1: 'Clarence Clemons',
                choice2: 'Bruce Springsteen',
                choice3: 'Steven Van Zandt',
                choice4: 'Billy Joel',
                correctAnswer: 2
              },
              {
                question: 'In which year did Psychedelic rock emerge?',
                choice1: '1971',
                choice2: '1975',
                choice3: '1963',
                choice4: '1966',
                correctAnswer: 4
              } 
  ],
  'jazz': [
           {
                question: 'Which city is considered to be the birthplace of jazz music?',
                choice1: 'Chicago',
                choice2: 'Detroit',
                choice3: 'New Orleans',
                choice4: 'Los Angeles',
                correctAnswer: 3
              },
              {
                question: 'When was the "Jazz Age"?',
                choice1: '1910s',
                choice2: '1920s',
                choice3: '1950s',
                choice4: '1960s',
                correctAnswer: 2
              },
              {
                question: 'What was Satchmo\'s real name?',
                choice1: 'Frank Sinatra',
                choice2: 'Carlie Parker',
                choice3: 'Nat King Cole',
                choice4: 'Louis Armstrong',
                correctAnswer: 4
              },
              {
                question: 'Who performed on the first jazz recording in 1917?',
                choice1: 'The Original Dixieland Jass Band',
                choice2: 'Jelly Roll Morton',
                choice3: 'King Oliver\'s Creole Jazz Band',
                choice4: 'Bessie Smith',
                correctAnswer: 1,
              },
              {
                question: 'Known as "the Divine One," who won an amateur singing contest as a teenager and quickly became a leading jazz vocalist?',
                choice1: 'Billie Holiday',
                choice2: 'Mamie Smith',
                choice3: 'Sarah Vaughan',
                choice4: 'Diana Krall',
                correctAnswer: 3,
              },
              {
                question: 'When is International Jazz Day celebrated?',
                choice1: 'August 28th',
                choice2: 'April 30th',
                choice3: 'January 17th',
                choice4: 'October 1st',
                correctAnswer: 2,
              },
              {
                question: 'Which instrument is John Coltrane most associated with?',
                choice1: 'Drums',
                choice2: 'Flute',
                choice3: 'Piano',
                choice4: 'Saxophone',
                correctAnswer: 4,
              },
              {
                question: 'Who joins Ella Fitzgerald on the track "Cheek to Cheek"?',
                choice1: 'Duke Ellington',
                choice2: 'Dizzy Gillespie',
                choice3: 'Nat King Cole',
                choice4: 'Louis Armstrong',
                correctAnswer: 4,
              },
              {
                question: 'Which of these is NOT a Miles Davis album?',
                choice1: 'Kind of Blue',
                choice2: 'In a Silent Way',
                choice3: 'Sonny Side Up',
                choice4: 'Porgy and Bess',
                correctAnswer: 3,
              },
              {
                question: 'Considered the greatest female blues vocalist of the 1920s, who was the "Empress of the Blues?"',
                choice1: 'Bessie Smith',
                choice2: 'Gertrude Ma Rainey',
                choice3: 'Etta James',
                choice4: 'Ella Fitzgerald',
                correctAnswer: 1,
              },
  ],
  'pop': [
              {
                question: 'Which country do Abba come from?',
                choice1: 'Norway',
                choice2: 'UK',
                choice3: 'Finland',
                choice4: 'Sweden',
                correctAnswer: 4,
              },
              {
                question: 'Who sang the song "I\'m still standing"?',
                choice1: 'Elton John',
                choice2: 'Billy Joel',
                choice3: 'Paul Simon',
                choice4: 'The Beatles',
                correctAnswer: 1,
              },
              {
                question: 'Who sang "Despacito" along with Justin Bieber?',
                choice1: 'Alejandro Sanz',
                choice2: 'Enrique Iglesias',
                choice3: 'Luis Fonsi',
                choice4: 'Frank Tuma',
                correctAnswer: 3,
              },
              {
                question: 'Kelly Clarkson is the 2002 winner of which American TV show?',
                choice1: 'The X Factor',
                choice2: 'The Voice',
                choice3: 'The Masked Singer',
                choice4: 'American Idol',
                correctAnswer: 4,
              },
              {
                question: 'Which pop star played the Goblin King in the 1986 film Labyrinth?',
                choice1: 'Adam Ant',
                choice2: 'David Bowie',
                choice3: 'Boy George',
                choice4: 'Marc Bolan',
                correctAnswer: 2,
              },
              {
                question: 'What is Stefani Joanne Angelina Germanotta\s also known as?',
                choice1: 'Lizzo',
                choice2: 'Lady Gaga',
                choice3: 'Madonna',
                choice4: 'Nicki Minaj',
                correctAnswer: 2,
              },
              {
                question: 'During which song did Michael Jackson first perform the moonwalk?',
                choice1: 'Billie Jean',
                choice2: 'Bad',
                choice3: 'Thriller',
                choice4: 'Beat It',
                correctAnswer: 1,
              },
              {
                question: 'Who was the main bass player in The Beatles?',
                choice1: 'Ring Starr',
                choice2: 'John Lennon',
                choice3: 'Paul McCartney',
                choice4: 'George Harrison',
                correctAnswer: 3,
              },
              {
                question: 'Who sang the 1994 song "Zombie"?',
                choice1: 'Elastica',
                choice2: 'The Bangles',
                choice3: 'The Corrs',
                choice4: 'The Cranberries',
                correctAnswer: 4,
              },
              {
                question: 'Who sang the theme to the James Bond film "Spectre"?',
                choice1: 'Shirley Bassey',
                choice2: 'Adele',
                choice3: 'Billie Eilish',
                choice4: 'Sam Smith',
                correctAnswer: 4,
              },     
  ],
  'classical': [
              {
                question: 'What was Ludwig van Beethoven\'s final complete symphony?',
                choice1: 'Symphony No. 8',
                choice2: 'Symphony No. 9',
                choice3: 'Symphony No. 10',
                choice4: 'Symphony No. 13',
                correctAnswer: 2,
              },
              {
                question: 'What violinist was rumored to have sold his soul to the devil?',
                choice1: 'Niccolo Paganini',
                choice2: 'Itzhak Perlman',
                choice3: 'Yehudi Menuhin',
                choice4: 'George Enescu',
                correctAnswer: 1,
              },
              {
                question: 'Who composed the music for The Nutcracker?',
                choice1: 'Aaron Copeland',
                choice2: 'Igor Stravinsky',
                choice3: 'Sergei Prokofiev',
                choice4: 'Pyotr Ilyich Tchaikovsky',
                correctAnswer: 4,
              },
              {
                question: 'Bach and Handel were both _____.',
                choice1: 'Born on the same day',
                choice2: 'Married to the same woman',
                choice3: 'Blinded by the same surgeon',
                choice4: 'Convicted of plagiarising the same symphony',
                correctAnswer: 3,
              },
              {
                question: 'In which section of the orchestra does a cor anglais belong?',
                choice1: 'Brass',
                choice2: 'String',
                choice3: 'Woodwind',
                choice4: 'Percussion',
                correctAnswer: 3,
              },
              {
                question: 'The Metropolitan Opera, commonly referred to as "The Met", is based in which city?',
                choice1: 'Sydney',
                choice2: 'New York',
                choice3: 'London',
                choice4: 'Chicago',
                correctAnswer: 2,
              },
              {
                question: 'Wolfgang Amadeus Mozart was born in which city?',
                choice1: 'Vienna',
                choice2: 'Zurich',
                choice3: 'Munich',
                choice4: 'Salzburg',
                correctAnswer: 4,
              },
              {
                question: 'By what name are the kettledrums also known?',
                choice1: 'Timpani',
                choice2: 'Steel Drums',
                choice3: 'Concert Bass',
                choice4: 'Glockenspiel',
                correctAnswer: 1,
              },
              {
                question: 'What was the name of Robert Schumann\'s wife, also a celebrated classical composer?',
                choice1: 'Maria',
                choice2: 'Louisa',
                choice3: 'Clara',
                choice4: 'Margaret',
                correctAnswer: 3,
              },
              {
                question: 'Which instrument was first introduced into a symphony orchestra for Beethoven\'s Symphony No. 5 in 1808?',
                choice1: 'Saxophone',
                choice2: 'Trombone',
                choice3: 'Triangle',
                choice4: 'Piccolo',
                correctAnswer: 2,
              },           
  ],
  'edm': [
              {
                question: 'What\'s the stage name of Swedish DJ Tim Bergling?',
                choice1: 'Deadmau5',
                choice2: 'Avicii',
                choice3: 'Eekkoo',
                choice4: 'Akon',
                correctAnswer: 2,
              },
              {
                question: 'The origins of trance are usually traced to which country?',
                choice1: 'Germany',
                choice2: 'USA',
                choice3: 'UK',
                choice4: 'Japan',
                correctAnswer: 1,
              },
              {
                question: 'In which city did the EDM festival "Electric Daisy Carnival" first appear?',
                choice1: 'San Diego',
                choice2: 'Las Vegas',
                choice3: 'Salt Lake City',
                choice4: 'Los Angeles',
                correctAnswer: 4,
              },
              {
                question: 'Which EDM label was co-founded by DJ Armin van Buuren?',
                choice1: 'Armada Music',
                choice2: 'Jive Electro',
                choice3: 'Astralwerks',
                choice4: 'Future House Music',
                correctAnswer: 1,
              },
              {
                question: 'Which DJ is known for throwing a cake at an audience member at every show?',
                choice1: 'Calvin Harris',
                choice2: 'David Guetta',
                choice3: 'Steve Aoki',
                choice4: 'Skrillex',
                correctAnswer: 3,
              },
              {
                question: 'Calvin Harris teamed up with pop band Haim to create which smash hit?',
                choice1: 'Stay With Me',
                choice2: 'Summer',
                choice3: 'How Deep is Your Love',
                choice4: 'Pray to God',
                correctAnswer: 4,
              },
              {
                question: 'Which of these is not an EDM subgenre?',
                choice1: 'Grime',
                choice2: 'Gabber',
                choice3: 'Molly House',
                choice4: 'Moombahton',
                correctAnswer: 3,
              },
              {
                question: 'Dubstep music originated in which city?',
                choice1: 'Berlin',
                choice2: 'London',
                choice3: 'Detroit',
                choice4: 'Paris',
                correctAnswer: 2,
              },
              {
                question: 'Which of these acts does not include siblings?',
                choice1: 'Nervo',
                choice2: 'Orbital',
                choice3: 'Disclosure',
                choice4: 'The Chemical Brothers',
                correctAnswer: 4,
              },
              {
                question: 'Which pop music legend performed with Avicii at the Ultra Music Festival 2012',
                choice1: 'Beyonce',
                choice2: 'Britney Spears',
                choice3: 'Michael Jackson Hologram',
                choice4: 'Madonna',
                correctAnswer: 4,
              },
  ],                
};  