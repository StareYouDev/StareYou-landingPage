'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const MIN_LOADING_TIME = 2000;

export default function InitialLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const hideLoader = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(MIN_LOADING_TIME - elapsedTime, 0);

      setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
    }

    return () => {
      window.removeEventListener('load', hideLoader);
    };
  }, []);

  return (
    <div id="initial-loader" className={loading ? '' : 'hidden'}>
      <Image src="/loading.gif" alt="Loading" width={100} height={100} />
    </div>
  );
}
