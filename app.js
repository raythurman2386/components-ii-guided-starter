// Your Javascript goes in this file.
// It is attached to index.html via the <script> tag at the end of body.
function DogCard(imageUrl, titleText){
  const card = document.createElement('div');
  card.classList.add('dog-card');

  const image = document.createElement('img')
  image.classList.add('dog-image')
  image.src = imageUrl

  card.appendChild(image)

  const title = document.createElement('h3')
  title.textContent = titleText

  card.appendChild(title)

  card.addEventListener('click', (e)=>{
    event.currentTarget.classList.toggle('selected')
  })

  return card
}

const dog1 = DogCard("https://images.dog.ceo/breeds/husky/20180924_193829.jpg", 'Husky')
const dog2 = DogCard("https://images.dog.ceo/breeds/husky/n02110185_1066.jpg", 'Husky')
const dog3 = DogCard("https://images.dog.ceo/breeds/husky/n02110185_2736.jpg", 'Husky')

const container = document.querySelector('.dogs')

container.appendChild(dog1)
container.appendChild(dog2)
container.appendChild(dog3)