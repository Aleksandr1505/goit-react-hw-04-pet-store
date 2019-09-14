import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PetsPage.module.css';
import items from '../pets';

const PetsPage = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>Available pets</h2>
    <ul className={styles.list}>
      {items.map(animal => (
        <li className={styles.petItem} key={animal.id}>
          <Link
            className={styles.link}
            key={animal.id}
            to={`pets/${animal.id}`}
          >
            <div>
              <img src={animal.image} alt="foto" />
              <p className={styles.name}>{animal.name}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default PetsPage;
