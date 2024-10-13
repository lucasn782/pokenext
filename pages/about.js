import Image from "next/image";
import styles from "../styles/About.module.css"
import Link from "next/link";

export default function About() {
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Este projeto se trata de uma Pokedex construída usando o Next.js! Contendo 251 pokemóns, com dados referentes aos mesmos. Como seu nome, tipo, altura e peso. Criado por <Link href="https://github.com/lucasn782">lucasn782</Link>.</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
        </div>
    );
}