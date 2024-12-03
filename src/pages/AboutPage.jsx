import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">À propos de notre entreprise</h1>
        <hr />
        <p className="lead text-center">
        Notre entreprise incarne la réussite grâce à des valeurs solides et un engagement envers l'excellence. Nous croyons fermement à l'importance d'une approche authentique, privilégiant la qualité et la satisfaction de nos clients.

Nous comprenons que les décisions importantes, bien qu'elles puissent sembler simples en apparence, impliquent souvent des défis. Notre mission est de vous accompagner dans ces choix en vous proposant des solutions qui allient commodité et efficacité.

Chaque produit ou service que nous offrons est conçu avec soin, dans un souci constant de répondre à vos attentes tout en minimisant les désagréments. Nous nous efforçons de surmonter les obstacles pour vous offrir le meilleur, en gardant à l'esprit que vos besoins sont notre priorité absolue.

Chez nous, chaque expérience client compte. Nous sommes convaincus que la qualité, la transparence et l'engagement sont les piliers d'une relation durable et de confiance. Ensemble, avançons vers un avenir où chaque décision est synonyme de satisfaction et de sérénité.
        </p>

        <h2 className="text-center py-4">Produits</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Vêtements pour hommes</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Vêtements pour femmes</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Bijoux</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronique</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage