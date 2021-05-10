import React from "react";
import { useQuery, gql } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Language from "../../atoms/Language/Language";
import { GetCategories_categories } from "../../../graphql-types";
import { CATEGORIES } from '../../../queries/categories';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    paddingTop: "3rem",
  },
  gridList: {
    width: 500,
    height: "100%",
  },
});

export default function MenuLanguages() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(CATEGORIES);
  // const categories: GetCategories = data.categories;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className={classes.root}>
      {data.categories.map((category: GetCategories_categories) => (
        <div key={category.id}>
            <Typography 
                variant="h5"
                component="h3"
                gutterBottom
            >
            {category.label}
            </Typography>
            <GridList className={classes.gridList} cols={4}>
                {category.technologies.map(technology => (
                    <GridListTile key={technology.id}>
                        <Language 
                            image={technology.image} 
                            text={technology.label}
                            id={technology.id} 
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
      ))}
    </div>
  );
}
