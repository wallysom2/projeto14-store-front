import styled from "styled-components"
import React from "react";
import {IoCartOutline} from "react-icons/io5"
import { createGlobalStyle } from 'styled-components'
import Produtos from "../Produtos";
import { useEffect,useState } from "react";
import axios from "axios";




export default function Loja(){
    const style = { color: "yellow", fontSize: "2.3em" }
    const [acessorys,setAcessorys]=useState([])
    const [videos,setVideos]=useState([])
    const [notebooks,setNotebooks]=useState([])
    const [produtox,setProdutox]=useState([])

    function FiltragemVideo(value){
        if(value.type === "video-card"){
            return value
        }
    }
    function FiltragemNotebook(value){
        if(value.type === "notebook"){
            return value
        }
    }
    function FiltragemAcessory(value){
        if(value.type === "acessory"){
            return value
        }
    }


    useEffect(()=>{
        async function Itens(){
            try{
                const promise=await axios.get('http://localhost:5000/produtos')
                const produtos = promise.data
                setProdutox(produtos)
                setVideos(produtos.filter(FiltragemVideo))
                setNotebooks(produtos.filter(FiltragemNotebook))
                setAcessorys(produtos.filter(FiltragemAcessory))

            }catch(error){
                console.log(error)
            }
        }
        Itens()
    },[])

    return(
        <>
       < GlobalStyle/>
        <Header>
          <h1>TechZone</h1> 
           < IoCartOutline style={style}/>
        </Header>
        <Welcome>Seja Bem vindo Fulano!</Welcome>
        <Category>
            <h1>Acessórios</h1>
            <Objetos>
           {acessorys.map((acessory)=>{return(<Produtos name={acessory.name} price={acessory.price} image={acessory.image}/>)})}
           </Objetos>
        </Category>
        <Category>
            <h1>Placas de vídeo</h1>
            <Objetos>
           {videos.map((video)=>{return(<Produtos name={video.name} price={video.price} image={video.image}/>)})}
           </Objetos>
        </Category>
        <Category>
            <h1>Peças</h1>
            <Objetos>
           {notebooks.map((notebook)=>{return(<Produtos name={notebook.name} price={notebook.price} image={notebook.image}/>)})}
           </Objetos>
        </Category>
        <Category>
            <h1>Produtos em destaque</h1>
            <Objetos>
               {produtox.map((produto)=>{return(<Produtos name={produto.name} price={produto.price} image={produto.image}/>)})} 
            </Objetos>
            
        </Category>


        </>
    )
}

const Header =styled.header`
    display:flex;
    width:100%;
    height:8vh;
    
    justify-content:space-between;
    align-items:center;
    padding:30px;
    background-color:#D00000;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 30%);
    /* position:fixed; */
   

    h1{
        font-family:'Nabla';
        font-size:40px;
    }
`

const Welcome=styled.div`
    margin-top:15px;
    padding-left:30px;
    font-family:'Bebas Neue';
    font-size:2rem;
    color:yellow;
`

const Category=styled.div`
    padding-left:30px;
    margin-top:15px;
    h1{
        font-size:25px;
        margin-bottom:10px;
        font-family:'Bebas Neue';
        color:#D00000;
    }
    
`
const Objetos=styled.div`

   display: flex;

   overflow-x: scroll;

    width: 100%;
    height: 250px;
    margin-top: 10px;
    `


const GlobalStyle = createGlobalStyle`
  body {
    background-color:#202327;
  
  }`

