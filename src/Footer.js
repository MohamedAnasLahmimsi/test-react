import React from "react";
import './footer.css';
import anas from './assets/images/anas.jpeg';

function Footer() {
    return (
        <div className="footer-div">
        <div className="total">
          <div className="global">
            <div className="description">
              <img src={anas} className="imageA" alt="Anas" />
              <div className="texte">
                <p className="nom">Lahmimsi Mohamed Anas</p>
                <p className="desc">
                  Développeur Front-End passionné, spécialisé dans React.js. J'ai une solide expérience dans la création d'interfaces utilisateur dynamiques et réactives, avec une approche moderne du développement web.
                </p>
              </div>
            </div>
            <div className="separateur"></div>
            <div className="contact">
              <p><strong>Téléphone :</strong> 06-97-59-72-00</p>
              <p><strong>E-mail :</strong> mohamedanaslahmimsi56@gmail.com</p>
              <p>
                <strong>CV :</strong> Cliquez pour télécharger <a href="/cv.pdf" download="MonCV.pdf">mon CV</a>.
              </p>
            </div>
          </div>
          <div className="cop">
            <p>&copy; 2024 Lahmimsi Mohamed Anas. Tous droits réservés.</p>
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Footer;