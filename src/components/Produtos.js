import styled from "styled-components"

export default function Produtos(){
    return(
        <>
         <Products>
             <div>
                <img src='https://www.pngmart.com/files/2/Computer-Mouse-PNG-Image.png'/>
               <h1>Mouse</h1>
               <h2> R$20,00</h2>
                </div>
                
            </Products>
        </>
    )
}

const Products=styled.div`

   display: flex;

   overflow-x: scroll;

    width: 100%;
    height: 180px;
    margin-top: 10px;
    


div{

       display:flex;
       flex-direction:column;
       align-items:center;
       justify-content:center;
       
        width:35vh;
        height:20vh;
        
        margin-right:10px;
        border-radius:5px;
        object-fit:cover;
        background-color:rgb(100, 113, 119);
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
       color:#FFFFFF;
       font-size:20px;
    }
    h2{
        font-family:'Bebas Neue';
        font-size:18px;
    }
    }
`