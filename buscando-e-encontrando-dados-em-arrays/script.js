/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        1- Contar o número de categorias e o número de livros em cada categoria
        2- Contar o número de autores
        3- Mostrar livros do autor Auguto Cury
        4- Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
      category: "Riqueza",
      books: [
          {
              title: "Os segredos da mente milionária",
              author: "T. Harv Eker",
          },
          {
              title: "O homem mais rico da Babilônia",
              author: "George S. Clason",
          },
          {
              title: "Pai rico, pai pobre",
              author: "Robert T. Kiyosaki e Sharon L. Lechter",
          },
      ],
  },
  {
      category: "Inteligência Emocional",
      books: [
          {
              title: "Você é Insubstituível",
              author: "Augusto Cury",
          },
          {
              title: "Ansiedade – Como enfrentar o mal do século",
              author: "Augusto Cury",
          },
          {
              title: "Os 7 hábitos das pessoas altamente eficazes",
              author: "Stephen R. Covey",
          },
      ],
  },
];

//1- Contar o número de categorias e o número de livros em cada categoria

const total_category = booksByCategory.length

console.log(`O total de categorias nesse array é de ${total_category}`)
for(let category of booksByCategory){
  console.log(`O total de livros da categoria: ${category.category}`)
  console.log(category.books.length)
}

//2- Contar o número de autores

function countAuthors(){
  //Cria-se um array authors vazio, que será alimentado através de um looping

  let authors = [];

  for(let category of booksByCategory){
    for(let book of category.books){
      //Se essa expressão retornar -1, porque não foi achado o nome do autor dentro do Array. Então o nome será adicionado no array.
      if(authors.indexOf(book.author) == -1){
        authors.push(book.author)
      }
    }
  }
  console.log(`O total de autores são: ${authors.length}`)
}

countAuthors()

//3- Mostrar livros do Augusto Cury

function booksOfAugustoCury(){


  let books = [];

  for(let category of booksByCategory){
    for(let book of category.books){
   
      if(book.author === 'Augusto Cury'){
        books.push(book.title)
      }
    }
  }
  console.log("Livros do autor", books)
}

booksOfAugustoCury()

//4- Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

function booksOfAuthor(author){


  let books = [];

  for(let category of booksByCategory){
    for(let book of category.books){
   
      if(book.author === author){
        books.push(book.title)
      }
    }
  }
  console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury')
booksOfAuthor("George S. Clason")


