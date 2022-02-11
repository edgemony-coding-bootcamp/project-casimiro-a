import styles from './SectionTitle.module.scss'
import Link from 'next/link'

export default function SectionTitle({
    title = "Titolo sezione", 
    description = "Lorem Ipsum",
    path = '/',
    btntext = 'Vai a',
    btncolor = '#000'
})
{
    
    return(
        <div className={styles.wrapper_title_button}>
                <div className={styles.wrapper_title}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>                
                <Link href={path}><a style={{backgroundColor:`${btncolor}`}}>{btntext}</a></Link>
        </div>
    )
}