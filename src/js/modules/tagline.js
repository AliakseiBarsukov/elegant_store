function tagline() {

  const taglineClose = document.querySelector('.tagline__close');
  const tagLine = document.querySelector('.tagline');


  taglineClose.addEventListener('click', () => {
    tagLine.remove();
  })
}

export default tagline;
