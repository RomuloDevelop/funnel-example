"use client";

import styles from "./page.module.css";
import OfferItem from "@/components/offer-item";

const Offer = () => (
  <main className={styles.main}>
    <OfferItem srcImage={"/underwear.webp"} />
  </main>
);

export default Offer;
