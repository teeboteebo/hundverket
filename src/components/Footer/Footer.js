import React from 'react'
import { Facebook, Phone, Mail, MapPin } from 'react-feather'

const Footer = props => {
  return (
    <footer className="full-width-padding">
      <div>
        <div>
          <ul>
            <li><a href="tel:+4600705875878"><Phone size={16} /> 0705 - 875 878</a></li>
            <li><a href="mailto:elisabeth.asplund63@gmail.com"><Mail size={16} /> Skicka mail</a></li>
            <li><a
              href="https://www.facebook.com/pg/hundverketiskane/"
              target="_blank"
              rel="noopener noreferrer">
              <Facebook size={16} /> Hundverket i Skåne
            </a></li>
            <li>
              <address>
                <a
                  href="https://www.google.com/maps/place/Kalkemadsvägen+9,+233+38+Svedala/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <MapPin size={16} /> Kalkemadsvägen 9, 233 38 Svedala
                </a>

              </address>
            </li>
          </ul>
          <section>
            <img src="/images/elisabeth.jpg" alt="Elisabeth med Ebbe" />
          </section>
        </div>
        <p className="copy-claim">Denna sida lagrar ingen information. <br /> &copy; Jesper Asplund 2019</p>
      </div>
    </footer>
  )
}

export default Footer