import React, {FC} from 'react';

import {AppFigure} from '../figures/app-figure';

import {AppLostFiguresItem, AppLostFiguresTitle, AppLostFiguresWrapper} from './app-lost-figures.styled';

interface Props {
  title: string;
  figures: AppFigure[];
}

export const AppLostFigures: FC<Props> = ({title, figures}) => {
  return (
    <AppLostFiguresWrapper>
      <AppLostFiguresTitle>
        {title}
      </AppLostFiguresTitle>

      {figures.map(figure => (
        <AppLostFiguresItem key={figure.id}>
          {figure.logo && <img src={figure.logo} alt={figure.name}/>}
          {figure.name}
        </AppLostFiguresItem>
      ))}
    </AppLostFiguresWrapper>
  );
}
