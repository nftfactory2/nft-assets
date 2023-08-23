import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import { faCheckCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import nft1 from '../../Assets/NFT4 (1).png';
import nft2 from '../../Assets/Bronze 1.0.png';
import nft3 from '../../Assets/Bronze 1.1.png';
import nft4 from '../../Assets/Coal 1.0.png';
import nft5 from '../../Assets/Coal 1.1.png';
import nft6 from '../../Assets/Coal 1.2.png';
import { Link } from 'react-router-dom';

const MarketPlace = () => {
  return (
    <div className='marketplace'>
      <div className='introduction'>
        <div className='text-zone'>
          <div className='search'>
            <FontAwesomeIcon icon={faSearch} />

            <input placeholder='search' className='search-input' />
          </div>
          <h1 className='explore'>
            Explore thousands of digital assets from trending to curated
            collections
          </h1>
        </div>

        <div className='nftGroup-picture'>
          <h1>NFTS SPECIAL</h1>
          <img src={nft1} alt='' />
          <div className='groupnftdetails'>
            <div className='nftName'>
              <p>Bake shop NFTs</p> <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div className='price'>
              <div className='left-span'>
                <small>floor</small>
                <p>0.0025 ETH</p>
              </div>
              <div className='right-span'>
                <small>Total Volume</small>
                <p>0.0025 ETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='trending-header'>
        <h1>Trending Collections</h1>
      </div>
      <div className='trending-header'>
        <p>
          Explore series of our regularly updated trending collection for you
        </p>
      </div>

      <section className='nft-tray'>
        <div className='trending'>
          <div className='nftboxes'>
            <div className='nftbox'>
              <img src={nft2} alt='nft' />
              <div className='caption'>
                <h3>Shoe Fac NFTS</h3> <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className='price'>
                <div className='left-span'>
                  <small>floor</small>
                  <span>0.0025 ETH</span>
                </div>
                <div className='right-span'>
                  <small>Total Volume</small>
                  <span>0.0025 ETH</span>
                </div>
              </div>
              <div className='viewdetails'>
                <Link class='active' to='/details'>
                  view details
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='trending'>
          <div className='nftboxes'>
            <div className='nftbox'>
              <img src={nft3} alt='nft' />
              <div className='caption'>
                <h3>Shoe Fac NFTS</h3> <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className='price'>
                <div className='left-span'>
                  <small>floor</small>
                  <span>0.0025 ETH</span>
                </div>
                <div className='right-span'>
                  <small>Total Volume</small>
                  <span>0.0025 ETH</span>
                </div>
              </div>
              <div className='viewdetails'>
                <Link class='active' to='/details'>
                  view details
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='trending'>
          <div className='nftboxes'>
            <div className='nftbox'>
              <img src={nft4} alt='nft' />
              <div className='caption'>
                <h3>Shoe Fac NFTS</h3> <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className='price'>
                <div className='left-span'>
                  <small>floor</small>
                  <span>0.0025 ETH</span>
                </div>
                <div className='right-span'>
                  <small>Total Volume</small>
                  <span>0.0025 ETH</span>
                </div>
              </div>
              <div className='viewdetails'>
                <Link class='active' to='/details'>
                  view details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='nftscollections'>
        <div className='trending-header'>
          <h1>NFTs Collection by NSMEs</h1>
        </div>
        <div className='trending-header'>
          <p>
            Check out all the latest Product NFTs from your favourite brand
            worldwide
          </p>
        </div>

        <section className='nft-tray'>
          <div className='trending'>
            <div className='nftboxes'>
              <div className='nftbox'>
                <img src={nft5} alt='nft' />
                <div className='caption'>
                  <h3>Shoe Fac NFTS</h3>{' '}
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div className='price'>
                  <div className='left-span'>
                    <small>floor</small>
                    <span>0.0025 ETH</span>
                  </div>
                  <div className='right-span'>
                    <small>Total Volume</small>
                    <span>0.0025 ETH</span>
                  </div>
                </div>
                <div className='details'>
                  <Link class='active' to='/details'>
                    view details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='trending'>
            <div className='nftboxes'>
              <div className='nftbox'>
                <img src={nft6} alt='nft' />
                <div className='caption'>
                  <h3>Shoe Fac NFTS</h3>{' '}
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div className='price'>
                  <div className='left-span'>
                    <small>floor</small>
                    <span>0.0025 ETH</span>
                  </div>
                  <div className='right-span'>
                    <small>Total Volume</small>
                    <span>0.0025 ETH</span>
                  </div>
                </div>
                <div className='viewdetails'>
                  <Link class='active' to='/details'>
                    view details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='trending'>
            <div className='nftboxes'>
              <div className='nftbox'>
                <img src={nft6} alt='nft' />
                <div className='caption'>
                  <h3>Shoe Fac NFTS</h3>{' '}
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div className='price'>
                  <div className='left-span'>
                    <small>floor</small>
                    <span>0.0025 ETH</span>
                  </div>
                  <div className='right-span'>
                    <small>Total Volume</small>
                    <span>0.0025 ETH</span>
                  </div>
                </div>
                <div className='viewdetails'>
                  <Link class='active' to='/details'>
                    view details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className='topsellers'>
        <div className='h1-header'>
          <h1>Top Sellers</h1>
        </div>
        <div className='time-box'>
          <div className='time'>
            <span>24 hrs</span>
            <span>30 days</span>

            <span>7 days</span>
          </div>
        </div>
        <div className='lines'>
          <div className='line 1'>
            {' '}
            <div className='topsellersBox'>
              <span>1.</span>
              <div className='img-box'>
                {' '}
                <img src={nft6} alt='' />
              </div>
              <div>
                <h4>Shoe Fac NFTs</h4>
              </div>
              <div>
                <h6>24hrs volume</h6>
                <h5>12.1k ETH</h5>
              </div>
            </div>
            <div className='topsellersBox'>
              <span>2.</span>
              <div className='img-box'>
                {' '}
                <img src={nft6} alt='' />
              </div>
              <div>
                <h4>Shoe Fac NFTs</h4>
              </div>
              <div>
                <h6>24hrs volume</h6>
                <h5>12.1k ETH</h5>
              </div>
            </div>
            <div className='topsellersBox'>
              <span>3.</span>
              <div className='img-box'>
                {' '}
                <img src={nft6} alt='' />
              </div>
              <div>
                <h4>Shoe Fac NFTs</h4>
              </div>
              <div>
                <h6>24hrs volume</h6>
                <h5>12.1k ETH</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h5>1</h5>
    </div>
  );
};

export default MarketPlace;
