"use client"
import React, { useEffect } from 'react';
import $ from 'jquery';
import styles from './PaginationComponent.module.css';

const PaginationComponent = () => {
  useEffect(() => {
    function pagination() {
      var offset = $(document).scrollTop();
      var windowHeight = window.innerHeight;
      var $body = $('body');
      var padding = 0.75;
      var pages = Object.keys($('.page')).filter((section) => Number(section) + 1).map(section => Number(section) + 1);

      pages.map((page) => {
        if (offset > (windowHeight * (page - 2 + padding))) {
          $body.removeClass().addClass("page-" + page);
        }
      });
    }

    pagination();

    $(document).on('scroll', pagination);

    $(document).on('click', 'a[href^="#"]', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });

    return () => {
      $(document).off('scroll', pagination);
      $(document).off('click', 'a[href^="#"]');
    };
  }, []);

  return (
    <div className={styles.main}>
      <section className={`${styles.page} page`} id="page1">
        <h1>Page 1</h1>
      </section>

      <section className={`${styles.page} page`} id="page2">
        <h1>Page 2</h1>
      </section>

      <section className={`${styles.page} page`} id="page3">
        <h1>Page 3</h1>
      </section>

      <section className={`${styles.page} page`} id="page4">
        <h1>Page 4</h1>
      </section>

      <section className={`${styles.page} page`} id="page5">
        <h1>Page 5</h1>
      </section>

      <ul id="pagination" className={styles.pagination}>
        <li><a href="#page1"></a></li>
        <li><a href="#page2"></a></li>
        <li><a href="#page3"></a></li>
        <li><a href="#page4"></a></li>
        <li><a href="#page5"></a></li>
      </ul>
    </div>
  );
};

export default PaginationComponent;
