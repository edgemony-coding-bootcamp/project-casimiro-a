import styles from './Footer.module.scss'

function Footer() {
  return (   
            
    <div className={styles.footerWrapper}>

        <div className={styles.rowItemsWrapper}>
            <div className={styles.logoWrapper}>
                <h2>TravelHub</h2>
                <p>Lorem Ipsum is simply dummy... </p>
            </div>
            <div className={styles.menùWrapper}>
                <h3>Menù</h3>
                <ul>
                    <li>Città</li>
                    <li>Esperienze</li>
                    <li>About</li>
                </ul>
            </div>
            <div className={styles.contattiWrapper}>
                <h3>Contatti</h3>
                <ul>
                    <li>info@travelhub.com</li>
                    <li>+39 123 456 7890</li>
                    <li>Icone social</li>
                </ul>
            </div>
        </div>
       
        <div className={styles.AuthorsWrapper}>
            <h3>Made with love & Next.JS</h3>
            <p>by Agnese, Dario, Davide, Federica & Roberta</p>
            
        </div>
     
    </div>    

  );
}

export {Footer};