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

const getButton = document.querySelector('#getdogs')
const container = document.querySelector('.dogs')

getButton.addEventListener('click', () => {
  axios.get(`https://dog.ceo/api/breed/husky/images/random/12`)
  .then((res) => {
    // network request finished
    console.log(res.data.message)
    const data = res.data.message;
    data.forEach(dog => {
      container.appendChild(DogCard(dog, 'husky'));
    });
  })
  .catch((error) => {
    console.log('Network request was unsuccessful', error)
  })
})

