import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import groupPicture from '../../Assets/Group 2128 Background Removed.png';

const Home = () => {
  return (
    <div className='homepage'>
      <div className='introduction'>
        <div className='text-zone'>
          <h1>Create and manage your own NFTs, collaborate with consumers.</h1>
          <p>
            Easily create and manage your NFTs in one place, Unlock rewards,
            perks and experiences through digital collections, & Engage directly
            with consumers. let your NFTs forge connections beyond transactions.
          </p>
          <div className='active'>
            <button>Get Started</button>
            <FontAwesomeIcon icon={faWallet} />
          </div>
        </div>
        <div className='group-picture'>
          <img src={groupPicture} alt='' />
        </div>
      </div>

      <div className='question'>
        <h3>FAQ</h3>

        <fieldset>
          <label>What is NFT factory?</label>
          <select>
            <option></option>
          </select>
        </fieldset>

        <fieldset>
          <label>Why is NFT factory?</label>
          <select>
            <option></option>
          </select>
        </fieldset>
      </div>
    </div>
  );
};

export default Home;
