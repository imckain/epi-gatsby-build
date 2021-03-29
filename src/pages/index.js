import React from "react";

import SplashScreen from '../components/SplashScreen';
import HomeContent from '../components/HomeContent';

export default function Home() {
  return (
    <div>
      <SplashScreen />
      <div className={styles.SplashBanner}></div>
      <HomeContent />
    </div>
  )
}
