import Image from "next/image";
import styles from "./offer-item.module.css";
import { useEffect, useState } from "react";
import {
  getCurrentNode,
  customEventEmitter,
  EventsEnum,
} from "funnel-builder-sidecar";

const OfferItem = () => {
  const [{ name, product, available_subscription }, setInfo] = useState({
    name: "",
    product: "",
    available_subscription: false,
  });

  useEffect(() => {
    const { name, product, available_subscription } = getCurrentNode();
    setInfo({ name, product, available_subscription });
  }, []);

  const onAddToCard = () => {
    customEventEmitter.emit(EventsEnum.TEST_EVENT);
  };

  return (
    <>
      <div className={styles.offer_item}>
        <h1>{name}</h1>
        <div className={styles.offer_content}>
          <Image
            src={"/underwear.webp"}
            width={300}
            height={300}
            alt="underwear"
            style={{ borderRadius: 4, objectFit: "cover" }}
            objectFit="cover"
          />

          <p>{product}</p>
        </div>

        {!available_subscription ? null : (
          <div className={styles.subscription}>
            <input
              type="checkbox"
              id="subscription"
              name="subscription"
              value="subscription"
            />
            <label htmlFor="subscription">Subscribe and Save 10%</label>
          </div>
        )}
      </div>
      <button onClick={onAddToCard}>Add to Cart</button>
    </>
  );
};

export default OfferItem;
