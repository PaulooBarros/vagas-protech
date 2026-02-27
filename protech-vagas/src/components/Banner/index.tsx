import bannerImage from '../../assets/protech-pb.jpg'
import './style.css'

export function Banner() {
  return (
    <section className="banner" aria-label="Banner principal da Protech Solutions">
      <img src={bannerImage} alt="" className="banner__image" />
      <div className="banner__overlay" />

      <div className="banner__content">
        <p className="banner__kicker">IDEIAS CRIATIVAS</p>
        <h1 className="banner__title">
          DESENVOLVEMOS SOLUCOES QUE <span className="banner__title-accent">INSPIRAM</span>.
        </h1>
        <p className="banner__subtitle">Ola, somos a Protech Solutions!</p>
        <p className="banner__description">
          Geramos <strong>SOLUCOES EM TECNOLOGIA</strong> que a sua empresa precisa para crescer.
        </p>
        <a href="#" className="banner__cta">
          Nossas Vagas
        </a>
      </div>
    </section>
  )
}
