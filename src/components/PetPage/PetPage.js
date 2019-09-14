import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import items from '../pets.json';
import styles from './PetPage.module.css';

const PetPage = props => {
  const item = items.find(el => el.id === props.match.params.id);
  const { id, name, image, age, gender, color, breed, description } = item;
  return (
    <div className={styles.page}>
      <button className={styles.button} type="button">
        <Link className={styles.link} to="/pets">
          Return
        </Link>
      </button>
      <div className={styles.block} key={id}>
        <h2>All about {name}</h2>
        <div className={styles.blockOne}>
          <div className={styles.image}>
            <img src={image} alt="foto" />
          </div>
          <div className={styles.blockTwo}>
            <p className={styles.p}>Age: {age}</p>
            <p className={styles.p}>Gender: {gender}</p>
            <p className={styles.p}>Color: {color}</p>
            <p className={styles.p}>Breed: {breed}</p>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

PetPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default PetPage;
