import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import nftLogo from '../../Assets/Vector.png';
import './index.scss';

const footer = () => {
  return (
    <div className='footer'>
      <div className='nft-logo'>
        <img src={nftLogo} alt='nft-logo' className='nft-img' />
        <div></div>
        <div></div>

        <h1>NFT FACTORY</h1>
      </div>
      <div className='socials'>
        <h3>Socials</h3>
        <div className='icons'>
          <div className='icon'>
            <FontAwesomeIcon icon={faDiscord} />
            <span>Discord </span>
          </div>

          <div className='icon1'>
            <FontAwesomeIcon icon={faTwitter} />
            <span>Twitter </span>
          </div>

          <div className='icon1'>
            <FontAwesomeIcon icon={faDiscord} />
            <span>Discord</span>
          </div>
        </div>
        <span>nftfactory2@gmail.com</span>
      </div>
    </div>
  );
};

export default footer;
