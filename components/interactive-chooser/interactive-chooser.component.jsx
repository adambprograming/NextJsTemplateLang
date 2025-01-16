"use client";
// Styles
import styles from "./interactive-chooser.module.scss";
// Public & Assets
import IconCheckCircle from "@/components/svgs/icon-check-circle.component";
import IconInfoCircle from "@/components/svgs/icon-info-circle.component";
import IconArrowBack from "@/components/svgs/icon-arrow-left-circle.component";
import IconXCircle from "../svgs/icon-x-circle.component";
import IconGlobe from "../svgs/interactive-picker-icons/icon-globe.component";
import IconEshop from "../svgs/interactive-picker-icons/icon-eshop.component";
import IconGears from "../svgs/interactive-picker-icons/icon-gears.component";
import IconCheck from "../svgs/interactive-picker-icons/icon-check.component";
import IconTarget from "../svgs/interactive-picker-icons/icon-target.component";
import IconRocket from "../svgs/interactive-picker-icons/icon-rocket.component";
import IconPerson from "../svgs/interactive-picker-icons/icon-person.component";
import IconShop from "../svgs/interactive-picker-icons/icon-shop.component";
import IconWarehouse from "../svgs/interactive-picker-icons/icon-warehouse.component";
// React/Next Functions
import Image from "next/image";
import { useEffect, useState } from "react";
// Context & Actions

// Componenets
import { Card } from "@/components/card/card.component";
import Btn from "@/components/btn/btn.component";
import { Carousel, CarouselItem } from "../carousel/carousel.component";
import Popup from "../popup/popup.component";

/*
INSTRUCTIONS

*/

const InteractiveChooser = () => {
  const phoneNumber = "+42077780333073";
  const [popupPhone, setPopupPhone] = useState(false);
  const [widthOfWindow, setWidthOfWindow] = useState(1440);
  useEffect(() => {
    if (popupPhone) {
      setTimeout(() => {
        setPopupPhone(false);
      }, 2500);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popupPhone]);
  useEffect(() => {
    const getAndSetInnerWidthOfWindow = () => {
      setWidthOfWindow(window.innerWidth)
    }
    getAndSetInnerWidthOfWindow()
    window.addEventListener("resize", getAndSetInnerWidthOfWindow)
    return () => {
      window.removeEventListener("resize", getAndSetInnerWidthOfWindow)
    }
  }, [])
  const [isFirstCardPicked, setIsFirstCardPicked] = useState(false);
  const [firstCardPick, setFirstCardPick] = useState(0);
  const [isSecondCardPicked, setIsSecondCardPicked] = useState(false);
  const [secondCardPick, setSecondCardPick] = useState(0);
  const [isThirdCardPicked, setIsThirdCardPicked] = useState(false);
  const [thirdCardPick, setThirdCardPick] = useState(0);
  const handleFirstCardFirstOptionClick = () => {
    setIsFirstCardPicked(true);
    setFirstCardPick(1);
    // setSecondCardPick(0)
    // setThirdCardPick(0)
  };
  const handleFirstCardSecondOptionClick = () => {
    setIsFirstCardPicked(true);
    setFirstCardPick(2);
    // setSecondCardPick(0)
    // setThirdCardPick(0)
  };
  const handleFirstCardThirdOptionClick = () => {
    setIsFirstCardPicked(true);
    setFirstCardPick(3);
    // setSecondCardPick(0)
    // setThirdCardPick(0)
  };
  const handleSecondCardFirstOptionClick = () => {
    setIsSecondCardPicked(true);
    setSecondCardPick(1);
    // setThirdCardPick(0)
  };
  const handleSecondCardSecondOptionClick = () => {
    setIsSecondCardPicked(true);
    setSecondCardPick(2);
    // setThirdCardPick(0)
  };
  const handleSecondCardThirdOptionClick = () => {
    setIsSecondCardPicked(true);
    setSecondCardPick(3);
    // setThirdCardPick(0)
  };
  const handlePrevious = () => {
    // If first is choosed, is second choosed ? if true, is next choosed? if not reset last choosedPick
    if (isFirstCardPicked) {
      if (isSecondCardPicked) {
        if (isThirdCardPicked) {
          setIsThirdCardPicked(false);
        } else {
          setIsSecondCardPicked(false);
        }
      } else {
        setIsFirstCardPicked(false);
      }
    }
  };
  const handleResetFromFirst = () => {
    setIsFirstCardPicked(false);
    setIsSecondCardPicked(false);
    setIsThirdCardPicked(false);
  };
  const handleResetFromSecond = () => {
    setIsSecondCardPicked(false);
    setIsThirdCardPicked(false);
  };

  const handleCallOrCopyNumber = () => {
    const userAgent = navigator.userAgent || window.opera;
    // Check, if device have phone functions
    if (/android|iphone|ipad|iPod/i.test(userAgent)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // If not (so desktop), just copy phone
      navigator.clipboard.writeText(phoneNumber).then(
        () => {
          setPopupPhone(true);
        },
        () => {}
      );
    }
  };
  return (
    <div className={`${styles.interactiveChooserContainer}`}>
      {/* PATH */}
      <div className={`${styles.pathChooser}`}>
        <div
          className={`${styles.pathArrow} ${
            isFirstCardPicked ? styles.active : styles.disactive
          }`}
        >
          <Btn
            disabled={!isFirstCardPicked}
            functionOnClick={handlePrevious}
            bgColor="none"
            borderSize="0"
            hoverEffect="scaleBackward"
            ariaLabel="go back"
          >
            <IconArrowBack alt="go back" width={25} height={25} />
          </Btn>
        </div>
        <div
          className={`${styles.pathFirst} ${
            isFirstCardPicked ? styles.active : styles.disactive
          }`}
        >
          <Btn
            functionOnClick={handleResetFromFirst}
            bgColor="none"
            borderSize="0"
            hoverEffect="scaleBackward"
            paddingOfBtn="10px"
            ariaLabel="go back to services choice"
          >
            / Výběr služby
          </Btn>
        </div>
        <div
          className={`${styles.pathSecond} ${
            isSecondCardPicked ? styles.active : styles.disactive
          }`}
        >
          <Btn
            functionOnClick={handleResetFromSecond}
            bgColor="none"
            borderSize="0"
            hoverEffect="scaleBackward"
            paddingOfBtn="10px"
            ariaLabel="go back to subchoice"
          >{`/ ${
            firstCardPick === 1
              ? "Výběr typu webových stránek"
              : firstCardPick === 2
              ? "Výběr typu e-shopu"
              : ""
          }`}</Btn>
        </div>
        <div
          className={`${styles.pathThird} ${
            isThirdCardPicked ? styles.active : styles.disactive
          }`}
        >
          <Btn
            functionOnClick={handleResetFromSecond}
            bgColor="none"
            borderSize="0"
            hoverEffect="scaleBackward"
            paddingOfBtn="10px"
          >{`/ ${
            firstCardPick === 1
              ? "?"
              : firstCardPick === 2
              ? "Výběr typu e-shopu"
              : ""
          }`}</Btn>
        </div>
      </div>
      {/* FIRST PICK */}
      <div className={`${styles.interactiveChooser}`}>
        <div className={`${styles.cardContainer} ${styles.firstCardContainer}`}>
          <Card
            gapFlex="25px"
            paddingOfCard="100px 0px 160px 0px"
            bgColor="rgb(from var(--color-primary) r g b / 0.15)"
            borderSize="none"
            borderRadius="15px"
          >
            <div className={`${styles.titleContainer}`}>
              <span>VÝBĚR SLUŽBY</span>
              <h1>O jaké <strong>služby</strong> máte zájem?</h1>
              <hr />
            </div>
            <div className={`${styles.chooseContainer} ${widthOfWindow < 880 ? styles.carousel : styles.inline}`}>
            {widthOfWindow < 880 ?
              <Carousel fullWidth={true} backdropFilterArrows="" infinite="pseudoInfinite">
                <CarouselItem>
                  <Btn
                    functionOnClick={handleFirstCardFirstOptionClick}
                    paddingOfBtn="20px 10px"
                    bgColor="transparent"
                    borderSize="none"
                    borderRadius="10px"
                    bgHoverColor="var(--black-10)"
                    hoverEffect="bgHover"
                  >
                    <div className={`${styles.imgContainer}`}>
                      <IconGlobe alt="" height={75}  />
                    </div>
                    <div className={`${styles.descriptionContainer}`}>
                      <span className={`${styles.btnTitle}`}>Webové stránky</span>
                      <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Osobní či firemní prezentace</p></div>
                      <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vícejazyčnost</p></div>
                      <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Denní a noční režim</p></div>
                      <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                      <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Rychlá navigace</p></div>
                    </div>
                  </Btn>
                </CarouselItem>
                <CarouselItem>
                  <Btn
                    functionOnClick={handleFirstCardSecondOptionClick}
                    paddingOfBtn="20px 10px"
                    bgColor="transparent"
                    borderSize="none"
                    borderRadius="10px"
                    bgHoverColor="var(--black-10)"
                    hoverEffect="bgHover"
                  >
                    <div className={`${styles.imgContainer}`}>
                      <IconEshop alt="" height={75} />
                    </div>
                    <div className={`${styles.descriptionContainer}`}>
                      <span className={`${styles.btnTitle}`}>E-shop</span>
                      <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Platební brána</p></div>
                      <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Uživatelské rozhraní</p></div>
                      <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vlastní řešení pro malé<br />podnikatele bez zbytečných<br />poplatků</p></div>
                    </div>
                  </Btn>
                </CarouselItem>
                <CarouselItem>
                  <Btn
                    functionOnClick={handleFirstCardThirdOptionClick}
                    paddingOfBtn="20px 10px"
                    bgColor="transparent"
                    borderSize="none"
                    borderRadius="10px"
                    bgHoverColor="var(--black-10)"
                    hoverEffect="bgHover"
                  >
                    <div className={`${styles.imgContainer}`}>
                      <IconGears alt="" height={75} />
                    </div>
                    <div className={`${styles.descriptionContainer}`}>
                      <span className={`${styles.btnTitle}`}>Webová aplikace</span>
                      <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Indiviální řešení na míru</p></div>
                      <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Interní firemní aplikace</p></div>
                      <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Spolupráce na vytváření<br/>webových softwarů</p></div>
                    </div>
                  </Btn>
                </CarouselItem>
              </Carousel>
              :
              <>
                <Btn
                  functionOnClick={handleFirstCardFirstOptionClick}
                  paddingOfBtn="20px 10px"
                  bgColor="transparent"
                  borderSize="none"
                  borderRadius="10px"
                  bgHoverColor="var(--black-10)"
                  hoverEffect="bgHover"
                >
                  <div className={`${styles.imgContainer}`}>
                    <IconGlobe alt="" height={75}  />
                  </div>
                  <div className={`${styles.descriptionContainer}`}>
                    <span className={`${styles.btnTitle}`}>Webové stránky</span>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Osobní či firemní prezentace</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vícejazyčnost</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Denní a noční režim</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Rychlá navigace</p></div>
                  </div>
                </Btn>
                <Btn
                  functionOnClick={handleFirstCardSecondOptionClick}
                  paddingOfBtn="20px 10px"
                  bgColor="transparent"
                  borderSize="none"
                  borderRadius="10px"
                  bgHoverColor="var(--black-10)"
                  hoverEffect="bgHover"
                >
                  <div className={`${styles.imgContainer}`}>
                    <IconEshop alt="" height={75}  />
                  </div>
                  <div className={`${styles.descriptionContainer}`}>
                    <span className={`${styles.btnTitle}`}>E-shop</span>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Platební brána</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Uživatelské rozhraní</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vlastní řešení pro malé<br />podnikatele bez zbytečných<br />poplatků</p></div>
                  </div>
                </Btn>
                <Btn
                  functionOnClick={handleFirstCardThirdOptionClick}
                  paddingOfBtn="20px 10px"
                  bgColor="transparent"
                  borderSize="none"
                  borderRadius="10px"
                  bgHoverColor="var(--black-10)"
                  hoverEffect="bgHover"
                >
                  <div className={`${styles.imgContainer}`}>
                    <IconGears alt="" height={75}  />
                  </div>
                  <div className={`${styles.descriptionContainer}`}>
                    <span className={`${styles.btnTitle}`}>Webová aplikace</span>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Indiviální řešení na míru</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Interní firemní aplikace</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Spolupráce na vytváření<br/>webových softwarů</p></div>
                  </div>
                </Btn>
              </>
            }
            </div>
          </Card>
        </div>
        {/* SECOND PICK */}
        <div
          className={`${styles.cardContainer} ${
            isFirstCardPicked ? styles.active : styles.disactive
          } ${styles.secondCardContainer}`}
        >
          <Card
            height="calc(100% - 160px)"
            gapFlex="25px"
            paddingOfCard="80px 25px"
            bgColor="rgb(from var(--color-primary) r g b / 0.2)"
            borderSize="none"
            borderRadius="15px"
          >
            {firstCardPick === 1 ? (
              <>
                <div className={`${styles.titleContainer}`}>
                  <span>WEBY</span>
                  <h1>O jaké <strong>webové</strong> stránky máte zájem?</h1>
                  <hr />
                </div>
                <div className={`${styles.chooseContainer} ${widthOfWindow < 880 ? styles.carousel : styles.inline}`}>
                  {widthOfWindow < 880 ?
                    <Carousel fullWidth={true} backdropFilterArrows="" infinite="pseudoInfinite">
                      <CarouselItem>
                        <Btn
                          functionOnClick={handleSecondCardFirstOptionClick}
                          bgColor="transparent"
                          borderSize="none"
                          borderRadius="15px"
                          bgHoverColor="var(--black-10)"
                          hoverEffect="bgHover"
                        >
                          <div className={`${styles.imgContainer}`}>
                            <IconCheck alt="" height={75}  />
                          </div>
                          <div className={`${styles.descriptionContainer}`}>
                            <span className={`${styles.btnTitle}`}>
                              Jednoduché
                            </span>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>1 stránka</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Optimalizavané</p></div>
                            <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Denní a noční režim</p></div>
                            <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Vícejazyčné</p></div>
                            <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                          </div>
                        </Btn>
                      </CarouselItem>
                      <CarouselItem>
                        <Btn
                          functionOnClick={handleSecondCardSecondOptionClick}
                          bgColor="transparent"
                          borderSize="none"
                          borderRadius="15px"
                          bgHoverColor="var(--black-10)"
                          hoverEffect="bgHover"
                        >
                          <div className={`${styles.imgContainer}`}>
                            <IconTarget alt="" height={75}  />
                          </div>
                          <div className={`${styles.descriptionContainer}`}>
                            <span className={`${styles.btnTitle}`}>
                              Komplexní
                            </span>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>1-5 stránek</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Rychlá navigace</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Denní a noční režim</p></div>
                            <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Vícejazyčné</p></div>
                            <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                          </div>
                        </Btn>
                      </CarouselItem>
                      <CarouselItem>
                        <Btn
                          functionOnClick={handleSecondCardSecondOptionClick}
                          bgColor="transparent"
                          borderSize="none"
                          borderRadius="15px"
                          bgHoverColor="var(--black-10)"
                          hoverEffect="bgHover"
                        >
                          <div className={`${styles.imgContainer}`}>
                            <IconRocket alt="" height={75}  />
                          </div>
                          <div className={`${styles.descriptionContainer}`}>
                            <span className={`${styles.btnTitle}`}>
                              Profesionální
                            </span>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>5+ stránek</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Interaktivní</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Denní a noční režim</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vícejazyčné</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                          </div>
                        </Btn>
                      </CarouselItem>
                    </Carousel>
                    :
                    <>
                      <Btn
                        functionOnClick={handleSecondCardFirstOptionClick}
                        bgColor="transparent"
                        borderSize="none"
                        borderRadius="15px"
                        bgHoverColor="var(--black-10)"
                        hoverEffect="bgHover"
                      >
                        <div className={`${styles.imgContainer}`}>
                          <IconCheck alt="" height={75}  />
                        </div>
                        <div className={`${styles.descriptionContainer}`}>
                          <span className={`${styles.btnTitle}`}>
                            Jednoduché
                          </span>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>1 stránka</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Optimalizavané</p></div>
                          <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Denní a noční režim</p></div>
                          <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Vícejazyčné</p></div>
                          <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                        </div>
                      </Btn>
                      <Btn
                        functionOnClick={handleSecondCardSecondOptionClick}
                        bgColor="transparent"
                        borderSize="none"
                        borderRadius="15px"
                        bgHoverColor="var(--black-10)"
                        hoverEffect="bgHover"
                      >
                        <div className={`${styles.imgContainer}`}>
                          <IconTarget alt="" height={75}  />
                        </div>
                        <div className={`${styles.descriptionContainer}`}>
                          <span className={`${styles.btnTitle}`}>
                            Komplexní
                          </span>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>1-5 stránek</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Rychlá navigace</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Denní a noční režim</p></div>
                          <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Vícejazyčné</p></div>
                          <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                        </div>
                      </Btn>
                      <Btn
                        functionOnClick={handleSecondCardThirdOptionClick}
                        bgColor="transparent"
                        borderSize="none"
                        borderRadius="15px"
                        bgHoverColor="var(--black-10)"
                        hoverEffect="bgHover"
                      >
                        <div className={`${styles.imgContainer}`}>
                          <IconRocket alt="" height={75}  />
                        </div>
                        <div className={`${styles.descriptionContainer}`}>
                          <span className={`${styles.btnTitle}`}>
                            Profesionální
                          </span>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>5+ stránek</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Interaktivní</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Denní a noční režim</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vícejazyčné</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                        </div>
                      </Btn>
                    </> 
                  }
                </div>
                <div className={`${styles.infoContainer}`}>
                  <div><span><IconInfoCircle style={{fill: "var(--shadow-25)"}} alt="check" /></span><p>Rozdělení je pouze orientační, vždy se můžeme domluvit na individuálním řešení.</p></div>
                  <div><span><IconInfoCircle style={{fill: "var(--shadow-25)"}} alt="check" /></span><p>V případě, že již máte webové stránky, můžeme společně domluvit lepší podmínky pro vedení stránek, nebo je zmodernizovat.</p></div>
                </div>
              </>
            ) : firstCardPick === 2 ? (
              <>
                <div className={`${styles.titleContainer}`}>
                  <span>E-SHOPY</span>
                  <h1>Jaký typ <strong>podnikání</strong> vlastníte?</h1>
                  <hr />
                </div>
                <div className={`${styles.chooseContainer} ${widthOfWindow < 880 ? styles.carousel : styles.inline}`}>
                  {widthOfWindow < 880 ?
                    <Carousel fullWidth={true} backdropFilterArrows="" infinite="pseudoInfinite">
                      <CarouselItem>
                        <Btn
                          functionOnClick={handleSecondCardFirstOptionClick}
                          bgColor="transparent"
                          borderSize="none"
                          borderRadius="15px"
                          bgHoverColor="var(--black-10)"
                          hoverEffect="bgHover"
                          >
                          <div className={`${styles.imgContainer}`}>
                            <IconPerson alt="" height={75}  />
                          </div>
                          <div className={`${styles.descriptionContainer}`}>
                            <span className={`${styles.btnTitle}`}>
                              Jedinec
                            </span>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>1-3 produkty</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Řešení prodeje bez platební brány</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                            <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Vícejazyčné</p></div>
                            <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Uživatelské rozhraní</p></div>
                          </div>
                        </Btn>
                      </CarouselItem>
                      <CarouselItem>
                        <Btn
                          functionOnClick={handleSecondCardSecondOptionClick}
                          bgColor="transparent"
                          borderSize="none"
                          borderRadius="15px"
                          bgHoverColor="var(--black-10)"
                          hoverEffect="bgHover"
                          >
                          <div className={`${styles.imgContainer}`}>
                            <IconShop alt="" height={75}  />
                          </div>
                          <div className={`${styles.descriptionContainer}`}>
                            <span className={`${styles.btnTitle}`}>
                              Maloobchod
                            </span>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Do 10 produktů</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Platební brána</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vícejazyčné</p></div>
                            <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Uživatelské rozhraní</p></div>
                          </div>
                        </Btn>
                      </CarouselItem>
                      <CarouselItem>
                        <Btn
                          functionOnClick={handleSecondCardThirdOptionClick}
                          bgColor="transparent"
                          borderSize="none"
                          borderRadius="15px"
                          bgHoverColor="var(--black-10)"
                          hoverEffect="bgHover"
                          >
                          <div className={`${styles.imgContainer}`}>
                            <IconWarehouse alt="" height={75}  />
                          </div>
                          <div className={`${styles.descriptionContainer}`}>
                            <span className={`${styles.btnTitle}`}>
                              Velkoobchod
                            </span>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>10+ produktů</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Platební brána</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vícejazyčné</p></div>
                            <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Uživatelské rozhraní</p></div>
                          </div>
                        </Btn>
                      </CarouselItem>
                    </Carousel>
                  :
                    <>
                      <Btn
                        functionOnClick={handleSecondCardFirstOptionClick}
                        bgColor="transparent"
                        borderSize="none"
                        borderRadius="15px"
                        bgHoverColor="var(--black-10)"
                        hoverEffect="bgHover"
                        >
                        <div className={`${styles.imgContainer}`}>
                          <IconPerson alt="" height={75}  />
                        </div>
                        <div className={`${styles.descriptionContainer}`}>
                          <span className={`${styles.btnTitle}`}>
                            Jedinec
                          </span>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>1-3 produkty</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Řešení prodeje bez platební brány</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                          <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Vícejazyčné</p></div>
                          <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Uživatelské rozhraní</p></div>
                        </div>
                      </Btn>
                      <Btn
                        functionOnClick={handleSecondCardSecondOptionClick}
                        bgColor="transparent"
                        borderSize="none"
                        borderRadius="15px"
                        bgHoverColor="var(--black-10)"
                        hoverEffect="bgHover"
                        >
                        <div className={`${styles.imgContainer}`}>
                          <IconShop alt="" height={75}  />
                        </div>
                        <div className={`${styles.descriptionContainer}`}>
                          <span className={`${styles.btnTitle}`}>
                            Maloobchod
                          </span>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Do 10 produktů</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Platební brána</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vícejazyčné</p></div>
                          <div><span><IconXCircle style={{color: "var(--color-error)"}} alt="check" /></span><p>Uživatelské rozhraní</p></div>
                        </div>
                      </Btn>
                      <Btn
                        functionOnClick={handleSecondCardThirdOptionClick}
                        bgColor="transparent"
                        borderSize="none"
                        borderRadius="15px"
                        bgHoverColor="var(--black-10)"
                        hoverEffect="bgHover"
                        >
                        <div className={`${styles.imgContainer}`}>
                         <IconWarehouse alt="" height={75}  />
                        </div>
                        <div className={`${styles.descriptionContainer}`}>
                          <span className={`${styles.btnTitle}`}>
                            Velkoobchod
                          </span>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>10+ produktů</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Platební brána</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vícejazyčné</p></div>
                          <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Uživatelské rozhraní</p></div>
                        </div>
                      </Btn>
                    </>
                  }
                </div>
                <div className={`${styles.infoContainer}`}>
                  <div><span><IconInfoCircle style={{fill: "var(--shadow-25)"}} alt="check" /></span><p>Rozdělení je pouze orientační, vždy se můžeme domluvit na individuálním řešení.</p></div>
                </div>
              </>
            ) : (
              <>
                <div className={`${styles.titleContainer}`}>
                  <span>VÝVOJ</span>
                  <h1>Webová aplikace <strong>na míru</strong></h1>
                  <hr />
                </div>
                <div className={`${styles.contentContainer}`}>
                  <div className={`${styles.categoryDescription}`}>
                    <p>
                      V případě, že potřebujete specifickou webovou aplikaci, nebo máte nápad a potřebujete pomoc s jeho realizací v podobě webové aplikace, neváhejte mě kontaktovat. V následujících bodech jsou příklady kategorií webových aplikací.
                    </p>
                  </div>
                  <div className={`${styles.checkboxDescription}`}>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Blog</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Finanční nástroje</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Interní firemní aplikace</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Webový software</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém správy</p></div>
                  </div>
                  <div className={`${styles.ctaBtns}`}>
                    <Btn
                      functionOnClick={"TODO"}
                      width="clamp(100px, 100%, 250px)"
                      bgColor="var(--color-secondary)"
                      textColor="var(--color-text)"
                      borderSize="none"
                      borderRadius="15px"
                      fontWeight="600"
                      hoverEffect="scaleForward"
                    >
                      Vyplnit formulář
                    </Btn>
                    <Btn
                      functionOnClick={handleCallOrCopyNumber}
                      width="clamp(100px, 100%, 250px)"
                      bgColor="transparent"
                      borderSize="none"
                      borderRadius="15px"
                      bgHoverColor="var(--color-primary)"
                      textHoverColor="var(--color-text-reverse)"
                      fontWeight="600"
                      hoverEffect="cfLeft"
                    >
                      Zavolejte mi
                    </Btn>
                    <Popup top="105%" left="calc(50% + clamp(50px, 50%, 125px))" state={popupPhone}>Zkopírováno!</Popup>
                  </div>
                  {/* <div className={`${styles.infoContainer}`}>
                    <div><span><IconInfoCircle style={{fill: "var(--shadow-25)"}} alt="check" /></span><p>Cena zde nejde přesně určit, odvíjí se primárně od složitosti a velikosti webové aplikace, standartně je počítána podle hodin strávených na projektu.</p></div>
                  </div> */}
                </div>
              </>
            )}
          </Card>
        </div>
        {/* THIRD PICK - CONTENT */}
        <div
          className={`${styles.cardContainer} ${
            isSecondCardPicked ? styles.active : styles.disactive
          } ${styles.thirdCardContainer}`}
        >
          <Card
            height="calc(100% - 120px)"
            gapFlex="25px"
            paddingOfCard="60px 25px"
            bgColor="rgb(from var(--color-primary) r g b / 0.25)"
            borderSize="none"
            borderRadius="15px"
          >
            {firstCardPick === 1 && secondCardPick === 1 ? (
              <>
                <div className={`${styles.titleContainer}`}>
                  <span>PREZENTACE</span>
                  <h1><strong>Jednoduché</strong> webové stránky</h1>
                  <hr />
                </div>
                <div className={`${styles.contentContainer}`}>
                  <div className={`${styles.categoryDescription}`}>
                    <p>
                      Jednoduché webové stránky jsou ideální pro jednotlivce nebo malé firmy, které
                      potřebují online prezentaci s minimálním obsahem. Tato varianta nabízí jednu stránku s
                      důrazem na jednoduchost.
                    </p>
                  </div>
                  <div className={`${styles.checkboxDescription}`}>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>1 stránka</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Responzivita webu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Optimalizace SEO</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vlastní doména včetně možnosti firemního e-mailu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Rychlá navigace na stránce</p></div>
                    <div><span><IconInfoCircle style={{fill: "var(--shadow-25)"}} alt="check" /></span><p>Možnost rozšíření - denní a noční režim, vícejazyčnost a Systém úpravy obsahu</p></div>
                  </div>
                  <div className={`${styles.ctaBtns}`}>
                    <Btn
                      functionOnClick={"TODO"}
                      width="clamp(100px, 100%, 250px)"
                      bgColor="var(--color-secondary)"
                      textColor="var(--color-text)"
                      borderSize="none"
                      borderRadius="15px"
                      fontWeight="600"
                      hoverEffect="scaleForward"
                    >
                      Vyplnit formulář
                    </Btn>
                    <Btn
                      functionOnClick={handleCallOrCopyNumber}
                      width="clamp(100px, 100%, 250px)"
                      bgColor="transparent"
                      borderSize="none"
                      borderRadius="15px"
                      bgHoverColor="var(--color-primary)"
                      textHoverColor="var(--color-text-reverse)"
                      fontWeight="600"
                      hoverEffect="cfLeft"
                    >
                      Zavolejte mi
                    </Btn>
                    <Popup top="105%" left="calc(50% + clamp(50px, 50%, 125px))" state={popupPhone}>Zkopírováno!</Popup>
                  </div>
                  {/* <div className={`${styles.infoContainer}`}>
                    <h4>~ 10.000 CZK</h4>
                    <div><span><IconInfoCircle style={{fill: "var(--shadow-25)"}} alt="check" /></span><p>Cena je pouze orientační, odvíjí se primárně od náročnosti a velikosti obsahu stránky, standartně je počítána podle hodin strávených na projektu.</p></div>
                  </div> */}
                </div>
              </>
            ) : firstCardPick === 1 && secondCardPick === 2 ? (
              <>
                <div className={`${styles.titleContainer}`}>
                  <span>PREZENTACE</span>
                  <h1><strong>Komplexní</strong> webové stránky</h1>
                  <hr />
                </div>
                <div className={`${styles.contentContainer}`}>
                  <div className={`${styles.categoryDescription}`}>
                    <p>
                    Komplexní webové stránky jsou vhodné pro firmy, které potřebují více obsahu a
                    rychlou navigaci mezi 1-5 stránkami. Tento typ webu zahrnuje také změnu režimu mezi
                    denním a nočním pro příjmenější návštěvu webu.
                    </p>
                  </div>
                  <div className={`${styles.checkboxDescription}`}>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>1-5 stránek</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Responzivita webu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Optimalizace SEO</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vlastní doména včetně možnosti firemního e-mailu.</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Rychlá navigace na stránce</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Denní a noční režim</p></div>
                    <div><span><IconInfoCircle style={{fill: "var(--shadow-25)"}} alt="check" /></span><p>Možnost rozšíření - vícejazyčnost a Systém úpravy obsahu</p></div>
                  </div>
                  <div className={`${styles.ctaBtns}`}>
                    <Btn
                      functionOnClick={"TODO"}
                      width="clamp(100px, 100%, 250px)"
                      bgColor="var(--color-secondary)"
                      textColor="var(--color-text)"
                      borderSize="none"
                      borderRadius="15px"
                      fontWeight="600"
                      hoverEffect="scaleForward"
                    >
                      Vyplnit formulář
                    </Btn>
                    <Btn
                      functionOnClick={handleCallOrCopyNumber}
                      width="clamp(100px, 100%, 250px)"
                      bgColor="transparent"
                      borderSize="none"
                      borderRadius="15px"
                      bgHoverColor="var(--color-primary)"
                      textHoverColor="var(--color-text-reverse)"
                      fontWeight="600"
                      hoverEffect="cfLeft"
                    >
                      Zavolejte mi
                    </Btn>
                    <Popup top="105%" left="calc(50% + clamp(50px, 50%, 125px))" state={popupPhone}>Zkopírováno!</Popup>
                  </div>
                  {/* <div className={`${styles.infoContainer}`}>
                    <h4>~ 25.000 CZK</h4>
                    <div><span><IconInfoCircle style={{fill: "var(--shadow-25)"}} alt="check" /></span><p>Cena je pouze orientační, odvíjí se primárně od náročnosti a velikosti obsahu stránky, standartně je počítána podle hodin strávených na projektu.</p></div>
                  </div> */}
                </div>
              </>
            ) : firstCardPick === 1 && secondCardPick === 3 ? (
              <>
                <div className={`${styles.titleContainer}`}>
                  <span>PREZENTACE</span>
                  <h1><strong>Profesionální</strong> webové stránky</h1>
                  <hr />
                </div>
                <div className={`${styles.contentContainer}`}>
                  <div className={`${styles.categoryDescription}`}>
                    <p>
                    Profesionální webové stránky jsou ideální pro firmy, které potřebují rozsáhlý a
                    interaktivní web s více než 5 stránkami. Tento typ webu zahrnuje Systém úpravy obsahu,
                    vícejazyčnou podporu a denní/noční režim.
                    </p>
                  </div>
                  <div className={`${styles.checkboxDescription}`}>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>5+ stránek</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Responzivita webu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Optimalizace SEO</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vlastní doména včetně možnosti firemního e-mailu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Rychlá navigace na stránce</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Denní a noční režim</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vícejazyčnost</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                  </div>
                  <div className={`${styles.ctaBtns}`}>
                    <Btn
                      functionOnClick={"TODO"}
                      width="clamp(100px, 100%, 250px)"
                      bgColor="var(--color-secondary)"
                      textColor="var(--color-text)"
                      borderSize="none"
                      borderRadius="15px"
                      fontWeight="600"
                      hoverEffect="scaleForward"
                    >
                      Vyplnit formulář
                    </Btn>
                    <Btn
                      functionOnClick={handleCallOrCopyNumber}
                      width="clamp(100px, 100%, 250px)"
                      bgColor="transparent"
                      borderSize="none"
                      borderRadius="15px"
                      bgHoverColor="var(--color-primary)"
                      textHoverColor="var(--color-text-reverse)"
                      fontWeight="600"
                      hoverEffect="cfLeft"
                    >
                      Zavolejte mi
                    </Btn>
                    <Popup top="105%" left="calc(50% + clamp(50px, 50%, 125px))" state={popupPhone}>Zkopírováno!</Popup>
                  </div>
                  {/* <div className={`${styles.infoContainer}`}>
                    <h4>~ 45.000 CZK</h4>
                    <div><span><IconInfoCircle style={{fill: "var(--shadow-25)"}} alt="check" /></span><p>Cena je pouze orientační, odvíjí se primárně od náročnosti a velikosti obsahu stránky, standartně je počítána podle hodin strávených na projektu.</p></div>
                  </div> */}
                </div>
              </>
            ) : firstCardPick === 2 && secondCardPick === 1 ? (
              <>
                <div className={`${styles.titleContainer}`}>
                  <span>PRODEJ</span>
                  <h1>E-shop pro <strong>jedince</strong></h1>
                  <hr />
                </div>
                <div className={`${styles.contentContainer}`}>
                  <div className={`${styles.categoryDescription}`}>
                    <p>
                      E-shop je ideální pro jedince, kteří chtějí začít prodávat své produkty online, ale nechtějí platit poplatky platební bráně. V případě, že si produkty vyrábíte a chcete svým zákazníkům umožnit jejich koupi za co nejnižší cenu, je tento typ e-shopu přesně pro Vás.
                    </p>
                  </div>
                  <div className={`${styles.checkboxDescription}`}>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>5+ stránek</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Responzivita webu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Optimalizace SEO</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vlastní doména včetně možnosti firemního e-mailu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Rychlá navigace na stránce</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Správa objednávek</p></div>
                    <div><span><IconInfoCircle style={{fill: "var(--shadow-25)"}} alt="check" /></span><p>Možnost rozšíření - denní a noční režim, vícejazyčnost, databáze produktů a uživatelské rozhraní</p></div>
                  </div>
                  <div className={`${styles.ctaBtns}`}>
                    <Btn
                      functionOnClick={"TODO"}
                      width="clamp(100px, 100%, 250px)"
                      bgColor="var(--color-secondary)"
                      textColor="var(--color-text)"
                      borderSize="none"
                      borderRadius="15px"
                      fontWeight="600"
                      hoverEffect="scaleForward"
                    >
                      Vyplnit formulář
                    </Btn>
                    <Btn
                      functionOnClick={handleCallOrCopyNumber}
                      width="clamp(100px, 100%, 250px)"
                      bgColor="transparent"
                      borderSize="none"
                      borderRadius="15px"
                      bgHoverColor="var(--color-primary)"
                      textHoverColor="var(--color-text-reverse)"
                      fontWeight="600"
                      hoverEffect="cfLeft"
                    >
                      Zavolejte mi
                    </Btn>
                    <Popup top="105%" left="calc(50% + clamp(50px, 50%, 125px))" state={popupPhone}>Zkopírováno!</Popup>
                  </div>
                  {/* <div className={`${styles.infoContainer}`}>
                    <h4>~ 45.000 CZK</h4>
                    <div><span><IconInfoCircle style={{fill: "var(--shadow-25)"}} alt="check" /></span><p>Cena je pouze orientační, odvíjí se primárně od náročnosti a velikosti obsahu stránky, standartně je počítána podle hodin strávených na projektu.</p></div>
                  </div> */}
                </div>
              </>
            ) : firstCardPick === 2 && secondCardPick === 2 ? (
              <>
                <div className={`${styles.titleContainer}`}>
                  <span>PRODEJ</span>
                  <h1>E-shop pro <strong>maloobchod</strong></h1>
                  <hr />
                </div>
                <div className={`${styles.contentContainer}`}>
                  <div className={`${styles.categoryDescription}`}>
                    <p>
                      E-Shop pro maloobchod je navržen pro firmy, které potřebují robustní online prodejní platformu a mají více produktů. Tento typ e-shopu zahrnuje napojení na platební bránu, což oceníte v případě většího počtu zákazníků.
                    </p>
                  </div>
                  <div className={`${styles.checkboxDescription}`}>
                  <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>5+ stránek</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Responzivita webu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Optimalizace SEO</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vlastní doména včetně možnosti firemního e-mailu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Rychlá navigace na stránce</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Správa objednávek</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Denní a noční režim</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vícejazyčnost</p></div>
                    <div><span><IconInfoCircle style={{fill: "var(--shadow-25)"}} alt="check" /></span><p>Možnost rozšíření - databáze produktů a uživatelské rozhraní</p></div>
                  </div>
                  <div className={`${styles.ctaBtns}`}>
                    <Btn
                      functionOnClick={"TODO"}
                      width="clamp(100px, 100%, 250px)"
                      bgColor="var(--color-secondary)"
                      textColor="var(--color-text)"
                      borderSize="none"
                      borderRadius="15px"
                      fontWeight="600"
                      hoverEffect="scaleForward"
                    >
                      Vyplnit formulář
                    </Btn>
                    <Btn
                      functionOnClick={handleCallOrCopyNumber}
                      width="clamp(100px, 100%, 250px)"
                      bgColor="transparent"
                      borderSize="none"
                      borderRadius="15px"
                      bgHoverColor="var(--color-primary)"
                      textHoverColor="var(--color-text-reverse)"
                      fontWeight="600"
                      hoverEffect="cfLeft"
                    >
                      Zavolejte mi
                    </Btn>
                    <Popup top="105%" left="calc(50% + clamp(50px, 50%, 125px))" state={popupPhone}>Zkopírováno!</Popup>
                  </div>
                  {/* <div className={`${styles.infoContainer}`}>
                    <h4>~ 75.000 CZK</h4>
                    <div><span><IconInfoCircle style={{fill: "var(--shadow-25)"}} alt="check" /></span><p>Cena je pouze orientační, odvíjí se primárně od náročnosti a velikosti obsahu stránky, standartně je počítána podle hodin strávených na projektu.</p></div>
                  </div> */}
                </div>
              </>
            ) : (
              <>
                <div className={`${styles.titleContainer}`}>
                  <span>PRODEJ</span>
                  <h1>E-shop pro <strong>velkoobchod</strong></h1>
                  <hr />
                </div>
                <div className={`${styles.contentContainer}`}>
                  <div className={`${styles.categoryDescription}`}>
                    <p>
                      E-Shop pro velkoobchod je určen pro společnosti, které potřebují komplexní a rozsáhlé e-shopové řešení s vlastním rozhraním pro uživatele a přístupem do vlastní databáze produktů. Tento typ e-shopu podporuje velké množství produktů.
                    </p>
                  </div>
                  <div className={`${styles.checkboxDescription}`}>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Responzivita webu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Optimalizace SEO</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vlastní doména včetně možnosti firemního e-mailu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Rychlá navigace na stránce</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Systém úpravy obsahu</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Správa objednávek</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Denní a noční režim</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Vícejazyčnost</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Databáze produktů</p></div>
                    <div><span><IconCheckCircle style={{color: "var(--color-success)"}} alt="check" /></span><p>Uživatelské rozhraní</p></div>
                  </div>
                  <div className={`${styles.ctaBtns}`}>
                    <Btn
                      functionOnClick={"TODO"}
                      width="clamp(100px, 100%, 250px)"
                      bgColor="var(--color-secondary)"
                      textColor="var(--color-text)"
                      borderSize="none"
                      borderRadius="15px"
                      fontWeight="600"
                      hoverEffect="scaleForward"
                    >
                      Vyplnit formulář
                    </Btn>
                    <Btn
                      functionOnClick={handleCallOrCopyNumber}
                      width="clamp(100px, 100%, 250px)"
                      bgColor="transparent"
                      borderSize="none"
                      borderRadius="15px"
                      bgHoverColor="var(--color-primary)"
                      textHoverColor="var(--color-text-reverse)"
                      fontWeight="600"
                      hoverEffect="cfLeft"
                    >
                      Zavolejte mi
                    </Btn>
                    <Popup top="105%" left="calc(50% + clamp(50px, 50%, 125px))" state={popupPhone}>Zkopírováno!</Popup>
                  </div>
                  {/* <div className={`${styles.infoContainer}`}>
                    <h4>~ 100.000 CZK</h4>
                    <div><span><IconInfoCircle style={{fill: "var(--shadow-25)"}} alt="check" /></span><p>Cena je pouze orientační, odvíjí se primárně od náročnosti a velikosti obsahu stránky, standartně je počítána podle hodin strávených na projektu.</p></div>
                  </div> */}
                </div>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InteractiveChooser;
