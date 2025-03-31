import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import { ButtonIcon, Logo } from "@/shared/ui";
import { favoritesIcons } from "@/shared/assets";
import { Search } from "@/widgets/Search";

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <Logo/>
      <Search/>
      <ButtonIcon
        alt='favorites'
        isActive={true}
        activeIcon={favoritesIcons.favoritesActive}
        handleClick={() => navigate('/favorites')}
      />
    </header>
  );
};

export default Header;