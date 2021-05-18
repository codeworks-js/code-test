import React from 'react';
import { CssBaseline } from "@material-ui/core";

import Container from '@material-ui/core/Container';
import MenuTechnos from '../../components/molecules/MenuTecnnos/MenuTechnos';

const Home = () => (
  <article>
    <CssBaseline/>
    <Container>
      <MenuTechnos/>
    </Container>
  </article>
);

export default Home;