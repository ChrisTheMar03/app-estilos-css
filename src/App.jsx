import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [attr, setAttr] = useState({
    // ancho:'',
    shadowX:'0',
    shadowY:'0',
    blur:'0',
    color:'#000000'
  })

  const modificarImagen=(e)=>{
    const {value,name} = e.target
    setAttr({...attr,[name]:value })
    // console.log(attr);
  }

  const limpiarEstado=()=>{
    setAttr({
      shadowX:'0',
      shadowY:'0',
      blur:'0',
      color:'#000000'
    })
  }


  return (
    <div className="App">
      <Header/>
      <Options/>
      <div className="container"> 
        <div className="shadow-container">
          <div className="shadow-atributos">
            <Atrubutos onchange={ modificarImagen } value={ attr } onclick={ limpiarEstado } />
          </div>
          <div className="shadow-muestra">
            <div className="shadow-view">
              <View style={ { boxShadow:`
                              ${attr.shadowX}px 
                              ${attr.shadowY}px 
                              ${attr.blur}px 
                              ${attr.color}` } } texto={ `box-shadow: ${attr.shadowX}px 
                                                                      ${attr.shadowY}px 
                                                                      ${attr.blur}px 
                                                                      ${attr.color}` } />
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

const Header=()=>{
  return(
    <div className='header'>
      <h1>Box Shadow - CSS</h1>
    </div>
  )
}

const Options=()=>{
  return (
    <section className='section-container'>
      <div className='section-select'>
        <select className='select-list' disabled>
          <option defaultValue="1" selected className='select-item'>Box Shadow</option>
        </select>
      </div>
    </section>
  )
}

const Atrubutos=({onchange, value,onclick})=>{
  return (
    <div className='atributos'>
      <div className="atributos-content">
        <div className="atributos-header">
          <h2>Opciones de Box Shadow </h2>
        </div>
        <div className="atributos-body">
          <EntradaRango nombre={"Horizontal 'X'"} min={-100} max={100} type={"range"} name={"shadowX"} value={value.shadowX} onchange={ onchange }/>
          <EntradaRango nombre={ "Horizontal 'Y'" } min={-100} max={100} type={"range"} name={"shadowY"} value={value.shadowY} onchange={ onchange }/>
          <EntradaRango nombre={ "Blur" } type={"range"} min={-100} max={100} onchange={ onchange } name={"blur"} value={value.blur}/>
          <div className="atributos-color">
            <EntradaRango nombre={ "Color" } type={"color"} onchange={ onchange } value={value.color} name={"color"} />
            <span>{value.color ? value.color:"#000000"}</span>
          </div>
          <div className='atributos-btn'>
            <button onClick={ onclick }>Limpiar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const EntradaRango=({value,nombre,id,name,onchange,min,max,type})=>{
  return (
      <div className='entrada-content'>
          <label className='entrada-label' htmlFor={id}>{nombre} <strong>{value}px</strong> </label>
          <input className='entrada-input' type={type} id={id} min={min} max={max} name={name} onChange={onchange}  value={value} />
      </div>
    )
}

const View=({style,texto,onclick})=>{
  return (
    <div className='view'>
      <div className="view-opcion">
        
      </div>
      <div className='view-figure'>
          <div className='figura' style={style}>

          </div>
      </div>
      <div className="view-footer" title='Copiar' onClick={onclick}>
        <p id='texto'>{texto}</p>
      </div>
    </div>  
  )
}

export default App
