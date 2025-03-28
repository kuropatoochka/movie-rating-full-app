import React from 'react';
import styles from './styles.module.css';
import { Logo } from "@/shared/ui";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo/>
      <ul className={styles.footer__content_links}>
        <li className={styles.footer__content_item}>
          <Link to={'/'} rel="noopener noreferrer" className={styles.footer__content_link}>
            Main
          </Link>
        </li>
        <li className={styles.footer__content_item}>
          <Link to={'/favorites'} rel="noopener noreferrer" className={styles.footer__content_link}>
            Favorites
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;