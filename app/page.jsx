// Styles
import styles from "./page.module.scss";
// Public & Assets
import HeroImg from "@/public/hero.png";
// React/Next Functions
import Image from "next/image";
import dynamic from "next/dynamic";
// Context

// Componenets
const LazyPortfolioRotatedGrid = dynamic(() => import("@/components/portfolio-rotated-grid/portfolio-rotated-grid.component"), {ssr: false})

import Btn from "@/components/btn/btn.component";
// import PortfolioRotatedGrid from "@/components/portfolio-rotated-grid/portfolio-rotated-grid.component";

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <section className={`${styles.hero}`}>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.titleContainer}`}>
            {/* <span>O MNĚ</span> */}
            <h1>
              Vytvořím Vám <strong>úspěšný</strong> web
            </h1>
            <hr />
          </div>
          <div className={`${styles.textContainer}`}>
            <p>
              Jmenuji se Adam Bartůšek a specializuji se na vývoj webových
              stránek a e-shopů. Každý projekt tvořím od základu a vše sám
              programuji. Neváhejte mě kontaktovat a společně najdeme to
              nejlepší řešení přesně pro Vás.
            </p>
          </div>
          <div className={`${styles.btnsContainer}`}>
            <Btn
              href="/kontakt"
              bgColor="var(--color-primary)"
              textColor="var(--color-text-reverse)"
              borderSize="none"
              hoverEffect="scaleForward"
            >
              Kontakt
            </Btn>
            {/* <Btn
              borderSize="none"
              borderRadius="20px"
              bgColor="var(--color-background)"
              filter="drop-shadow(0 0 5px var(--black-50))"
              bgHoverColor="var(--color-ascent)"
              textHoverColor="var(--color-text-reverse)"
              hoverEffect="cfLeft"
            >
              Nabídka
            </Btn> */}
          </div>
        </div>
        <div className={`${styles.imgContainer}`}>
          <Image src={HeroImg} alt="Hero section image" priority={true} />
        </div>
      </section>
      <section className={`${styles.services}`}>
        <div className={`${styles.imgContainer}`}>
          <Image src={HeroImg} alt="Hero section image" />
        </div>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.titleContainer}`}>
            <span>MOJE SLUŽBY</span>
            <h1>
              IDK DOKAZU NAKODIT VSE <strong>výjimečné</strong> weby
            </h1>
            <hr />
          </div>
          <div className={`${styles.textContainer}`}>
            <p>
              Poskytuji komplexní služby v oblasti webového vývoje, od moderních
              webových stránek a e-shopů až po výkonné webové aplikace, které
              odpovídají vašim jedinečným potřebám.
            </p>
            <ul className={`${styles.servicesList}`}>
              <li>• Webové stránky</li>
              <li>• E-shopy</li>
              <li>• Webové aplikace</li>
            </ul>
          </div>
          <Btn
            href="/sluzby"
            bgColor="var(--color-primary)"
            textColor="var(--color-text-reverse)"
            borderSize="none"
            hoverEffect="scaleForward"
          >
            Zjistit více
          </Btn>
        </div>
      </section>
      <section className={`${styles.portfolio}`}>
        <div className={`${styles.contentContainer}`}>
        <div className={`${styles.titleContainer}`}>
            <span>PORTFOLIO</span>
            <h1>
              Podívejte se na <strong>moje</strong> projekty
            </h1>
            <hr />
          </div>
          <div className={`${styles.textContainer}`}>
            <p>
              Níže jsou projekty, které jsem vytvořil pro inspiraci.
            </p>
          </div>
        </div>
        <LazyPortfolioRotatedGrid />
      </section>
      <section className={`${styles.testimonials}`}>
          {/* TODO TESTIMONIALS */}
      </section>
    </main>
  );
}
