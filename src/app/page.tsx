'use client';
import { BadgeCheckIcon }  from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { Highlight } from "@/components/ui/hero-highlight";
import { Feature } from "@/components/feature";
import Subtitle from "@/components/sub-title";
import Section from "@/components/section";
import { InfiniteScroll } from "@/components/infinite-scroll";
import { PainPoints } from "@/components/pain-points";
import SubmitEmail from "@/components/submit-email";
import { FAQ } from "@/components/FAQ";
import LinkButton from "@/components/link-button";
import { RiWhatsappFill } from "react-icons/ri";
import Logo from "@/components/logo";
import MainButton from "@/components/main-button";
import BackgroundBubble from "@/components/background-bubble";

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
    description: "Está cansado de perder clientes devido a respostas lentas e demoradas? L Voltia fornece respostas automáticas instantâneas, garantindo que seus clientes recebam atenção imediata, 24 horas por dia, 7 dias por semana.",
  },
  {
    title: "Para Quem Lida com Perguntas Simples e Sem Compras",
    description: "Está frustrado com o tempo gasto respondendo perguntas simples que não resultam em compras? L Voltia automatiza a resposta a essas perguntas, permitindo que sua equipe se concentre em questões mais complexas e produtivas.",
  },
  {
    title: "Para Quem Gerencia Múltiplos Atendentes",
    description: "Tem dificuldades para coordenar múltiplos atendentes com diferentes números de WhatsApp? L Voltia permite que vários atendentes utilizem um único número, facilitando um atendimento mais organizado e eficiente.",
  },
  {
    title: "Para Quem Envia Mensagens Promocionais Manualmente",
    description: "Está cansado de perder tempo enviando mensagens promocionais manualmente? Com L Voltia, você pode enviar mensagens em massa para todos os seus contatos de forma rápida e eficiente.",
  },
  {
    title: "Para Quem Perde Prazos para Enviar Mensagens",
    description: "Está frustrado por perder prazos importantes para enviar mensagens? L Voltia permite o agendamento automático de mensagens, garantindo que suas comunicações sejam enviadas no momento exato sem esforço adicional.",
  },
  {
    title: "Para Quem Se Preocupa com Erros Humanos",
    description: "Preocupa-se com erros humanos nas respostas e agendamentos? L Voltia automatiza essas tarefas, minimizando erros e garantindo precisão e consistência nas suas comunicações.",
  },
]
const faqList = [
  {
    ask: "O que é L Voltia?",
    answer: "L Voltia é um bot para WhatsApp que utiliza um modelo de linguagem avançado para gerar respostas automáticas. Ele ajuda a automatizar o atendimento ao cliente, proporcionando respostas instantâneas, enviando mensagens em massa, suportando múltiplos atendentes em um único número e permitindo o agendamento de mensagens."
  },
  {
    ask: "Como L Voltia pode ajudar meu negócio?",
    answer: "L Voltia economiza tempo e aumenta a eficiência automatizando respostas a perguntas frequentes, gerenciando múltiplos atendentes com um único número e agendando mensagens para garantir que suas comunicações sejam enviadas no momento ideal. Isso permite que sua equipe se concentre em tarefas mais importantes."
  },
  {
    ask: "Como funciona o L Voltia e que tipo de dados ele usa para responder?",
    answer: "L Voltia funciona analisando e processando os dados que você fornece para gerar respostas precisas. Para que o bot possa responder às perguntas de seus clientes de forma eficaz, é necessário fornecer informações em formatos como PDF, DOCX, XML, CSV, XLSX, TXT, ou até mesmo copiar e colar o conteúdo diretamente. Esses dados são utilizados para treinar e ajustar o modelo, garantindo que as respostas sejam relevantes e úteis."
  },
  {
    ask: "É possível personalizar as mensagens enviadas pelo bot?",
    answer: "As mensagens enviadas por L Voltia são geradas dinamicamente com base nas perguntas dos clientes, utilizando inteligência artificial. Isso significa que, em vez de mensagens pré-definidas, o bot cria respostas relevantes e adaptadas a cada consulta específica."
  },
  {
    ask: "Como funciona o agendamento de mensagens?",
    answer: "O agendamento de mensagens permite que você programe comunicações para serem enviadas automaticamente em datas e horários específicos. Isso garante que suas mensagens promocionais e lembretes sejam entregues no momento exato, sem a necessidade de ação manual."
  },
  {
    ask: "L Voltia pode lidar com múltiplos atendentes ao mesmo tempo?",
    answer: "Sim, L Voltia permite que vários atendentes utilizem um único número de WhatsApp, facilitando um atendimento contínuo e bem organizado."
  },
  {
    ask: "O bot pode cometer erros nas respostas?",
    answer: "Embora L Voltia seja projetado para fornecer respostas precisas, ele pode ocasionalmente cometer erros. Estamos constantemente aprimorando o sistema para reduzir essas ocorrências e melhorar a precisão das respostas."
  },
  {
    ask: "Como posso me cadastrar para usar L Voltia?",
    answer: "No momento, o L Voltia ainda está em desenvolvimento, mas preenchendo seu email você vai entrar na nossa lista de espera e sabendo de todas as novidades. Assim que o sistema estiver disponível, entraremos em contato com você para fornecer acesso e informações sobre como configurar o bot."
  },
  {
    ask: "Quais são os benefícios de usar L Voltia em comparação com outros sistemas de atendimento?",
    answer: "L Voltia se destaca por sua capacidade de automatizar respostas, gerenciar múltiplos atendentes com um único número e agendar mensagens. Isso proporciona uma solução integrada e eficiente que economiza tempo e melhora a experiência do cliente."
  },
  {
    ask: "Há algum suporte disponível se eu tiver problemas ou dúvidas?",
    answer: "Sim, oferecemos suporte técnico para ajudar com quaisquer problemas ou dúvidas que você possa ter ao usar L Voltia. Nossa equipe está aqui para garantir que você tenha a melhor experiência possível com nossa plataforma."
  }
]
export default function Home() {
  return (
    <>
      <BackgroundBubble>
        <main className="container relative py-10">
          <header className="flex flex-col items-center text-center mb-10">
            <Logo />
            <div className="flex flex-col items-center space-y-5 my-16">
              <div className="text-foreground text-5xl font-bold">
                <h1>Whatsapp com <span className="sr-only">super poderes</span></h1>
                <FlipWords words={words} className="text-primary" /> <br />
              </div>
              <h2 className="font-medium text-lg md:w-[500px]">
                Transforme seu WhatsApp em uma máquina de vendas 100% automatizada e deixe seus concorrentes para trás!
              </h2>
            </div>
            <MainButton />
          </header>
          <ul className="text-center space-y-2">
            <li className="flex gap-2 items-center justify-center"> <BadgeCheckIcon className="w-4 h-4 text-primary" /> Responstas automaticas</li>
            <li className="flex gap-2 items-center justify-center"> <BadgeCheckIcon className="w-4 h-4 text-primary" /> Envio de mensagens em massa</li>
            <li className="flex gap-2 items-center justify-center"> <BadgeCheckIcon className="w-4 h-4 text-primary" /> Multiplos atendentes em 1 só número</li>
            <li className="flex gap-2 items-center justify-center"> <BadgeCheckIcon className="w-4 h-4 text-primary" /> Agendamento de mensagens</li>
          </ul>
        </main>
      </BackgroundBubble>
      <Section className="text-background bg-gradient-to-r from-foreground to-foreground-lighter"> {/* features */}
          <Subtitle>
            Confira nossas {" "}
            <Highlight duration={1} delay={0.5}>
              incriveis ferramentas
            </Highlight>
          </Subtitle>
          <Feature.Root>
            {
              features.map((feature, index) => (
                <Feature.Item
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  iconSrc={feature.iconSrc}
                  reverse={feature.reverse}
                />
              ))
            }
          </Feature.Root>
      </Section>
      <Section> {/* company examples */}
        <Subtitle>
          Varias empresas já estão usando inteligencia artificial, {" "}
          <Highlight>só você vai ficar para trâs?</Highlight>
        </Subtitle>
        <div className="">
          <InfiniteScroll
            direction="right"
            speed="fast"
            pauseOnHover={false}
          >
            <li className="relative w-full h-[150px] rounded-lg px-8 py-6">
              <Image src="/icons/amazon.svg" alt="amazon" fill />
            </li>
            <li className="relative w-full h-[150px] rounded-lg px-8 py-6">
              <Image src="/icons/facebook.svg" alt="facebook" fill />
            </li>
            <li className="relative w-full h-[150px] rounded-lg px-8 py-6">
              <Image src="/icons/youtube.svg" alt="youtube" fill />
            </li>
            <li className="relative w-full h-[150px] rounded-lg px-8 py-6">
              <Image src="/icons/adobe.svg" alt="adobe" fill />
            </li>
            <li className="relative w-full h-[150px] rounded-lg px-8 py-6">
              <Image src="/icons/google.svg" alt="google" fill />
            </li>
            <li className="relative w-full h-[150px] rounded-lg px-8 py-6">
              <Image src="/icons/microsoft.svg" alt="microsoft" fill />
            </li>
          </InfiniteScroll>
        </div>
      </Section>
      <Section> {/* pain points */}
        <Subtitle>
          Para Quem é L Voltia?
        </Subtitle>
        <PainPoints.Root>
          {
            painPoints.map((painPoint, index) => (
              <PainPoints.Item
                key={index}
                title={painPoint.title}
                description={painPoint.description}
              />
            ))
          }
        </PainPoints.Root>
      </Section>
      <Section className="flex gap-5 items-center"> {/* ask */}
        <div>
          <Subtitle className="text-left mb-5 text-primary">
            PARE E PENSE
          </Subtitle>
          <p>
            Pense em todas as horas desperdiçadas em respostas repetitivas que poderiam ser automatizadas. Você realmente precisa continuar perdendo tempo respondendo clientes manualmente em vez de focar no crescimento do seu negócio?
          </p>
        </div>
        <div className="relative w-full h-[250px]">
          <Image alt="stop and think" src="/icons/ask.svg" fill />
        </div>
      </Section>
      <Section> {/* submit email */}
        <SubmitEmail />
      </Section>
      <Section> {/* FAQ */}
        <div>
          <Subtitle className="mb-0">
            Tem alguma dúvida? Nós respondemos
          </Subtitle>
          <h3 className="text-center font-bold text-lg">FAQ</h3>
        </div>
        <FAQ.Root>
          {
            faqList.map((faq, index) => (
              <FAQ.Item
                key={index}
                ask={faq.ask}
                answer={faq.answer}
              />
            ))
          }
        </FAQ.Root>
      </Section>
      <Section> {/* contact us */}
      <div className="w-full">
          <div
            className={
              "group w-full bg-background overflow-hidden flex flex-col gap-5 lg:flex-row items-center justify-between relative rounded-lg shadow-2xl p-6"
            }
          >
            <div>
              <Subtitle className="uppercase text-primary text-left mb-5">Ainda com dúvidas?</Subtitle>
              <p>Entre em contato conosco através do whatsapp! Vamos responder todas as suas perguntas.</p>
            </div>
            <LinkButton href="https://api.whatsapp.com/send?phone=553199733544" className="px-4 py-2 flex gap-2 items-center">
              <RiWhatsappFill className="w-5 h-5" />
              Tirar duvida
            </LinkButton>
          </div>
        </div>
      </Section>
      <footer className="py-5 flex justify-evenly items-center bg-primary text-background">
        <Logo width={150} height={150} />
        <span className="font-bold opacity-80">© 2024 L Voltia - Todos os direitos reservados</span>
      </footer>
    </>
  );
}