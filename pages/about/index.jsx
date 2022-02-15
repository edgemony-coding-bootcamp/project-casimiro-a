import styles from './About.module.scss'
import Layout from "../../components/Layouts";
import HeroIntern from "../../components/HeroIntern";
import TeamCard from '../../components/TeamCard';

const team = [
    {   id: '1', 
        name: 'Agnese Spinella', 
        description: 'lorem ipsum 1',
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQHHTY6LjP_v_Q/profile-displayphoto-shrink_800_800/0/1644597619382?e=1650499200&v=beta&t=8TcZGTmkeCSIX0cCWJlh3AWHrxZBP3Pzdj406D5Sqtg',
        linkedin: 'https://www.linkedin.com/in/agnese-spinella/',
        github:'https://github.com/AgneseSpinella',
        },
    {   id: '2', 
        name: 'Dario Castiglione', 
        description: 'lorem ipsum 2',
        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQF9Zcp5vdH08Q/profile-displayphoto-shrink_200_200/0/1634310082006?e=1650499200&v=beta&t=MJI0otULUqHyiUIt3lR3Z6oV1in5CkOfmPRIZKWNbrU',
        linkedin: 'https://www.linkedin.com/in/dario-castiglione/',
        github:'https://github.com/Dario-Castiglione',
        },
    {   id: '3', 
        name: 'Davide Missiato', 
        description: 'lorem ipsum 3',
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQGDrt3cxfALSw/profile-displayphoto-shrink_200_200/0/1644535548439?e=1650499200&v=beta&t=TawUhiqqw6e3jdkTB1U2_h5NWv5OlLJdsP7qAqX1THY',
        linkedin: 'https://www.linkedin.com/in/davide-missiato/',
        github:'https://github.com/DMissiato',
        },
    {   id: '4', 
        name: 'Federica Santoro', 
        description: 'lorem ipsum 4',
        image: 'https://media-exp1.licdn.com/dms/image/C5603AQEoJXKIh5-Ung/profile-displayphoto-shrink_200_200/0/1631269219638?e=1650499200&v=beta&t=B7iPmc_PY5QI6qjknJvXuopVVoxtycIGOaoyIa7C8Q8',
        linkedin: 'https://www.linkedin.com/in/federica-santoro-/',
        github:'https://github.com/federicasantoro93',
        },
    {   id: '5', 
        name: 'Roberta Pennisi', 
        description: 'lorem ipsum 5',
        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQE3jYRes5nUDA/profile-displayphoto-shrink_200_200/0/1634029377140?e=1650499200&v=beta&t=pZYV9WmdWryXpsLKG1WNLcVy_6WpmBWEeuuZyNHl4aY',
        linkedin: 'https://www.linkedin.com/in/roberta-pennisi/',
        github:'https://github.com/RobertaPennisi',
        }
  ] 

export default function About() {
    return (
        <Layout>
        <HeroIntern
        bgImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
        title="About"
        description="Uno sguardo su TravelHub"
      />
        <div className={styles.aboutWrapper}>   
            <div className={styles.aboutTravelHub}>
            <h3>A proposito di TravelHub</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>  
            <div className={styles.aboutTeam}>                
                <h3>Il nostro team</h3>
                <ul className={styles.teamCardsWrapper}>
                {               
                    team.map((card) =>(
                        <li className={styles.singleCard} key={card.id}>
                        <TeamCard image={card.image} name={card.name} description={card.description} linkedin={card.linkedin} github={card.github} />                             
                        </li>
                    ))
                }
                
                </ul>

            </div> 

        </div>
        </Layout>
    )
}