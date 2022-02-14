import styles from './TeamCard.module.scss';
import Image from 'next/image';
import Link from "next/link"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TeamCard = (props) =>
{   
    const name = props.name || 'Agnese Spinella';
    const description = props.text || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const image = props.image || 'https://media-exp1.licdn.com/dms/image/C4E03AQHHTY6LjP_v_Q/profile-displayphoto-shrink_800_800/0/1644597619382?e=1650499200&v=beta&t=8TcZGTmkeCSIX0cCWJlh3AWHrxZBP3Pzdj406D5Sqtg';
    const linkedin = props.linkedin || 'https://www.linkedin.com/in/agnese-spinella/';
    const github = props.github || 'https://github.com/AgneseSpinella';
    

    return (
        <div className={styles.teamCard}>
            <div className={styles.imageWrapper}  
            style={{ backgroundImage: `url(${image})`,            
            backgroundSize: 'cover',            
            }}>         
            </div>
            
            <div className={styles.descriptionWrapper}>
                <h3>{name}</h3>
                <p>{description}</p>
                <div className={styles.brandsIcons}>
                    <Link href={linkedin}>
                        <a target="_blank"><FontAwesomeIcon className={styles.icon} icon={faLinkedin}/></a>
                    </Link>
                    <Link href={github}>
                        <a target="_blank"><FontAwesomeIcon className={styles.icon} icon={faGithub}/></a>
                    </Link>                    
                </div> 
            </div>
            
            
        </div>
    );
};

export default TeamCard;