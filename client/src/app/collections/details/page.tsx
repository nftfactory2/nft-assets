'use client';

import TopNavigation from '@/common/navs/top/TopNavigation';
import Footer from '@/components/Footer';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Details = () => {
  const router = useRouter();

  const Mint = () => {
    router.push('/collections/mint');
  };

  return (
    <div className={styles.details}>
      <TopNavigation />
      <div className={styles.about}>
        <div className={styles.about_top}>
          <div className={styles.image_div}>
            <Image
              src='/images/NFT4.svg'
              alt=''
              height={400}
              width={400}
              //   style={{ width: '568px', height: '400px' }}
            />
            <p>
              FANRT Fac NFTS{' '}
              <Image
                src='/images/badge-check.svg'
                alt=''
                height={100}
                width={100}
              />
            </p>
          </div>
          <div className={styles.nft_details}>
            <h4>About Collection</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium est quia illo nisi, cumque laborum vero quae maxime
              ratione nulla veniam, perferendis recusandae. Temporibus, minus
              sunt nobis asperiores qui iure.
            </p>
            <ul>
              <li>Benefit of Feature</li>
              <li>Benefit of Feature</li>
              <li>Benefit of Feature</li>
            </ul>
          </div>
        </div>
        <div className={styles.about_bottom}>
          <p>Product/Package type</p>
          <span className={styles.line}></span>
          <div>
            <p>
              Unique Owners
              <span>120 Owners</span>
            </p>
            <p>
              Mint price <span>0.05 eth</span>
            </p>
            <button className={styles.home_btn} onClick={Mint}>
              Mint
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
