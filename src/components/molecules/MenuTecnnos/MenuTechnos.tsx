import React, { FC, ReactElement } from "react";
import { useQuery } from "@apollo/client";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import TechnoButton from "../../atoms/TechnoButton/TechnoButton";
import {
  GetCategories_categories,
  GetCategories_categories_technologies
} from "../../../graphql-types";
import { CATEGORIES } from '../../../queries/categories';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    list: {
      padding: theme.spacing(2),
    },
  })
);

const MenuTechnos: FC<{}> = (): ReactElement => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const technologies: GetCategories_categories_technologies[] = data.categories.reduce(
      (acc: [], cur: GetCategories_categories) => [...acc, ...cur.technologies], []
  );

  return (
    <section className={classes.root}>
      {technologies.map((technology: GetCategories_categories_technologies) => (
        <div key={technology.id} className={classes.list}>
          <TechnoButton
            image={technology.image}
            text={technology.label}
            id={technology.id}
          />
        </div>
      ))}
    </section>
  );
};

export default MenuTechnos;