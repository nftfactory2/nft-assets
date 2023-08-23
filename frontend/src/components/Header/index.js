import nftLogo from '../../Assets/Vector.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <header className='header'>
        <nav className='nav'>
          <ul className='header-left'>
            <img className='header-img' src={nftLogo} alt='nftLogo' />

            <li>
              <Link class='active' to='/marketplace'>
                Market Place
              </Link>
            </li>

            <li>
              <Link class='active' to='/launchpad'>
                Launch Pad
              </Link>
            </li>

            <li>
              <Link class='active' to='/'>
                Collections
              </Link>
            </li>
          </ul>
          <ul className='header-right'>
            <li>
              <Link class='active' to='/'>
                Connect wallet
              </Link>
            </li>

            <li>
              <div class='icon-bar'>
                <Link to='/profile'>
                  <FontAwesomeIcon icon={faPortrait} />
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
