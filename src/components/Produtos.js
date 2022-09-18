import styled from "styled-components"

export default function Produtos({name,price,image}){
    return(
        <>
         <Products>
             <div>
                <img src={image}/>
               <h1>{name}</h1>
               <h2> R$ {price}</h2>
                </div>
                
            </Products>
        </>
    )
}

const Products=styled.div`



       display:flex;
       flex-direction:column;
       align-items:center;
       justify-content:center;
       
        width:35vh;
        height:20vh;
        
        margin-right:10px;
        border-radius:5px;
        object-fit:cover;
        background-color:#FFFFFF;
        :active{
            background-color:yellow;      
        }
        
        
    
    img{
        object-fit:contain;
        width:80%;
        height:10vh;
        margin-bottom:20px;
        
       
    
    }
    h1{
       padding-left:20px;
        width:15vh;
       color:black;
       font-size:20px;
    }
    h2{
        font-family:'Bebas Neue';
        font-size:18px;
    }
    
`