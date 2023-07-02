import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "casa",
  description: "A VitePress Site",
  base: '/casa/',
  locales: {
    root: {
      label: 'Norsk',
      lang: 'no',
      link: '/no/',
      themeConfig: {
        nav: [
          { text: 'Hjem', link: '/no/' },
        ],

        sidebar: [
          {
            text: 'Ankomst og avreise',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Huset i oversikt',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Husregler',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Sikkerhet',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Internett of kommunikasjon',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Husholdningsartikler',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Nærliggende fasiliteter of tjenester',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Transport og parkering',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Annen nyttig info',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Kontaktopplysninger',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Examples', link: '/markdown-examples' }
        ],

        sidebar: [
          {
            text: 'Arrival and Departure',
            items: [
              { text: 'Arrival', link: '/en/info/arrival-and-departure/arrival' },
              { text: 'Check-in/Check-out', link: '/en/info/arrival-and-departure/check-in-out' },
              { text: 'Departure', link: '/en/info/arrival-and-departure/departure' }
            ]
          },
          {
            text: 'House Overview',
            items: [
              { text: 'Property', link: '/en/info/house/property' },
              {
                text: 'Usage', 
                collapsed: true,
                items: [
                  { text: 'TV', link: '/en/info/house/tv' },
                  { text: 'Kitchen', link: '/en/info/house/kitchen' },
                  { text: 'Bathroom', link: '/en/info/house/bathroom' },
                  { text: 'Weather', link: '/en/info/house/weather' },
                  { text: 'Robots', link: '/en/info/house/robots' },
                  { text: 'Outside', link: '/en/info/house/outside' },
                ]
              },
              {
                text: 'Temperature & Air', 
                collapsed: true,
                items: [
                  { text: 'Heating', link: '/en/info/house/heating' },
                  { text: 'Air Condition', link: '/en/info/house/ac' },
                  { text: 'Ventilation', link: '/en/info/house/ventilation' },
                ]
              },
            ]
          },
          {
            text: 'House Rules',
            items: [
              { text: 'Friendly rules', link: '/en/info/rules/' },
            ]
          },
          {
            text: 'Safety and Security',
            items: [
              { text: 'In case of emergency', link: '/en/info/security/emergency' },
              { text: 'Fire', link: '/en/info/security/fire' },
              { text: 'First-aid', link: '/en/info/security/firstaid' },
              { text: 'Flooding', link: '/en/info/security/flooding' },
            ]
          },
          {
            text: 'Internet and Communication',
            items: [
              { text: 'Connect to WIFI', link: '/en/info/internet/connect' },
            ]
          },
          {
            text: 'Household Supplies',
            items: [
              { text: 'Bedroom & Bathroom', link: '/en/info/supplies/bedbath' },
              { text: 'Cleaning & Laundry', link: '/en/info/supplies/cleaning' },
              { text: 'Recycling & Garbage Disposal', link: '/en/info/supplies/garbage' },
            ]
          },
          {
            text: 'Nearby Amenities and Services',
            items: [
              { text: 'Shopping', link: '/en/info/nearby/shop' },
              { text: 'Places to eat', link: '/en/info/nearby/eat' },
              { text: 'Things to do', link: '/en/info/nearby/attractions' },
            ]
          },
          {
            text: 'Transportation and Parking',
            items: [
              { text: 'Train', link: '/en/info/travel/train' },
              { text: 'Bus', link: '/en/info/travel/bus' },
              { text: 'Car', link: '/en/info/travel/car' },
            ]
          },
          {
            text: 'Additional Instructions',
            items: [
              { text: 'Good to know!', link: '/en/info/additional-instructions/goodtoknow' },
            ]
          },
          {
            text: 'Contact information',
            items: [
              { text: 'How to get in touch', link: '/en/info/contact/contact' },
            ]
          },
          {
            text: 'Frequently Asked Questions',
            items: [
              { text: 'FAQ', link: '/en/info/faq/' },
            ]
          }
        ],
      }
    },
  },

  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: {
      svg: '<svg role="img" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="64" height="64"><path d="M60.9 45.487l-.966-2.305-1.475-3.27-.062-.062a661.83 661.83 0 0 0-14.15-28.957l-.198-.384-1.524-3.073a18.4 18.4 0 0 0-2.305-3.52A10.35 10.35 0 0 0 32.027 0a10.76 10.76 0 0 0-8.203 3.84 22.1 22.1 0 0 0-2.305 3.52l-1.735 3.395c-4.956 9.615-9.74 19.342-14.163 28.957l-.062.124c-.384 1.053-.892 2.13-1.413 3.284-.322.702-.644 1.47-.966 2.305a14.4 14.4 0 0 0-.768 6.914 13.63 13.63 0 0 0 8.327 10.631 13.16 13.16 0 0 0 5.192 1.028 14.57 14.57 0 0 0 1.66-.124 16.93 16.93 0 0 0 6.406-2.18 32.44 32.44 0 0 0 7.943-6.666 33.62 33.62 0 0 0 7.943 6.666 16.92 16.92 0 0 0 6.406 2.18c.55.073 1.105.114 1.66.124 1.783.018 3.55-.332 5.192-1.028a13.63 13.63 0 0 0 8.327-10.631 12.11 12.11 0 0 0-.582-6.852zM32.026 48.82c-3.457-4.362-5.7-8.45-6.468-11.92-.314-1.277-.38-2.6-.198-3.903.127-.965.48-1.886 1.028-2.7a6.79 6.79 0 0 1 5.638-2.825c2.236-.086 4.362.974 5.638 2.813a6.17 6.17 0 0 1 1.028 2.69 10.3 10.3 0 0 1-.198 3.903c-.768 3.395-3 7.435-6.468 11.92zm25.562 3c-.5 3.337-2.7 6.166-5.836 7.435a9.7 9.7 0 0 1-4.857.706 12.6 12.6 0 0 1-4.87-1.66 29.91 29.91 0 0 1-7.298-6.195c4.225-5.192 6.8-9.913 7.757-14.163a16.11 16.11 0 0 0 .322-5.452c-.238-1.567-.832-3.06-1.735-4.362-2.062-2.942-5.453-4.666-9.045-4.597-3.572-.046-6.942 1.65-9.033 4.547-.903 1.303-1.497 2.794-1.735 4.362a13.31 13.31 0 0 0 .322 5.452c.966 4.225 3.593 9.033 7.757 14.225a28.79 28.79 0 0 1-7.298 6.195 12.6 12.6 0 0 1-4.882 1.71 10.26 10.26 0 0 1-4.87-.644C9.16 58.12 6.94 55.292 6.45 51.954a10.61 10.61 0 0 1 .582-4.956c.198-.644.508-1.24.83-2.044.446-1.028.966-2.12 1.475-3.2l.062-.124c4.424-9.54 9.157-19.28 14.1-28.772l.186-.458 1.536-2.95a14.05 14.05 0 0 1 1.846-2.838 6.73 6.73 0 0 1 10.247 0 13.87 13.87 0 0 1 1.747 2.813l1.536 2.95.186.384c4.87 9.553 9.628 19.28 14.04 28.834v.062c.508 1.028.966 2.18 1.475 3.2.322.768.644 1.413.83 2.044a10.81 10.81 0 0 1 .446 4.956z" fill="#ff5a5f" fill-rule="evenodd"/></svg>'
      },
        link: 'https://www.airbnb.com/rooms/901863196372243551?guests=1&adults=1&s=67&unique_share_id=1eae2234-d033-4f87-9eb4-cd4e8b955f07',
        ariaLabel: 'Airbnb listing',
      }
    ]
  }
})
