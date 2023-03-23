import { useState } from 'react';
import Banner from  './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

export default function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57c278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8f8ff'
    },
    {
      nome:'Data Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8e2'
    },
    {
      nome:'Devops',
      corPrimaria:'#E06869',
      corSecundaria:'#FDE7e8'
    },
    {
      nome:'UX e Desingn',
      corPrimaria:'#DB6ebf',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5d9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    },
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}