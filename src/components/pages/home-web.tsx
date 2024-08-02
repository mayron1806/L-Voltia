'use client';

import Feature from "@/components/sections/feature";
import PainPoints from "@/components/sections/pain-points";
import SubmitEmail from "@/components/sections/submit-email";
import FAQ from "@/components/sections/FAQ";
import Footer from "../sections/footer";
import HowWorks from "../sections/how-works";
import Ask from "../sections/ask";
import ContactUs from "../sections/contact-us";
import Companies from "../sections/companies";
import Main from "../sections/main";

const words = ["super poderes", "chat inteligente", "notificação pelo whatsapp",  "multiplos atendentes", "suporte 24hs"];
const features = [
  {
    title: "Chat inteligente",
    description: "Nosso chat inteligente responde automaticamente às perguntas de seus clientes, sem necessidade de intervenção humana. Além disso, seu atendente pode facilmente desativar o modo automático e responder manualmente com apenas alguns cliquesNosso chat inteligente responde automaticamente às perguntas de seus clientes, sem necessidade de intervenção humana. Além disso, seu atendente pode facilmente desativar o modo automático e responder manualmente com apenas alguns cliques. Quando um usuário solicita atendimento humano, todos os atendentes são notificados, garantindo uma resposta rápida ao cliente.",
    iconSrc: "/icons/resposta-automatica.svg"
  },
  {
    title: "Facíl integracão",
    description: "Com apenas alguns passos, você pode conectar o Zoldy ao seu site e começar a aproveitar seus benefícios imediatamente. Basta adicionar um simples script ao seu site, e nosso chatbot estará pronto para interagir com seus visitantes. O processo é intuitivo e não requer conhecimentos técnicos avançados. Em questão de minutos, seu e-commerce estará equipado com um sistema de atendimento automatizado que responde às perguntas dos clientes com precisão, 24/7.",
    reverse: true,
    iconSrc: "/icons/integration.svg"
  },
  {
    title: "Suporte a Múltiplos Atendentes",
    description: "Maximize a eficiência do seu atendimento ao cliente, nosso sistema permite múltiplos atendentes. Dessa forma, sua equipe pode gerenciar e responder às mensagens de clientes simultaneamente, garantindo um atendimento mais rápido, eficaz e maior satisfação do cliente.",
    iconSrc: "/icons/suporte-multiplos-atendentes.svg"
  },
  {
    title: "Atualização do pedido pelo whatsapp",
    description: "Mantenha seus clientes informados a cada passo do processo de compra com nossas notificações de atualização de pedidos via WhatsApp. Assim que um pedido é atualizado — seja por confirmação, envio, ou qualquer outra mudança — seu cliente recebe uma notificação diretamente no WhatsApp.",
    reverse: true,
    iconSrc: "/icons/notify.svg"
  }
];
const painPoints = [
  {
    title: "Para Quem Precisa de Atualizações Imediatas de Pedidos",
    description: "Está cansado de clientes ansiosos esperando atualizações sobre seus pedidos? Com o Zoldy, você envia notificações instantâneas pelo WhatsApp, mantendo seus clientes informados a cada passo do processo de compra, sem atrasos.",
  },
  {
    title: "Para Quem Quer Melhorar a Comunicação com o Cliente",
    description: "Está frustrado com a falta de comunicação eficiente sobre o status dos pedidos? O Zoldy permite que você envie atualizações detalhadas e personalizadas via WhatsApp, oferecendo uma comunicação clara e contínua para seus clientes.",
  },
  {
    title: "Para Quem Precisa de Notificações Rápidas e Eficientes",
    description: "Está frustrado com a lentidão na comunicação das atualizações de pedidos? Zoldy garante que todas as atualizações sejam enviadas rapidamente via WhatsApp, proporcionando uma resposta eficiente e mantendo seus clientes sempre atualizados.",
  },
  {
    title: "Para Quem Busca Integrar Notificações com Facilidade",
    description: "Quer uma solução simples para integrar notificações de pedidos com o WhatsApp? O Zoldy oferece uma integração fácil e direta, permitindo que você configure notificações sem complicação e comece a manter seus clientes informados de forma imediata.",
  },
  {
    title: "Para Quem Valoriza a Experiência do Cliente",
    description: "Quer melhorar a experiência do cliente com atualizações precisas e oportunas? Zoldy garante que seus clientes recebam notificações detalhadas e em tempo real sobre seus pedidos, melhorando a satisfação e a confiança na sua marca.",
  },
  {
    title: "Para Quem Quer Reduzir Custos com Atendimento",
    description: "Está buscando maneiras de reduzir custos com a contratação e treinamento de atendentes? O Zoldy automatiza o envio de notificações, diminuindo a necessidade de uma equipe grande e permitindo que você economize com a gestão de pessoal.",
  },
];
const faqList = [
  {
    ask: "O que é o Zoldy?",
    answer: "Zoldy é uma solução de chatbot projetada especificamente para e-commerce. Ele utiliza inteligência artificial para automatizar o atendimento ao cliente, fornecendo respostas instantâneas sobre pedidos, produtos e outras consultas, além de enviar notificações de atualizações de pedidos pelo WhatsApp.",
  },
  {
    ask: "Como o Zoldy pode beneficiar meu e-commerce?",
    answer: "Zoldy economiza tempo e melhora a eficiência automatizando respostas para perguntas frequentes sobre produtos e status de pedidos. Ele também permite o envio automático de atualizações de pedidos, reduzindo a necessidade de intervenção manual e permitindo que sua equipe se concentre em tarefas estratégicas.",
  },
  {
    ask: "Que tipo de dados o Zoldy usa para responder às perguntas dos clientes?",
    answer: "O Zoldy utiliza os dados que você fornece sobre seus produtos e processos de pedido para gerar respostas precisas. Isso pode incluir informações em formatos como PDF, DOCX, CSV, URL, e TXT, ou até mesmo conteúdos copiados e colados diretamente. Esses dados ajudam o bot a responder de forma relevante às perguntas dos clientes.",
  },
  {
    ask: "É possível personalizar as mensagens enviadas pelo Zoldy?",
    answer: "Sim, o Zoldy gera mensagens personalizadas com base nas perguntas dos clientes e nas informações do seu e-commerce. As respostas são adaptadas a cada consulta específica, proporcionando uma comunicação mais relevante e engajadora.",
  },
  {
    ask: "O Zoldy pode gerenciar múltiplos atendentes simultaneamente?",
    answer: "Sim, o Zoldy permite vários atendentes para garantir um atendimento contínuo e bem organizado. Quando um cliente solicita suporte humano, todos os atendentes são notificados para que possam responder rapidamente.",
  },
  {
    ask: "O bot pode cometer erros nas respostas?",
    answer: "Embora o Zoldy seja projetado para fornecer respostas precisas, ele pode ocasionalmente cometer erros. Estamos continuamente aprimorando o sistema para minimizar essas ocorrências e garantir que as respostas sejam cada vez mais precisas.",
  },
  {
    ask: "Como posso começar a usar o Zoldy no meu e-commerce?",
    answer: "Para começar a usar o Zoldy, preencha seu e-mail para entrar na nossa lista de espera. Entraremos em contato com você assim que o sistema estiver disponível e forneceremos todas as informações necessárias para configurar e integrar o bot ao seu e-commerce.",
  },
  {
    ask: "Como funcionam os créditos no Zoldy?",
    answer: "O Zoldy opera com um sistema de créditos: cada resposta automática fornecida pelo bot consome um crédito. Cada plano do Zoldy inclui uma quantidade específica de créditos, mas você pode comprar créditos adicionais a qualquer momento conforme necessário. Diferente de outras plataformas, os créditos não reiniciam mensalmente, permitindo uma gestão mais flexível e econômica.",
  },
  {
    ask: "Quais são as vantagens do Zoldy em comparação com outras soluções de atendimento ao cliente?",
    answer: "O Zoldy se destaca por sua integração fácil com e-commerce, automação de respostas sobre produtos e pedidos, e capacidade de enviar notificações. Essas funcionalidades proporcionam uma solução eficiente e econômica, melhorando a experiência do cliente e a gestão do atendimento.",
  },
  {
    ask: "Há suporte disponível caso eu tenha problemas ou dúvidas?",
    answer: "Sim, oferecemos suporte técnico para resolver qualquer problema ou dúvida que você possa ter ao usar o Zoldy. Nossa equipe está disponível para garantir que você obtenha o máximo da nossa plataforma e resolva quaisquer questões rapidamente.",
  },
];
export default function Home() {
  return (
    <>
      <Main
        words={words}
        title="Seu e-commerce com"
        features={[
          "Chat inteligente",
          "Multiplos atendentes",
          "Atualização do pedido pelo whatsapp",
          "Suporte 24 horas por dia",
          "Integração simplificada",
        ]}
        subtitle="Aumente as vendas e a satisfação dos seus clientes com o nosso chat 100% automatizado!"
      />
      <Companies />
      <Feature features={features} />
      <HowWorks />
      <PainPoints painPoints={painPoints} />
      <Ask />
      <SubmitEmail label="Quero me cadastrar para usar o Zoldy" />
      <FAQ faqList={faqList} />
      <ContactUs />
      <Footer />
    </>
  );
}