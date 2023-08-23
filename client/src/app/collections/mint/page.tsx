import TopNavigation from '@/common/navs/top/TopNavigation';
import Footer from '@/components/Footer';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

const Mint = () => {
  return (
    <div className={styles.mint}>
      <TopNavigation />
      <div className={styles.mint_details}>
        <div className={styles.left}>
          <Image
            src='/images/NFT4.svg'
            alt=''
            height={400}
            width={568}
            // style={{ width: "568px", height: "400px" }}
          />
          <div>
            <p>
              FANRT Fac NFTS{' '}
              <Image
                src='/images/badge-check.svg'
                alt=''
                height={100}
                width={100}
              />
            </p>
            <span>0.05 eth</span>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.package}>
            <h5>Burger Fac NFTs</h5>
            <p>Package ###</p>
          </div>
          <div className={styles.price}>
            <div>
              <span>Price(1)</span>
              <p>0.05 eth</p>
            </div>
            <div>
              <span>You Pay</span>
              <p>0.05 eth</p>
            </div>
          </div>
          <div className={styles.mint_btn}>
            <button className={styles.home_btn}>Mint</button>
            <p>
              By clicking “Mint” you agree to the Nft Factory. Terms of Service.
              Each transaction will incur non-refundable gas fees.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mint;
