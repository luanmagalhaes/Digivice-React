import React, {useState, useEffect} from 'react';
import { Container } from './styles';
import digivice from '../../assets/pics/digivice.png'
import digiegg from '../../assets/pics/digiegg.jpg'

export default function Digivice(){
    const [value, setValue] = useState('')
    const [src, setSrc] = useState(digiegg)
    const [message, setMessage] = useState('')
    const [isActive, setActive] = useState(false)
    

    function getDigimon(){
        if(value.length>0){
            const apiDigimon = `https://digimon-api.vercel.app/api/digimon/name/${value}`
            fetch(apiDigimon)
            .then(resultado =>{
                setActive(true)
                return resultado.json()})
            .then(digimon =>{
                setSrc(digimon[0].img)
                setMessage('')
            })
            .catch(error =>{
                setMessage('Não existe este digimon')
                setActive(false)
                setSrc(digiegg)
            })  
        }
    }


    function changeDigimon(e){
        const apiDigimon = `https://digimon-api.vercel.app/api/digimon/name/${value}`
        setValue(e.target.value)
    }
    return (
        <Container>
            <p>{message}</p>
            <h1>Type a digimon name here (Agumon, Palmon, Patamon...)</h1>
            <input type='text' placeholder="Digimon Name" onChange={changeDigimon}></input>
            <div className='relative'>
                <img className='digimg' src={digivice}/>
                <img className={isActive ? 'digi2': 'digi'} src={src}/>
            </div>
            <button onClick={()=>{
                                    getDigimon()
                                }
                            }
                >Find Digimon</button>
        </Container>
    );
}

