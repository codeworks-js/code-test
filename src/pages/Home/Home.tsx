import React from 'react';


import './home.css';

import Container from '@material-ui/core/Container';
import MenuLanguages from '../../components/molecules/MenuLanguages/MenuLanguages';

export const Home = () => (
  <article>
    <section>
      <Container>
        <MenuLanguages />
      </Container>
    </section>
  </article>
);
