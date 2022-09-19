import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import {BsFillCaretLeftFill} from 'react-icons/bs'
import {CgLoadbar} from "react-icons/cg"
import {CgMathPlus} from "react-icons/cg"
import { useState} from 'react';
import { Link,useNavigate,useParams } from "react-router-dom";
import UserContext from '../contexts/UserContext';
import React, { useContext } from 'react';
import Pay from "./Pay"



export default function Carrinho(){
    const {carrinhos}=useParams()
    const{carrinho,setCarrinho}=  useContext(UserContext);
    const style1= { color: "white", fontSize: "2.3em" }
    // const style2={fontSize:"3.5em",border:"4px solid green",color:"green"}
    // const style3={fontSize:"3.5em",border:"4px solid red",color:"red"}
    const [endereço,setEndereço]=useState("")

    async function Comprar(event){
        event.preventDefault()
        console.log(endereço)
        //UTILIZAR O CHEKOUT APARTIR DAQUI
    }
        
    return(
        <>
        < GlobalStyle/>
         <Header> 
           <Link to='/loja'>< BsFillCaretLeftFill style={style1}/></Link> 
          <h1>CARRINHO</h1> 
        </Header>
        <Compras>
         {carrinho.map((car,index)=>{return(<Pay name={car.name} image={car.image} price={car.price} index={index} setCarrinho={setCarrinho}/>)})} 
        </Compras>
        <Endereço onSubmit={Comprar}>
            <h1>Endereço:</h1>
            <h2>Logradouro</h2>
            <input type='text' value={endereço} onChange={(e)=>setEndereço(e.target.value)} />
            <Link to="/checkout">
            <button type='submit'>Comprar !</button>
          </Link>
        </Endereço>
        </>
    )
}
const Header =styled.header`
    display:flex;
    width:100%;
    height:8vh;
    
    justify-content:flex-start;
    align-items:center;
    padding:30px;
    background-color:#D00000;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 30%);
    /* position:fixed; */
   

    h1{
        align-itens: center;
        font-family:'Nabla';
        font-size:40px;
       margin-left:18vh;
    }
`
const Compras=styled.div`
    height:50vh;
    width:100%;
    background-color:#FFFFFF;
    border-radius:10px;
    margin-top:10vh;
    overflow:scroll;

`
const Compra=styled.div`
    display:flex;
   
    width:100%;
    height:19vh;
    border-bottom:1px solid black;


    div{
        display:flex;
        align-items:center;
        justify-content:center;
        heigth:80px;
        width:20vh;
        
        
    }
    img{
        object-fit:cover;
        heigth:77px;
        width:17vh;
    }
    Span{
        heigth:80px;
        width:25vh;
    
        text-align:center;

        h1,h2,h3{
            
            font-weight:700;
            font-size:2rem;
            margin-top:15px;
            font-family:'Bebas Neue';
        }
        h2{

            font-weight:300;
            font-size:1.5rem;

        }
        h3{
            margin-top:55px;
            font-size:3rem;
            color:red;
        }
    }
`
const Incremento=styled.div` 
    width:100%;
    heigth:18vh;
    display:flex;
    flex-direction: column;
    margin-left:30px;
    align-itens:center;
    justify-content:center;



    h1{
        width:100%;
        heigth:5vh;
        text-align:center;
        margin-top:10px;
        margin-bottom:10px;
        font-size:3rem;
        font-family:'Bebas Neue';
    }
`

const Endereço=styled.form`
    margin-top:20px;
   
    width:100%;


  
    h1,h2{
        font-family:'Bebas Neue';
        color:#FFFFFF;
        font-size:3.5rem;
    }
    h2{
        font-size:2.5rem;
        margin-top:10px;
    }
    input{
        width:100%;
        height:5vh;
        padding-left:10px;
        font-size:2.5rem;
    }
    button{
        margin-top:20px;
        width:50%;
        height:8vh;
        margin-left:190px;
        border-radius:6px;
        font-family:'Bebas Neue';
        background-color:#D00000;
        color:yellow;
        font-size:4rem;

        :active{
           color:  #D00000;   
           background-color:yellow;
        }
    }

`


const GlobalStyle = createGlobalStyle`
  body {
    background-color:#202327;
  
  }`


//   <Compra>
//   <div>
//       <img src='https://images.kabum.com.br/produtos/fotos/161799/placa-de-video-asus-rog-strix-rtx3080ti-o12g-gaming-90yv0gt1-m0nm00_1622660951_g.jpg'/>
//   </div>
//   <span>
//       <h1>RX 3070 Ti</h1>
//       <h2>Quantidade 1x</h2>
//       <h3>R$ 1350,00</h3>
//   </span>
//   <Incremento>
//    <CgMathPlus style={style2}/>
//       <h1>12</h1>
//   <CgLoadbar style={style3}/>
//   </Incremento>
// </Compra>