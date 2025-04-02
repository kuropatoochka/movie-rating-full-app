import styles from './styles.module.css';
import { Logo } from "@/shared";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()

  const menuItems = [
    { id: '1', label: 'Main', path: '/' },
    { id: '2', label: 'Favorites', path: '/favorites' },
    { id: '3', label: 'Search', path: '/search' },
  ]

  const handleMenuClick = ( path: string ) => {
    navigate(path)
  }

  return (
    <footer className={styles.footer}>
      <Logo/>
      <ul className={styles.footer__content_items}>
        {menuItems.map(item =>
          <li
            key={item.id}
            className={styles.footer__content_item}
            onClick={() => handleMenuClick(item.path)}
          >
            {item.label}
          </li>
        )}
      </ul>
    </footer>
  );
};

export default Footer;