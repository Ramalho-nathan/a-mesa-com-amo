

const Hero = () => {

    const orderNow = () => {
        window.scrollTo({
            top: 1150,
            behavior: 'smooth'
        })
    }



    return  <section
    className="hero section"
    id="home"
    style={{ backgroundImage: 'url(./media/bg-hero.jpg)'}}
  >
    <h1 className="hero__title">
      Comece Seu dia <br />
      Com seu café favorito <br />
      e um lugar aconchegante
    </h1>
    <button className="hero__button" onClick={orderNow}>Order Now</button>
  </section>
}
export default Hero