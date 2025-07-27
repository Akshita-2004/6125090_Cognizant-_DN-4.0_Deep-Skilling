import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ name, trainer, status }) {
  const statusClass =
    status.toLowerCase() === 'ongoing' ? styles['status-badge'] : `${styles['status-badge']} ${styles.completed}`;

  return (
    <div className={styles.box}>
      <h3 style={{ color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue' }}>{name}</h3>
      <dl>
        <dt>Trainer</dt>
        <dd>{trainer}</dd>
        <dt>Status</dt>
        <dd><span className={statusClass}>{status}</span></dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
