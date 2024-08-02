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

const words = ["super poderes", "respostas automaticas", "agendamento de mensagens",  "multiplos atendentes", "suporte 24hs"];
const features = [
  {
    title: "Resposta automatica",
    description: "Mantenha seus clientes sempre informados e satisfeitos com respostas automáticas instantâneas. Economize tempo e melhore o atendimento ao cliente, oferecendo respostas rápidas e precisas para qualquer pergunta, 24 horas por dia, 7 dias por semana.",
    iconSrc: "/icons/resposta-automatica.svg"
  },
  {
    title: "Envie Mensagens Promocionais com Facilidade",
    description: "Deseja notificar todos os seus contatos sobre uma promoção especial? Com apenas alguns cliques, você pode enviar mensagens automáticas para todos os seus contatos, garantindo que suas campanhas promocionais sejam vistas por todos. Aproveite a automação e maximize o alcance das suas mensagens promocionais sem esforço.",
    reverse: true,
    iconSrc: "/icons/mensagens-promocionais.svg"
  },
  {
    title: "Suporte a Múltiplos Atendentes em um Só Número",
    description: "Maximize a eficiência do seu atendimento ao cliente, nosso sistema permite que múltiplos atendentes utilizem um único número. Dessa forma, sua equipe pode gerenciar e responder às mensagens de clientes simultaneamente, garantindo um atendimento mais rápido e eficaz, sem a necessidade de múltiplas linhas telefônicas.",
    iconSrc: "/icons/suporte-multiplos-atendentes.svg"
  },
  {
    title: "Agendamento de mensagens",
    description: "Planeje e envie suas comunicações no momento perfeito com a funcionalidade de agendamento de mensagens. Programe mensagens para serem enviadas automaticamente em datas e horários específicos, garantindo que suas campanhas e lembretes cheguem aos clientes na hora certa, sem a necessidade de intervenção manual.",
    reverse: true,
    iconSrc: "/icons/agendamento-mensagens.svg"
  }
];
const painPoints = [
  {
    title: "Para Quem Se Cansou de Respostas Lentas",
    description: "Está cansado de perder clientes devido a respostas lentas e demoradas? Zoldy fornece respostas automáticas instantâneas, garantindo que seus clientes recebam atenção imediata, 24 horas por dia, 7 dias por semana.",
  },
  {
    title: "Para Quem Lida com Perguntas Simples e Sem Compras",
    description: "Está frustrado com o tempo gasto respondendo perguntas simples que não resultam em compras? Zoldy automatiza a resposta a essas perguntas, permitindo que sua equipe se concentre em questões mais complexas e produtivas.",
  },
  {
    title: "Para Quem Gerencia Múltiplos Atendentes",
    description: "Tem dificuldades para coordenar múltiplos atendentes com diferentes números de WhatsApp? Zoldy permite que vários atendentes utilizem um único número, facilitando um atendimento mais organizado e eficiente.",
  },
  {
    title: "Para Quem Envia Mensagens Promocionais Manualmente",
    description: "Está cansado de perder tempo enviando mensagens promocionais manualmente? Com Zoldy, você pode enviar mensagens em massa para todos os seus contatos de forma rápida e eficiente.",
  },
  {
    title: "Para Quem Perde Prazos para Enviar Mensagens",
    description: "Está frustrado por perder prazos importantes para enviar mensagens? Zoldy permite o agendamento automático de mensagens, garantindo que suas comunicações sejam enviadas no momento exato sem esforço adicional.",
  },
  {
    title: "Para Quem Se Preocupa com Erros Humanos",
    description: "Preocupa-se com erros humanos nas respostas e agendamentos? Zoldy automatiza essas tarefas, minimizando erros e garantindo precisão e consistência nas suas comunicações.",
  },
]
const faqList = [
  {
    ask: "O que é Zoldy?",
    answer: "Zoldy é um bot para WhatsApp que utiliza um modelo de linguagem avançado para gerar respostas automáticas. Ele ajuda a automatizar o atendimento ao cliente, proporcionando respostas instantâneas, enviando mensagens em massa, suportando múltiplos atendentes em um único número e permitindo o agendamento de mensagens."
  },
  {
    ask: "Como Zoldy pode ajudar meu negócio?",
    answer: "Zoldy economiza tempo e aumenta a eficiência automatizando respostas a perguntas frequentes, gerenciando múltiplos atendentes com um único número e agendando mensagens para garantir que suas comunicações sejam enviadas no momento ideal. Isso permite que sua equipe se concentre em tarefas mais importantes."
  },
  {
    ask: "Como funciona o Zoldy e que tipo de dados ele usa para responder?",
    answer: "Zoldy funciona analisando e processando os dados que você fornece para gerar respostas precisas. Para que o bot possa responder às perguntas de seus clientes de forma eficaz, é necessário fornecer informações em formatos como PDF, DOCX, XML, CSV, XLSX, TXT, ou até mesmo copiar e colar o conteúdo diretamente. Esses dados são utilizados para treinar e ajustar o modelo, garantindo que as respostas sejam relevantes e úteis."
  },
  {
    ask: "É possível personalizar as mensagens enviadas pelo bot?",
    answer: "As mensagens enviadas por Zoldy são geradas dinamicamente com base nas perguntas dos clientes, utilizando inteligência artificial. Isso significa que, em vez de mensagens pré-definidas, o bot cria respostas relevantes e adaptadas a cada consulta específica."
  },
  {
    ask: "Como funciona o agendamento de mensagens?",
    answer: "O agendamento de mensagens permite que você programe comunicações para serem enviadas automaticamente em datas e horários específicos. Isso garante que suas mensagens promocionais e lembretes sejam entregues no momento exato, sem a necessidade de ação manual."
  },
  {
    ask: "Zoldy pode lidar com múltiplos atendentes ao mesmo tempo?",
    answer: "Sim, Zoldy permite que vários atendentes utilizem um único número de WhatsApp, facilitando um atendimento contínuo e bem organizado."
  },
  {
    ask: "O bot pode cometer erros nas respostas?",
    answer: "Embora Zoldy seja projetado para fornecer respostas precisas, ele pode ocasionalmente cometer erros. Estamos constantemente aprimorando o sistema para reduzir essas ocorrências e melhorar a precisão das respostas."
  },
  {
    ask: "Como posso me cadastrar para usar Zoldy?",
    answer: "No momento, o Zoldy ainda está em desenvolvimento, mas preenchendo seu email você vai entrar na nossa lista de espera e sabendo de todas as novidades. Assim que o sistema estiver disponível, entraremos em contato com você para fornecer acesso e informações sobre como configurar o bot."
  },
  {
    ask: "Quais são os benefícios de usar Zoldy em comparação com outros sistemas de atendimento?",
    answer: "Zoldy se destaca por sua capacidade de automatizar respostas, gerenciar múltiplos atendentes com um único número e agendar mensagens. Isso proporciona uma solução integrada e eficiente que economiza tempo e melhora a experiência do cliente."
  },
  {
    ask: "Há algum suporte disponível se eu tiver problemas ou dúvidas?",
    answer: "Sim, oferecemos suporte técnico para ajudar com quaisquer problemas ou dúvidas que você possa ter ao usar Zoldy. Nossa equipe está aqui para garantir que você tenha a melhor experiência possível com nossa plataforma."
  }
]
export default function Home() {
  return (
    <>
      <Main 
        words={words}
        title="Whatsapp com"
        features={["Responstas automaticas", "Envio de mensagens em massa", "Multiplos atendentes em 1 só número", "Agendamento de mensagens"]}
        subtitle="Transforme seu WhatsApp em uma máquina de vendas 100% automatizada e deixe seus concorrentes para trás!"
      />
      <Feature features={features} />
      <HowWorks />
      <Companies />
      <PainPoints painPoints={painPoints} />
      <Ask />
      <SubmitEmail label="Quero me cadastrar para usar o Zoldy" />
      <FAQ faqList={faqList} />
      <ContactUs />
      <Footer />
    </>
  );
}