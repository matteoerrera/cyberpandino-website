import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import "./Homepage.scss";
import { state } from "../../store/state";
import { useSnapshot } from "valtio";
import { useEffect } from "react";
import * as motion from "motion/react-client"
import Hero from "../../components/Hero";
import InfoCards from "../../components/InfoCards";
import Video from "../../components/Video";
import ContentSlider from "../../components/ContentSlider";
import Parallax from "../../components/Parallax";
import ContentParallax from "../../components/ContentParallax";
import ContentHorizontal from "../../components/ContentHorizontal";
import ScrollableMap from "../../components/ScrollableMap";
import HeroOld from "../../components/HeroOld";
import Image from "../../components/Image";
import { Seo } from "../../components/Seo";

export default function Welcome() {
    const { t } = useTranslation();
    const navigate = useNavigate();


    return ( 
        <>
        <Seo 
            title="Cyberpandino"
            description="Una vecchia Panda del 2003, un viaggio senza regole, senza limiti… senza senso! Un veicolo digitale nato per (non) sopravvivere all’avventura più folle del mondo."
            name="Cyberpandino"
            type="website"
        />
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pageHomepage"

            
        >   
        
           {/*  <Hero 
                brand="./brand/cyberpandino.svg"
                title="Cyberpandino"
                description="Nato per (non) sopravvivere all’avventura </br>più folle del mondo."
                image="./images/routes/home/hero.avif"
                buttons={[
                    {
                        label: "Button 1",
                        onClick: () => {
                            navigate("/");
                        }
                    }
                ]}
                stats={[
                    {
                        value: "5",
                        um: "Star",
                        label: "Safety Rating"
                    },
                    {
                        label: "Range (est.)4 Available",
                        value: "362",
                        um: "mi"
                    }
                ]}
            /> */}
             <HeroOld 
                brand="./brand/cyberpandino-logo-font.svg"
                title="Cyberpandino"
                description="Nato per (non) sopravvivere all’avventura </br>più folle del mondo."
                image="./images/routes/home/hero.avif"
                video="1093638269"
                buttons={[
                    {
                        label: "Button 1",
                        onClick: () => {
                            navigate("/");
                        }
                    }
                ]}
                stats={[
                    {
                        value: "5",
                        um: "Star",
                        label: "Safety Rating"
                    },
                    {
                        label: "Range (est.)4 Available",
                        value: "362",
                        um: "mi"
                    }
                ]}
            />
            <InfoCards
                cards={[
                    {
                        value: "1.060",
                        unit: "kg",
                        description: "Peso a vuoto" 
                    },
                    {
                        value: "38",
                        unit: "",
                        description: "Cavalli pieni di entusiasmo" 
                    },
                    {
                        value: "8,2",
                        unit: "s",
                        description: "0-100 in discesa" 
                    },
                    {
                        value: "4.990",
                        unit: "kg",
                        description: "Capacità di traino (testato solo una volta)" 
                    },
                    {
                        value: "27",
                        unit: "%",
                        description: "Probabilità che arrivi in Mongolia" 
                    },
                    {
                        value: "∞",
                        unit: "vibes",
                        description: "Cyber-spirito per km" 
                    }
                ]}
                image="./images/routes/home/cyperpandino-from.jpg"
                afterImage="./images/routes/home/cyperpandino-to.jpg"
            />
            <Video
                classes="pt-0"
                video="1094949947"
                title="Costruito per essere utilizzato su ogni pianeta"
                text="Abbastanza resistente da affrontare deserti, steppe e… rotatorie romane. Sospensioni improvvisate, assetto incerto, ma cuore indomito. Altezza da terra? Quel che basta per planare sulle buche. Due ruote motrici, perché quattro costavano troppo."
            />
            <ContentSlider
                classes="reverse-slides py-0"
                content={[
                    {
                        title: "Un viaggio senza regole, senza limiti… senza senso",
                        text: "Siamo Matteo e Roberto, due programmatori senza alcuna esperienza in ambito meccanico ma con un progetto ambizioso, se non proprio folle: partecipare al Mongol Rally 2025 a bordo del nostro Cyberpandino.",
                        image: "./images/proprietario.jpg"
                    },
                    {
                        title: "Da Lampedusa al Kazakistan",
                        text: "Dal punto più a sud d’Europa attraverseremo Italia, Austria, Repubblica Ceca, Slovacchia, Ungheria, Serbia, Bulgaria, Turchia, Iran, Afghanistan, Tagikistan, Kirghizistan e Kazakistan. La spedizione durerà circa un mese e mezzo.",
                        image: "./images/pianeta.png"
                    },
                    {
                        title: "Da Panda a Cyberpandino",
                        text: "Abbiamo preso una Fiat Panda del 2003 e l’abbiamo portata nel futuro. O almeno… ci abbiamo provato. Concentrato di tecnologia, equipaggiandola con sistemi intelligenti, sensori ambientali e strumenti digitali. Non è più solo un’auto, è un compagno di viaggio.",
                        video: "1094961197"
                    },
                ]}
            />
           {/*  <ContentHorizontal  
                classes=""
            /> */}
            <Video
                classes="cockpit"
                video="1096401697"
                title="Il cuore digitale del Cyberpandino"
                text="Un sistema operativo per gestire sensori, interfacce, moduli smart e... l’umore della macchina. Non è (ancora) elegante. Non è (ancora) stabile. Tutto open source su GitHub, perché vogliamo dimostrare che una digitalizzazione accessibile, creativa e funzionale è possibile, anche su una Panda del 2003."            
            />
            <ContentSlider
                classes="reverse-slides py-0"
                content={[
                    {
                        title: "Due cervelli, un solo Pandino",
                        text: "Un quadro strumenti digitale dietro al volante e un sistema di infotainment centrale in stile Tesla. Insieme mostrano tutto: velocità, giri motore, assetto del veicolo, temperatura, carburazione, tensione batteria e molto altro.",
                        video: "1094978671"
                    },
                    {
                        title: "Assistenza alla guida",
                        text: "Riconoscimento della carreggiata, rilevamento della stanchezza, monitoraggio dei parametri ambientali, sensori di assetto sui tre assi e altri strumenti che fanno sembrare una Panda... quasi intelligente. Non guiderà da sola, ma ti segnalerà quando stai guidando male.",
                        image: "./images/interni.webp"
                    },
                    {
                        title: "“Ehi Panda…”",
                        text: "un sistema vocale che ricorda un po’ Jarvis, ma con meno british e più sarcasmo. È un compagno di viaggio che parla, commenta, osserva e — spesso — giudica. Non è solo tecnologia: è personalità.",
                        image: "./images/hey-panda.jpg"
                    }
                ]}
            />
            {/* <ContentParallax
                classes=""
                content={[
                    {
                        title: "Costruito per essere utilizzato su ogni pianeta",
                        text: "Abbastanza resistente da raggiungere qualsiasi destinazione. Affronta ogni superficie con le sospensioni pneumatiche adattive elettroniche, che offrono un'escursione di 305 mm e un'altezza da terra di 406 mm.",
                    },
                    {
                        title: "Costruito per essere utilizzato su ogni pianeta",
                        text: "Abbastanza resistente da raggiungere qualsiasi destinazione. Affronta ogni superficie con le sospensioni pneumatiche adattive elettroniche, che offrono un'escursione di 305 mm e un'altezza da terra di 406 mm.",
                    },
                    {
                        title: "Costruito per essere utilizzato su ogni pianeta",
                        text: "Abbastanza resistente da raggiungere qualsiasi destinazione. Affronta ogni superficie con le sospensioni pneumatiche adattive elettroniche, che offrono un'escursione di 305 mm e un'altezza da terra di 406 mm.",
                    },
                    {
                        title: "Costruito per essere utilizzato su ogni pianeta",
                        text: "Abbastanza resistente da raggiungere qualsiasi destinazione. Affronta ogni superficie con le sospensioni pneumatiche adattive elettroniche, che offrono un'escursione di 305 mm e un'altezza da terra di 406 mm.",
                    }
                ]}
                images={[
                    "./images/routes/home/hero.avif",
                    "https://images.pexels.com/photos/12715153/pexels-photo-12715153.jpeg",
                    "https://images.pexels.com/photos/32315959/pexels-photo-32315959/free-photo-of-vogue-ma-rendilo-primate.jpeg",
                    "./images/routes/home/hero.avif"
                ]}
            /> */}
            <Image
                image="./images/pixel.jpg"
                title="Un pixel per far parte dell'assurdità"
                text="Un’iniziativa ispirata allo storico One Million Dollar Homepage per coinvolgere la nostra community in modo diretto: metteremo a disposizione spazi sulla carrozzeria del Cyberpandino dove chiunque potrà inserire un’immagine, una frase, un meme o un messaggio da portare con noi in viaggio."
            />
             <ContentSlider
                classes="reverse-slides py-0"
                content={[
                    {
                        title: "Una vacanza alternativa",
                        text: "Per qualcuno il Mongol Rally è una vacanza low cost. Noi l’abbiamo sovrastrutturato così tanto da spenderci quanto una settimana a Ferragosto in Sardegna… a testa… per i prossimi dieci anni. I contributi e i pixel ci aiutano a rientrare, almeno simbolicamente, in una minima parte delle spese di viaggio. Il resto lo mettiamo noi: benzina, sogni e (poca) razionalità.",
                        image: "./images/rally.jpg"
                    },
                    {
                        title: "Save the World",
                        text: "Il pianeta è il nostro parco giochi, quindi ci sembra giusto restituirgli qualcosa. Parte delle donazioni raccolte verrà destinata tramite The Adventurists alla protezione della foresta amazzonica, sostenendo Cool Earth, l’associazione ufficiale del Mongol Rally. Ogni km percorso è anche un piccolo passo per difendere qualcosa di molto più grande.",
                        image: "./images/foresta.jpg"
                    },
                    {
                        title: "Salviamo le tartarughe (sul serio)",
                        text: "Siamo partiti da Lampedusa e lì vogliamo lasciare un segno concreto. Alcune zone dell’auto saranno dedicate alla Turtle Rescue di Lampedusa, e tutto il ricavato dei pixel in quelle aree sarà donato all’associazione locale che si occupa della salvaguardia delle tartarughe marine. Perché anche una Panda del 2003 può fare la differenza, nel suo piccolo.",
                        image: "./images/tartaruga.jpg"
                    }
                ]}
                
            />
           
            {/*  <ContentSlider
                classes="pt-0"
                content={[
                    {
                        title: "Costruito per essere utilizzato su ogni pianeta",
                        text: "Abbastanza resistente da raggiungere qualsiasi destinazione. Affronta ogni superficie con le sospensioni pneumatiche adattive elettroniche, che offrono un'escursione di 305 mm e un'altezza da terra di 406 mm.",
                        image: "./images/routes/home/hero.avif"
                    },
                    {
                        title: "Costruito per essere utilizzato su ogni pianeta",
                        text: "Abbastanza resistente da raggiungere qualsiasi destinazione. Affronta ogni superficie con le sospensioni pneumatiche adattive elettroniche, che offrono un'escursione di 305 mm e un'altezza da terra di 406 mm.",
                        video: "./videos/Cybertruck-Built-For-Any-Planet-Mobile.webm"
                    }
                ]}
            /> */}
        

            {/* <ScrollableMap
                classes=""
            /> */}

            
        </motion.div>
        </>
    )
}


