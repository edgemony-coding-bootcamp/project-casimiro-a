import {Data} from './Data'
import {useState} from 'react'
import styles from './SearchBar.module.scss'


function SearchBar() {

    const [query, setQuery] = useState("")    
    const [filteredData, setFilteredData] = useState([]);

    const handleSetQuery = (e) => {
        setQuery(e.target.value);
        if(e.target.value.lenght === 0){
            return([])
        } else{
        setFilteredData(Data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())));        
        }
    }
    
    return (               
        <div className={styles.searchBarWrapper}>               
            <input value={query} onChange={(handleSetQuery)}/>                       
            <h1>{query}</h1> 
           

        {<div className={styles.dataWrapper}>
        {
                filteredData.map((item) =>(
                    <div key={item.id}>
                        <img
                            src={item.image}
                            width={200}
                            height={300}                            
                            alt={item.name}/>
                        <h3>{item.name}</h3>
                    </div>   
                ))
            }
            {/* Tutto l'array viene renderizzato
                {
                Data.map((pic) =>(
                    <div key={pic.id}>
                        <img
                            src={pic.image}
                            width={200}
                            height={300}
                            layout='responsive'
                            alt={pic.name}/>
                        <h3>{pic.name}</h3>
                    </div>   
                ))
            }
            */}
        </div>}


        </div>  
    );
}

export {SearchBar};