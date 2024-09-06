//Fazer a importação das bibliotecas ou pacotes ou gemas
//Importar o React e alguns
//useState que posso manipular o estado do componente
//useEffect que eu posso efeito do compopnente
import React, { useState, useEffect } from 'react';

//importar o axios para conexao com o servidor backend
import axios from 'axios';

//importar pacote do link da pagina
import { Link } from 'react-router-dom';

//função de retorno
//constante e retornar ela

const AnimeList = () => {
    //inicio
    //criar uma coleção de anmes
    //criar um objefo animes para receber os dados
    const [animes, setAnimes] = useState([]);

    // depois de carregar a pagina eu quero que ele consulte o servidor de animes
    useEffect(() => {
        //aqui eu vou implantar a logica de consulta
        axios.get("https://api.jikan.moe/v4/top/anime")
            .then((response) => setAnimes(response.data.data))
            .catch((error) =>
                console.error("Erro ao consultar: ", error));
    }, []); //[] garante que o use Effect seja executado so uma vez

    //class e uma palavra reservada do js
    //quando quero usar classe no html eu usso classname
    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-4'>Top Animes</h1>
            <div className='row'>
                {
                    animes.map(
                        (anime) => (
                            //nesse intervalo eu vou criar o cartão
                            <div className='col mb-4 mb-4' key={anime.mal_id}>
                                <div className='card h-100'>
                                    <img src={anime.images.jpg.large_imag_url}
                                        alt={anime.title}
                                    />
                                    <div className='card-body'>
                                        <h5 className='card-title'>
                                            {anime.title}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
    //fim
};

//exportar essa função
export default AnimeList;