import styles from "./Footer.module.css";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/3bdelrahman-hany",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.14 8.96 7.5 10.42.55.1.75-.24.75-.53 0-.26-.01-.96-.02-1.88-3.05.66-3.7-1.47-3.7-1.47-.5-1.27-1.22-1.6-1.22-1.6-1-.69.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.69-1.48-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.17 1.13-2.94-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12.88-.24 1.82-.37 2.75-.37.93 0 1.87.13 2.75.37 2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.77 1.13 1.74 1.13 2.94 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1 .74 2.02 0 1.46-.01 2.63-.01 2.99 0 .29.2.64.76.53 4.36-1.46 7.49-5.57 7.49-10.42C23.01 5.24 18.27.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abdelrahman-hany-1aba89376/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/201142387632",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:abdelrahman.hany.dev@gmail.com",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
  },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logoInitials}>AH</span>
            <div className={styles.brandText}>
              <span className={styles.brandName}>Abdelrahman Hany</span>
              <span className={styles.brandRole}>Full Stack Developer</span>
            </div>
          </div>
          <ul className={styles.socials} aria-label="Social links">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.svg}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} Abdelrahman Hany. All rights reserved.
          </p>
          <p className={styles.built}>Built with React &amp; Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
