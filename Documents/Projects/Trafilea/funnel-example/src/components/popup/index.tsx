"use client";
import Image from "next/image";
import PortalHandler from "../portalHandler";
import styles from "./popup.module.css";
import { useEffect, useState } from "react";

const Popup = ({ open, setOpen, close }: any) => {
  const _close = () => {
    setOpen(false);
    close();
  };

  if (!open) return null;

  return (
    <PortalHandler>
      <div className={styles.popup}>
        <div className={styles.popup__content}>
          <button className={styles.close} onClick={_close}>
            X
          </button>
          <Image
            src={"/underwear.webp"}
            width={300}
            height={200}
            alt="underwear"
            style={{ borderRadius: 4, objectFit: "cover" }}
            objectFit="cover"
          />
          <p className={styles.page__description}>
            Take <span className={styles.page__offer}>75% Off</span> on
            underware
          </p>
          <button onClick={_close}>Close</button>
        </div>
      </div>
    </PortalHandler>
  );
};

export default Popup;
