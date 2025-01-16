// Styles
import styles from "./page.module.scss";
// Public & Assets
import HeroImg from "@/public/hero.png";
import IconHtml from "../../public/techstack/html.svg";
import IconCss from "../../public/techstack/css.svg";
import IconSass from "../../public/techstack/scss.svg";
import IconJs from "../../public/techstack/js.svg";
import IconReact from "../../public/techstack/react.svg";
import IconNextjs from "../../public/techstack/nextjs.svg";
import IconGit from "../../public/techstack/git.svg";
import IconGithub from "../../public/techstack/github.svg";
import IconPython from "../../public/techstack/python.svg";
import IconFigma from "../../public/techstack/figma.svg";
// React/Next Functions
import Image from "next/image";
import Link from "next/link";
// Context & Actions

// Componenets
import Btn from "@/components/btn/btn.component";
import {
  Showcase,
  ShowcaseItem,
} from "@/components/showcase/showcase.component";

const Page = () => {
  return (
    <main className={styles.main}>
      <section className={`${styles.introduction}`}>
        <div className={`${styles.imgContainer}`}>
          <Image src={HeroImg} alt="portrait" priority />
        </div>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.titleContainer}`}>
            <span>O MNĚ</span>
            <h1>
              Zdravím,
              <br />
              jmenuji se Adam <strong>Bartůšek</strong>
            </h1>
            <hr />
          </div>
          <div className={`${styles.textContainer}`}>
            <p>
              Jsem programátor specializující se na moderní webové technologie.
              Nabízím komplexní služby v oblasti vývoje webových stránek,
              e-shopů a webových aplikací. Moje práce klade důraz na rychlost,
              funkčnost a uživatelskou přívětivost.
            </p>
            <br />
            <p>
              Každý projekt tvořím na míru, s ohledem na vaše potřeby a cíle.
              Mým cílem je nejen splnit vaše očekávání, ale také je překonat.
              Společně vytvoříme řešení, které vás odliší a posune vaše
              podnikání vpřed.
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.showcase}`}>
        <Showcase>
          <ShowcaseItem>
            <Image src={IconHtml} alt="" />
          </ShowcaseItem>
          <ShowcaseItem>
            <Image src={IconCss} alt="" />
          </ShowcaseItem>
          <ShowcaseItem>
            <Image src={IconSass} alt="" />
          </ShowcaseItem>
          <ShowcaseItem>
            <Image src={IconJs} alt="" />
          </ShowcaseItem>
          <ShowcaseItem>
            <Image src={IconReact} alt="" />
          </ShowcaseItem>
          <ShowcaseItem>
            <Image src={IconNextjs} alt="" />
          </ShowcaseItem>
          <ShowcaseItem>
            <Image src={IconGit} alt="" />
          </ShowcaseItem>
          <ShowcaseItem>
            <Image src={IconGithub} alt="" />
          </ShowcaseItem>
          <ShowcaseItem>
            <Image src={IconPython} alt="" />
          </ShowcaseItem>
          <ShowcaseItem>
            <Image src={IconFigma} alt="" />
          </ShowcaseItem>
        </Showcase>
      </section>
      <section className={`${styles.experience}`}>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.titleContainer}`}>
            <span>MOJE CESTA</span>
            <h1>
              Zkušenosti s <strong>webovými</strong> technologiemi
            </h1>
            <hr />
          </div>
        </div>
        <div className={`${styles.boxContainer}`}>
          <div className={`${styles.box}`}>
            <h6>březen 2022</h6>
            <hr />
            <p>
              Započal jsem svoji cestu programování, která se stala základem mé
              profesní dráhy v oblasti webového vývoje.
            </p>
          </div>
          <div className={`${styles.box}`}>
            <h6>leden 2024</h6>
            <hr />
            <p>
              Začal jsem pracovat ve firmě ComArr jako webový vývojář. Vyvíjím
              zde webovou aplikaci pro tisíce uživatelů.
            </p>
          </div>
          <div className={`${styles.box}`}>
            <h6>květen 2024</h6>
            <hr />
            <p>
              Úspěšně jsem dokončil bakalářské studium v oboru informačního
              managementu na Univerzitě Hradec Králové.
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.specialization}`}>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.titleContainer}`}>
            <span>VIZE</span>
            <h1>
              Vyvíjím <strong>autentické</strong> weby
            </h1>
            <hr />
          </div>
          <div className={`${styles.textContainer}`}>
            <p>
              Specializuji se na Next.js, což mi umožňuje vytvářet výkonné,
              škálovatelné a moderní webové aplikace. Nepoužívám předvytvořené
              šablony ani knihovny – každý projekt je navržen a implementován od
              základů tak, aby dokonale odpovídal vašim potřebám.
            </p>
            <br />
            <p>
              Díky tomuto přístupu je váš web nejen unikátní, ale také
              optimalizovaný pro výkon a přizpůsobený specifikám vašeho
              podnikání.
            </p>
          </div>
        </div>
        <div className={`${styles.imgContainer}`}>
          <Image src={HeroImg} alt="portrait" />
        </div>
      </section>
      <section className={`${styles.cta}`}>
        <div className={`${styles.titleContainer}`}>
          <span>SPOLUPRÁCE</span>
          <h1>
            Připraven realizovat <strong>Váš</strong> projekt?
          </h1>
          <hr />
        </div>
        <div className={`${styles.textContainer}`}>
          <p>
            Pokud hledáte webového vývojáře, který Vám vytvoří autentický,
            moderní a výkonný web na míru, jste na správném místě. Společně
            vytvoříme řešení, které bude nejen funkční, ale také vynikat v
            konkurenci.
          </p>
        </div>
        <Btn
          href="/kontakt"
          bgColor="var(--color-primary)"
          textColor="var(--color-text-reverse)"
          borderSize="none"
          hoverEffect="scaleForward"
        >
          Kontaktujte mě
        </Btn>
      </section>
    </main>
  );
};

export default Page;
