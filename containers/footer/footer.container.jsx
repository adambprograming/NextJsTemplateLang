"use client";
// Styles
import "./footer.styles.scss";
// Public & Assets
import IconEmail from "../../components/svgs/footer-icons/icon-email.component";
import IconFacebook from "../../components/svgs/footer-icons/icon-facebook.component";
import IconInstagram from "../../components/svgs/footer-icons/icon-instagram.component";
import IconLinkedin from "../../components/svgs/footer-icons/icon-linkedin.component";
import IconLocation from "../../components/svgs/footer-icons/icon-location.component";
import IconPhone from "../../components/svgs/footer-icons/icon-phone.component";
import IconTiktok from "../../components/svgs/footer-icons/icon-tiktok.component";
import IconX from "../../components/svgs/footer-icons/icon-x.component";
import IconGithub from "@/components/svgs/footer-icons/icon-github.component";
// React/Next Functions
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
// Context & Actions

// Components
import Popup from "../../components/popup/popup.component";

const Footer = ({dynamicForSmallHeightPage = false}) => {
  const phoneNumber = "+42077780333073";
  const emailAddress = "ab@adam-bartusek.cz";
  const [popupPhone, setPopupPhone] = useState(false);
  const [popupEmail, setPopupEmail] = useState(false);
  const footerRef = useRef(null);

  function listenForDomChanges(targetNode, callback) {
    // Check browser compatibility
    if (!window.MutationObserver) {
      console.warn("MutationObserver is not supported by your browser.");
      return;
    }
    // Create a MutationObserver instance
    const observer = new MutationObserver(callback);
    // Define the configuration object for the observer
    const config = {
      childList: true, // Observe changes in child nodes
      subtree: true, // Observe changes in all descendant nodes
      attributes: true, // Observe attribute changes
    };
    // Start observing the target node
    observer.observe(targetNode, config);
    // Function to disconnect the observer (optional)
    return () => {
      observer.disconnect();
    };
  }

  useEffect(() => {
    if (dynamicForSmallHeightPage) {      
      window.addEventListener("resize", changeHeights);
      const disconnectObserver = listenForDomChanges(document, changeHeights);
      return () => {
        disconnectObserver();
        window.removeEventListener("resize", changeHeights);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeHeights = () => {
    try {
      const heightWindow = window.innerHeight;
      const heightContent = document.querySelector("body").scrollHeight;
      const heightFooter = footerRef.current.scrollHeight;
      const heightContentPlusFooter = heightContent + heightFooter;
      const isFixed = footerRef.current.classList.contains("fixed-footer");
      if (isFixed) {
        if (heightWindow <= heightContentPlusFooter) {
          footerRef.current.classList.remove("fixed-footer");
        }
      } else {
        if (heightWindow >= heightContent) {
          footerRef.current.classList.add("fixed-footer");
        }
      }
    } catch (error) {}
  };

  const copyToClipboard = (toClipboard, popup) => {
    navigator.clipboard.writeText(toClipboard);
    switch (popup) {
      case "email":
        const mailtoLink = `mailto:${emailAddress}?subject=Hello%20there&body=Dear%20Adam%2C%0D%0A%0D%0AI'm%20interested%20in%20your%20services.%0D%0A%0D%0ABest%20regards%2C%0D%0A[Your%20Name]`;
        // Copy the email address to clipboard regardless of mailto success
        navigator.clipboard.writeText(emailAddress).then(
          () => {
            setPopupEmail(true);
            setPopupPhone(false);
          },
          () => {}
        );
        // Attempt to open the default mail client
        window.location.href = mailtoLink;
        break;
      case "phone":
        const userAgent = navigator.userAgent || window.opera;
        // Check, if device have phone functions
        if (/android|iphone|ipad|iPod/i.test(userAgent)) {
          window.location.href = `tel:${phoneNumber}`;
        } else {
          // If not (so desktop), just copy phone
          navigator.clipboard.writeText(phoneNumber).then(
            () => {
              setPopupPhone(true);
              setPopupEmail(false);
            },
            () => {}
          );
        }
        break;
    }
    setTimeout(() => {
      switch (popup) {
        case "email":
          setPopupEmail(false);
          break;
        case "phone":
          setPopupPhone(false);
          break;
      }
    }, 2500);
  };

  return (
    <footer id="article-footer" ref={footerRef}>
      <div className="footer-container">
        <div className="footer-container-info">
          <div className="footer-nav">
            <span>Menu</span>
            <ul>
              <li>
                <Link href="/">Domovská stránka</Link>
              </li>
              <li>
                <Link href="/o-mne">O mně</Link>
              </li>
              <li>
                <Link href="/sluzby">Služby</Link>
              </li>
              <li>
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contacts">
            <span>Kontakty</span>
            <div className="footer-icons">
              <span
                className="footer-phone"
                onClick={() => {
                  copyToClipboard(phoneNumber, "phone");
                }}
              >
                <IconPhone />
                <Popup state={popupPhone}>Zkopírováno!</Popup>
              </span>
              <span
                className="footer-email"
                onClick={() => {
                  copyToClipboard(emailAddress, "email");
                }}
              >
                <IconEmail />
                <Popup state={popupEmail}>Zkopírováno!</Popup>
              </span>
              <Link
                href="https://www.google.com/maps/place/Pardubice/@50.0342266,15.4292331,10z/data=!3m1!4b1!4m6!3m5!1s0x470dc94b239307b5:0x12d59894ccf624ae!8m2!3d50.0343092!4d15.7811994!16zL20vMGNoNTQ?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odkaz k moji poloze."
              >
                <IconLocation />
              </Link>
              {/* <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odkaz na můj Facebook profil."
              >
                <IconFacebook />
              </Link> */}
              <Link
                href="https://www.instagram.com/_adaamb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odkaz na můj Instagram profil."
              >
                <IconInstagram />
              </Link>
              {/* <Link
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odkaz na můj TikTok profil."
              >
                <IconTiktok />
              </Link> */}
              <Link
                href={`https://www.linkedin.com/in/adam-bart%C5%AF%C5%A1ek-251107286/?locale=cs_CZ`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odkaz na můj Linkedin profil."
              >
                <IconLinkedin />
              </Link>
              {/* <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odkaz na můj Twitter profil."
              >
                <IconX />
              </Link> */}
              <Link
                href="https://github.com/adambprograming"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odkaz na můj GitHub profil."
              >
                <IconGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-container-copyright">
          <p> Adam Bartůšek &copy; 2022-2024.</p>
          <p>
            <span>Vytvořil</span>
            <Link
              href="https://www.adam-bartusek.cz/"
              target="_blank"
              rel="noopener"
              aria-label="Created by Adam Bartůšek. Visit the developer website."
            >
              Adam Bartůšek
            </Link>
            <span>.</span>
            <span>Všechna práva vyhrazena.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
