import React from 'react';
import "./styles/App.css";
import { Navbar } from './components/Navbar/navbar';
import { Article } from './components/Article/Article';

import article1Img from "./assets/images/article1.jpg";
import article2Img from "./assets/images/article2.jpg";
import article3Img from "./assets/images/article3.jpg";
import article4Img from "./assets/images/article4.jpg";



class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <section id='articles'>
          <Article title="Soluções de IA para o dia a dia" provider="Microsoft"
         description="A inteligência artificial está presente em tudo: do Copilot, que ajuda na escrita e criação de imagens, às plataformas adaptativas que personalizam o aprendizado. Descubra como a IA está transformando a forma como trabalhamos, estudamos e nos informamos."
         thumbnail={article1Img} />

          <Article title="Startups brasileiras em destaque" 
          provider="Forbes Brasil"
          description="O Brasil vive uma fase promissora no setor de startups. Empresas como QuintoAndar, Loft e Brex são exemplos de inovação que conquistaram espaço nacional e internacional. Novas startups também vêm se destacando em áreas como fintechs, healthtechs e edtechs, atraindo investimentos estrangeiros. Esse crescimento reflete um mercado criativo, adaptável e pronto para resolver problemas reais com tecnologia de ponta."
          thumbnail={article2Img} />

          <Article title="Primeira transação feita por IA da história" 
          provider="Mastercard Agent Pay"
          description="Em 2025, a Mastercard realizou a primeira transação totalmente autônoma feita por um agente de IA. A plataforma Mastercard Agent Pay usa tokens inteligentes para que IAs possam realizar compras em nome de pessoas ou empresas. A empresa também aplica IA em prevenção a fraudes, processando bilhões de transações em tempo real para identificar atividades suspeitas e proteger os consumidores."
          thumbnail={article3Img} />

          <Article title="Tech Mahindra"
          provider="Tech Mahindra"
          description="Reconhecida pelo Fórum Econômico Mundial, a Tech Mahindra desenvolveu modelos de linguagem multilíngues que atendem 3,8 milhões de consultas por mês com 92% de precisão. A tecnologia leva serviços digitais inclusivos a países em desenvolvimento, provando que é possível escalar IA com propósito social" 
          thumbnail={article4Img} />
          </section>
      </>
    );
  }
}

export default App;

