//API Banners
//link da API
let url1 = "https://labs.inforcedata.com.br/desafio-frontend/banners.json"

//busca os dados da API
fetch(url1)

//resposta da busca e conversão para json
.then((response) =>{
    return response.json()
}) 

//retorna o body da API
.then((bodyjson) =>{

    //titulos dos banners do carousel
    document.getElementById('glider-first-titulo').innerHTML = bodyjson[0].titulo
    document.getElementById('glider-second-titulo').innerHTML = bodyjson[1].titulo
    
    //banners do carousel
    let banner1 = bodyjson[0].imagem
    document.getElementById('glider-first-img').setAttribute('src', banner1);

    let banner2 = bodyjson[1].imagem
    document.getElementById('glider-second-img').setAttribute('src', banner2); 
})


//API Vitrine
//link da API
let url2 = "https://labs.inforcedata.com.br/desafio-frontend/vitrines.json"

//busca os dados da API
fetch(url2)

//resposta da busca e conversão para json
.then((response) =>{
    return response.json()
}) 

//retorna o body da API
.then((bodyjson) =>{

    //imagens dos cards da vitrine de imóveis
    let vitrine1 = bodyjson[0].capa
    document.getElementById('vitrine-imoveis-first-img').setAttribute('src', vitrine1)

    let vitrine2 = bodyjson[1].capa
    document.getElementById('vitrine-imoveis-second-img').setAttribute('src', vitrine2)

    let vitrine3 = bodyjson[2].capa
    document.getElementById('vitrine-imoveis-third-img').setAttribute('src', vitrine3)
    
    let vitrine4 = bodyjson[3].capa
    document.getElementById('vitrine-imoveis-fourth-img').setAttribute('src', vitrine4)
    
    let vitrine5 = bodyjson[4].capa
    document.getElementById('vitrine-imoveis-fifth-img').setAttribute('src', vitrine5)
    
    let vitrine6 = bodyjson[5].capa
    document.getElementById('vitrine-imoveis-sixth-img').setAttribute('src', vitrine6)

    //tipos dos cards da vitrine de imóveis
    document.getElementById('vitrine-imoveis-first-tipo').innerHTML = bodyjson[0].tipo
    document.getElementById('vitrine-imoveis-second-tipo').innerHTML = bodyjson[1].tipo
    document.getElementById('vitrine-imoveis-third-tipo').innerHTML = bodyjson[2].tipo
    document.getElementById('vitrine-imoveis-fourth-tipo').innerHTML = bodyjson[3].tipo
    document.getElementById('vitrine-imoveis-fifth-tipo').innerHTML = bodyjson[4].tipo
    document.getElementById('vitrine-imoveis-sixth-tipo').innerHTML = bodyjson[5].tipo
    
    //bairros dos cards da vitrine de imóveis
    document.getElementById('vitrine-imoveis-first-bairro').innerHTML = bodyjson[0].bairro
    document.getElementById('vitrine-imoveis-second-bairro').innerHTML = bodyjson[1].bairro
    document.getElementById('vitrine-imoveis-third-bairro').innerHTML = bodyjson[2].bairro
    document.getElementById('vitrine-imoveis-fourth-bairro').innerHTML = bodyjson[3].bairro
    document.getElementById('vitrine-imoveis-fifth-bairro').innerHTML = bodyjson[4].bairro
    document.getElementById('vitrine-imoveis-sixth-bairro').innerHTML = bodyjson[5].bairro
    
    //quartos dos cards da vitrine de imóveis
    document.getElementById('vitrine-imoveis-first-quartos').innerHTML = bodyjson[0].quartos
    document.getElementById('vitrine-imoveis-second-quartos').innerHTML = bodyjson[1].quartos
    document.getElementById('vitrine-imoveis-third-quartos').innerHTML = bodyjson[2].quartos
    document.getElementById('vitrine-imoveis-fourth-quartos').innerHTML = bodyjson[3].quartos
    document.getElementById('vitrine-imoveis-fifth-quartos').innerHTML = bodyjson[4].quartos
    document.getElementById('vitrine-imoveis-sixth-quartos').innerHTML = bodyjson[5].quartos

    //vagas dos cards da vitrine de imóveis
    document.getElementById('vitrine-imoveis-first-vagas').innerHTML = bodyjson[0].vagas
    document.getElementById('vitrine-imoveis-second-vagas').innerHTML = bodyjson[1].vagas
    document.getElementById('vitrine-imoveis-third-vagas').innerHTML = bodyjson[2].vagas
    document.getElementById('vitrine-imoveis-fourth-vagas').innerHTML = bodyjson[3].vagas
    document.getElementById('vitrine-imoveis-fifth-vagas').innerHTML = bodyjson[4].vagas
    document.getElementById('vitrine-imoveis-sixth-vagas').innerHTML = bodyjson[5].vagas

    //metragens dos cards da vitrine de imóveis
    document.getElementById('vitrine-imoveis-first-metragem').innerHTML = bodyjson[0].metragem
    document.getElementById('vitrine-imoveis-second-metragem').innerHTML = bodyjson[1].metragem
    document.getElementById('vitrine-imoveis-third-metragem').innerHTML = bodyjson[2].metragem
    document.getElementById('vitrine-imoveis-fourth-metragem').innerHTML = bodyjson[3].metragem
    document.getElementById('vitrine-imoveis-fifth-metragem').innerHTML = bodyjson[4].metragem
    document.getElementById('vitrine-imoveis-sixth-metragem').innerHTML = bodyjson[5].metragem
})

//API Notícias
//link da API
let url3 = "https://labs.inforcedata.com.br/desafio-frontend/noticias.json"

//fetch busca os dados da API
fetch(url3)

//resposta da busca e conversão para json
.then((response) =>{
    return response.json()
}) 

//retorna o body da API
.then((bodyjson) =>{


    //capas dos cards das últimas notícias
    let capa1 = bodyjson[0].capa
    document.getElementById('latest-news-first-img').setAttribute('src', capa1);
   
    let capa2 = bodyjson[1].capa
    document.getElementById('latest-news-second-img').setAttribute('src', capa2);
    
    let capa3 = bodyjson[2].capa
    document.getElementById('latest-news-third-img').setAttribute('src', capa3);

    let capa4 = bodyjson[3].capa
    document.getElementById('latest-news-fourth-img').setAttribute('src', capa4);
    
    
    //títulos dos cards das últimas notícias
    document.getElementById('latest-news-first-titulo').innerHTML = bodyjson[0].titulo
    document.getElementById('latest-news-second-titulo').innerHTML = bodyjson[1].titulo
    document.getElementById('latest-news-third-titulo').innerHTML = bodyjson[2].titulo
    document.getElementById('latest-news-fourth-titulo').innerHTML = bodyjson[3].titulo
    
    //sumários dos cards das últimas notícias
    document.getElementById('latest-news-first-sumario').innerHTML = bodyjson[0].sumario
    document.getElementById('latest-news-second-sumario').innerHTML = bodyjson[1].sumario
    document.getElementById('latest-news-third-sumario').innerHTML = bodyjson[2].sumario
    document.getElementById('latest-news-fourth-sumario').innerHTML = bodyjson[3].sumario
})    


//API Cloud Tags
//link da API
let url4 = "https://labs.inforcedata.com.br/desafio-frontend/cloudtags.json"

//fetch busca os dados da API
fetch(url4)

//resposta da busca e conversão para json
.then((response) =>{
    return response.json()
}) 

//retorna o body da API
.then((bodyjson) =>{

    //tags da seção Mais Acessos
    document.getElementById('mais-acessos-first-tag').innerHTML = bodyjson[0].tag
    document.getElementById('mais-acessos-second-tag').innerHTML = bodyjson[1].tag
    document.getElementById('mais-acessos-third-tag').innerHTML = bodyjson[2].tag
    document.getElementById('mais-acessos-fourth-tag').innerHTML = bodyjson[3].tag
    document.getElementById('mais-acessos-fifth-tag').innerHTML = bodyjson[4].tag

})