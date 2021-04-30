import React from 'react';
import { Header } from './components/organisms/Header/Header';
import Container from '@material-ui/core/Container';
import MenuLanguages from './components/molecules/MenuLanguages/MenuLanguages';
import { useQuery, gql } from '@apollo/client';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const theme = useTheme();
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
          image
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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Container>
            <MenuLanguages listLanguages={languages}></MenuLanguages>
            <ul>
              {data.categories.map(({ id, label, technologies }) => (
                <li key={id}>
                  {label} 
                  <ul>
                  {technologies.map(({ id, label, image }) => (
                    <li key={id}>
                      {label}
                      <img src={`data:image/png;base64,${image}`} alt="" />
                    </li>
                  ))}
                  </ul>
                  
                </li>
              ))}
            </ul>
          </Container>
        </ThemeProvider>
      </React.Fragment>
  );
}

export default App;
