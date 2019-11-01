import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
         <div className="container">
            <div className="agileits-contact-addrss">
               <div className="row top-gap">
                  <div className="col-md-7 header-side">
                     <p> 
                        © 2019 iWash. All Rights Reserved | Design by Samir &amp; Victor
                     </p>
                  </div>
                  <div className="col-md-5 header-side">
                     <div className={styles.socialBtn}>
                        <ul>
                           <li className="mr-2"><a href="/"><span className="fab fa-facebook-f"></span></a></li>
                           <li className="mr-2"><a href="/"><span className="fab fa-google"></span></a></li>
                           <li className="mr-2"><a href="/"><span className="fab fa-twitter"></span></a></li>
                           <li className="mr-2"><a href="/"><span className="fab fa-whatsapp"></span></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
    );
};

export default Footer;