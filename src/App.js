import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MenuLanguages from './components/molecules/MenuLanguages/MenuLanguages';
import './App.css';
import { Grid } from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';

function App() {
  const languages = [
    { name: 'HTML5', text: 'Html5', icon: 'devicon-html5-plain', color: '#ffffff' },
    { name: 'PYTHON', text: 'Python', icon: 'devicon-python-plain', color: '#ffffff', selected: true },
    { name: 'CSS', text: 'Css', icon: 'devicon-css3-plain', color: '#ffffff' },
    { name: 'JAVA', text: 'Java', icon: 'devicon-java-plain', color: '#ffffff' },
    { name: 'JAVASCRIPT', text: 'Javascript', icon: 'devicon-javascript-plain', color: '#ffffff' },
    { name: 'ANGULARJS', text: 'Angularjs', icon: 'devicon-angularjs-plain', color: '#ffffff' },
    { name: 'ANDROID', text: 'Android', icon: 'devicon-android-plain', color: '#ffffff' },
    { name: 'REACT', text: 'React', icon: 'devicon-react-plain', color: '#ffffff' },
    { name: 'SQL', text: 'Sql', icon: 'devicon-sql-plain', color: '#ffffff' },
    { name: 'DOCKER', text: 'Docker', icon: 'devicon-docker-plain', color: '#ffffff' },
    { name: 'GIT', text: 'Git', icon: 'devicon-git-plain', color: '#ffffff' }
  ];

  const categories = gql`
    query GetCategories { 
      categories {
        id
        label
        technologies {
          id
          label
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(categories);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>

  return (
      <React.Fragment>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={4}>
                  <Typography variant="h6">CodeTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  <form>
                    <TextField 
                      id="user-mail" 
                      label="E mail" 
                      type="email" 
                      placeholder="Email" />
                  </form>
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Container>
            <MenuLanguages listLanguages={languages}></MenuLanguages>
            <ul>
              {data.categories.map(({ id, label }) => (
                <li key={id}>{label}</li>
              ))}
            </ul>
          </Container>
        </div>
      </React.Fragment>
  );
}

export default App;
