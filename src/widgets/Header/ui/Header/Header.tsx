import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import { Search } from "@/widgets/Search";
import { ButtonIcon, Logo } from "@/shared";
import { BookmarkFill } from "@gravity-ui/icons";

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <Logo/>
      <Search/>
      <ButtonIcon
        defaultIcon=<BookmarkFill/>
        handleClick={() => navigate('/favorites')}
      />
    </header>
  );
};

export default Header;