import styled from "styled-components"
import {CgLoadbar} from "react-icons/cg"
import {CgMathPlus} from "react-icons/cg"
import { useEffect,useState } from "react";

export default function Pay({name,image,price,index,setCarrinho}){
    const style2={fontSize:"3.5em",border:"4px solid green",color:"green"}
    const style3={fontSize:"3.5em",border:"4px solid red",color:"red"}
    const [preço,setPreço]=useState(price)
    const [number,setNumber]=useState(1)
    

   
    function Somar(){
        
       
        setNumber(number+1)
        setPreço(preço + preço)
    }
    
   
    
   


     function Diminuir(){

        
        if(number>1){
           setNumber(number-1)
          setPreço(preço / number)
         
        }
        
     }
   

   
   

    return(
        
          <Compra key={index}>
                <div>
                    <img src={image}/>
                </div>
                <span>
                    <h1>{name}</h1>
                    <h2>Quantidade {number}x</h2>
                    <h3>R$ {preço}</h3>
                </span>
                <Incremento>
                 <CgMathPlus style={style2} onClick={Somar} />
                    <h1>{number}</h1>
                <CgLoadbar style={style3} onClick={Diminuir}/>
                </Incremento>
            </Compra>
        
    )
}

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