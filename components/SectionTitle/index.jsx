import styles from './SectionTitle.module.scss'
import Link from 'next/link'

export default function SectionTitle({
    title = "Titolo sezione", 
    description = "Lorem Ipsum",
    path = '/',
    btntext = 'Vai a',
    btncolor = '#000',
    showBtn = true,
    skeleton = false})
{
    let content =   <>
                        <div className={styles.wrapper_title}>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>                
                        {
                            showBtn &&
                            <Link href={path}>
                                <a style={{backgroundColor:`${btncolor}`}}>{btntext}</a>
                            </Link>
                        }
                    </>;
    if(skeleton) content =  <div className={styles.wrapper_title}>
                                <div className={styles.wrapper_title_skeleton}></div>
                                <div className={styles.wrapper_text_skeleton}></div>
                            </div>;   
        
    return(
        <div className={styles.wrapper_title_button}>
            {content}
        </div>
    )
}