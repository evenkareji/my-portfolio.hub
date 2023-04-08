import React from 'react';

import styles from '../../styles/Home.module.css';
import { Inner } from '../layout/Inner';
export const PostBody = () => {
  return (
    <Inner>
      <main className={styles.main}>
        <h1 className={styles.title}>タイトル</h1>
        <p className={styles.publishedAt}> 1111</p>
        <div className={styles.post}>こんにちは文章です</div>
      </main>
    </Inner>
  );
};
