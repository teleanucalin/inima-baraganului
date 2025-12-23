'use client';

import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export function CookieConsentBanner() {
  useEffect(() => {
    CookieConsent.run({
      // Disable page scripts by default
      disablePageInteraction: false,

      // Auto-clear cookies when user opts out
      autoClearCookies: true,

      // Hide from bots
      hideFromBots: true,

      // Cookie name
      cookie: {
        name: 'cc_inima_baraganului',
        expiresAfterDays: 365,
      },

      // GUI options
      guiOptions: {
        consentModal: {
          layout: 'box inline',
          position: 'bottom right',
          equalWeightButtons: false,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: false,
          flipButtons: false,
        },
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        functionality: {
          enabled: false,
          readOnly: false,
          autoClear: {
            cookies: [
              {
                name: /^_ga/, // Google Analytics cookies
              },
            ],
          },
        },
        analytics: {
          enabled: false,
          readOnly: false,
          autoClear: {
            cookies: [
              {
                name: /^_ga/, // Google Analytics cookies
              },
              {
                name: '_gid',
              },
            ],
          },
        },
      },

      language: {
        default: 'ro',
        translations: {
          ro: {
            consentModal: {
              title: 'Folosim cookie-uri',
              description:
                'Acest site folosește cookie-uri esențiale pentru funcționarea corectă și cookie-uri opționale pentru analitică și funcționalități precum hărți. Puteți alege ce tipuri de cookie-uri doriți să acceptați. Pentru mai multe detalii, consultați <a href="/politica-confidentialitate" class="cc-link">politica de confidențialitate</a>.',
              acceptAllBtn: 'Accept toate',
              acceptNecessaryBtn: 'Doar necesare',
              showPreferencesBtn: 'Preferințe',
              footer: `
                <a href="/politica-confidentialitate" class="cc-link">Politica de confidențialitate</a>
              `,
            },
            preferencesModal: {
              title: 'Preferințe Cookie-uri',
              acceptAllBtn: 'Accept toate',
              acceptNecessaryBtn: 'Doar necesare',
              savePreferencesBtn: 'Salvează preferințe',
              closeIconLabel: 'Închide',
              serviceCounterLabel: 'Serviciu|Servicii',
              sections: [
                {
                  title: 'Folosirea Cookie-urilor',
                  description:
                    'Folosim cookie-uri pentru a asigura funcționalitățile de bază ale site-ului și pentru a îmbunătăți experiența dumneavoastră online. Puteți alege pentru fiecare categorie să optați pentru activare sau dezactivare oricând doriți.',
                },
                {
                  title: 'Cookie-uri Strict Necesare',
                  description:
                    'Aceste cookie-uri sunt esențiale pentru funcționarea corectă a site-ului. Fără aceste cookie-uri, site-ul nu ar funcționa corespunzător.',
                  linkedCategory: 'necessary',
                  cookieTable: {
                    headers: {
                      name: 'Cookie',
                      domain: 'Domeniu',
                      desc: 'Descriere',
                      exp: 'Expirare',
                    },
                    body: [
                      {
                        name: 'cc_inima_baraganului',
                        domain: location.hostname,
                        desc: 'Stochează preferințele dumneavoastră privind cookie-urile',
                        exp: '1 an',
                      },
                    ],
                  },
                },
                {
                  title: 'Cookie-uri de Funcționalitate',
                  description:
                    'Aceste cookie-uri sunt utilizate de servicii terțe care oferă funcționalități suplimentare pe site-ul nostru, cum ar fi hărțile interactive.',
                  linkedCategory: 'functionality',
                  cookieTable: {
                    headers: {
                      name: 'Cookie',
                      domain: 'Domeniu',
                      desc: 'Descriere',
                      exp: 'Expirare',
                    },
                    body: [
                      {
                        name: 'Google Maps',
                        domain: 'google.com',
                        desc: 'Folosit pentru afișarea hărților interactive pe pagina de contact',
                        exp: 'Sesiune',
                      },
                    ],
                  },
                },
                {
                  title: 'Cookie-uri de Analitică',
                  description:
                    'Aceste cookie-uri ne ajută să înțelegem cum vizitatorii interactionează cu site-ul nostru prin colectarea și raportarea de informații anonim.',
                  linkedCategory: 'analytics',
                  cookieTable: {
                    headers: {
                      name: 'Cookie',
                      domain: 'Domeniu',
                      desc: 'Descriere',
                      exp: 'Expirare',
                    },
                    body: [
                      {
                        name: '_ga',
                        domain: 'google.com',
                        desc: 'Cookie Google Analytics pentru analiza traficului',
                        exp: '2 ani',
                      },
                      {
                        name: '_gid',
                        domain: 'google.com',
                        desc: 'Cookie Google Analytics pentru diferențierea utilizatorilor',
                        exp: '24 ore',
                      },
                    ],
                  },
                },
                {
                  title: 'Mai multe informații',
                  description:
                    'Pentru orice întrebări legate de politica noastră privind cookie-urile și alegerile dumneavoastră, vă rugăm să <a href="/contact" class="cc-link">ne contactați</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
