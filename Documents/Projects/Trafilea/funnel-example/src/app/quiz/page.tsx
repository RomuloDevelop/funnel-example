"use client";

import { useState } from "react";
import styles from "./page.module.css";
import {
  customEventEmitter,
  EventsEnum,
  setQuizValue,
} from "funnel-builder-sidecar";

const OfferQuiz = () => {
  const [website, setWebsite] = useState(0);
  const [age, setAge] = useState(0);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setQuizValue(website + age);
    customEventEmitter.emit(EventsEnum.TEST_EVENT);
  };

  const handleWebsite = (e: any) => {
    setWebsite(+e.target.value);
  };
  const handleAge = (e: any) => {
    setAge(+e.target.value);
  };

  return (
    <main className={styles.main}>
      <h1>Tell us about yourself</h1>
      <form onSubmit={handleSubmit}>
        <h2>Please select your favorite Trafilea web page:</h2>
        <div onChange={handleWebsite}>
          <input
            type="radio"
            id="shogun"
            name="Trafilea"
            value={1}
            checked={website == 1}
          />
           <label htmlFor="shogun">Shogun</label>
          <br />
          <input
            type="radio"
            id="shapermind"
            name="Trafilea"
            value={2}
            checked={website == 2}
          />
           <label htmlFor="shapermind">Shapermind</label>
          <br />
          <input
            type="radio"
            id="truekind"
            name="Trafilea"
            value={3}
            checked={website == 3}
          />
           <label htmlFor="truekind">Truekind</label>
        </div>
        <br />
        <h2>Please select your age:</h2>
        <input
          type="radio"
          id="age1"
          name="age"
          value={1}
          checked={age == 1}
          onChange={handleAge}
        />
         <label htmlFor="age1">0 - 30</label>
        <br />
        <input
          type="radio"
          id="age2"
          name="age"
          value={2}
          checked={age == 2}
          onChange={handleAge}
        />
         <label htmlFor="age2">31 - 60</label>
        <br />
        <input
          type="radio"
          id="age3"
          name="age"
          value={3}
          checked={age == 3}
          onChange={handleAge}
        />
         <label htmlFor="age3">61 - 100</label>
        <br />
        <br />
        <button style={{ float: "right" }} type="submit">
          Send
        </button>
      </form>
    </main>
  );
};

export default OfferQuiz;
