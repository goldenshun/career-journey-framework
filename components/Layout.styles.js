import css from 'styled-jsx/css';
import THEME from '../constants/theme';

const styles = css`
  .root {

  }

  .top-nav {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 6px 20px;
    background-color: #fff;
  }

  .top-nav-links {
    width: 100%;
    text-align: center;
    max-width: ${THEME.containerMaxWidth};
    padding: 2rem 0;
  }
`;

export default styles;