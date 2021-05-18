import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            background: (selected) => selected ? theme.palette.primary.main : theme.palette.primary.light,
            color: () => theme.palette.primary.contrastText,
            border: '0 none',
            textAlign: 'center',
            verticalAlign: 'bottom',
            height: '140px',
            width: '140px',
            '& img': {
                maxWidth: '70%',
                margin: 'auto',
            },
        },
        legend: {
            paddingTop: () => theme.spacing(0.7),
            fontSize: '120%',
        },
    })
);

export type Props = {
  id: string;
  image: string;
  text: string;
}

const TechnoButton: FC<Props> = ({ id, image, text }) => {
  const [selected, setSelected] = React.useState(false);
  const classes = useStyles(selected);

  return (
    <>
      <button
        className={classes.root}
        id={id}
        onClick={() => setSelected(!selected)}
      >
        <img src={`data:image/png;base64,${image}`} alt="" />
        <div className={classes.legend}>
          {text}
        </div>
      </button>
    </>
  );
}

export default TechnoButton;