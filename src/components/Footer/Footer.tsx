import React from "react";
import "./Footer.scss";


const Footer: React.FC = () => {


  return (
    <footer className={`componentFooter py-4`}>
      <div className="container">
          <img src="./brand/cyberpandino-logo-font.svg" alt="Logo" />
          <p>Vintage vibes, tech power.</p>
          <div className="footer__row">
            <p className="footer__row__terms">© {new Date().getFullYear()} Cyberpandino, <a href="/policies/privacy-policy">Informativa sulla privacy</a> <a href="/policies/#shopifyReshowConsentBanner" >Preferenze cookie</a></p>
            <div className="footer__row__icons">
              <div className="footer__row__icons__wrapper">
                <a href="https://www.facebook.com/profile.php?id=61572384386870" target="_blank" rel="noopener noreferrer">
                  <svg className="footer__row__icons__wrapper__icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M18 10.049C18 5.603 14.419 2 10 2c-4.419 0-8 3.603-8 8.049C2 14.067 4.925 17.396 8.75 18v-5.624H6.719v-2.328h2.03V8.275c0-2.017 1.195-3.132 3.023-3.132.874 0 1.79.158 1.79.158v1.98h-1.009c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.933 6.75-7.951Z"></path>
                  </svg>
                </a>
              </div>

              <div className="footer__row__icons__wrapper">
                <a href="https://www.instagram.com/cyberpandino/" target="_blank" rel="noopener noreferrer">
                  <svg className="footer__row__icons__wrapper__icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>

              <div className="footer__row__icons__wrapper">
                <a href="http://tiktok.com/@cyberpandino" target="_blank" rel="noopener noreferrer">
                  <svg className="footer__row__icons__wrapper__icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10.511 1.705h2.74s-.157 3.51 3.795 3.768v2.711s-2.114.129-3.796-1.158l.028 5.606A5.073 5.073 0 1 1 8.213 7.56h.708v2.785a2.298 2.298 0 1 0 1.618 2.205L10.51 1.705Z"></path>
                  </svg>
                </a>
              </div>

              <div className="footer__row__icons__wrapper">
                <a href="https://www.youtube.com/@Cyberpandino" target="_blank" rel="noopener noreferrer">
                  <svg className="footer__row__icons__wrapper__icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M18.16 5.87c.34 1.309.34 4.08.34 4.08s0 2.771-.34 4.08a2.125 2.125 0 0 1-1.53 1.53c-1.309.34-6.63.34-6.63.34s-5.321 0-6.63-.34a2.125 2.125 0 0 1-1.53-1.53c-.34-1.309-.34-4.08-.34-4.08s0-2.771.34-4.08a2.173 2.173 0 0 1 1.53-1.53C4.679 4 10 4 10 4s5.321 0 6.63.34a2.173 2.173 0 0 1 1.53 1.53ZM8.3 12.5l4.42-2.55L8.3 7.4v5.1Z"></path>
                  </svg>
                </a>
              </div>

            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
