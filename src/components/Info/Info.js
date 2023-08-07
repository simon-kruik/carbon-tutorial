import React from 'react';
import { Grid, Column } from '@carbon/react';

function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' ');
  const lastWord = splitPhrase.pop();
  return [splitPhrase.join(' ') + ' ', lastWord];
}

const InfoSection = props => (
  <Grid className={`${props.className} info-section`}>
    <Column md={8} lg={4} xlg={3}>
      <h3 className="info-section__heading">{props.heading}</h3>
    </Column>
    {props.children}
  </Grid>
);

const InfoCard = props => {
  const splitHeading = createArrayFromPhrase(props.heading);
  return (
    <Column sm={4} md={8} lg={4} className="info-card">
      <h4 className="info-card__heading">
        {`${splitHeading[0]}`}
        <strong>{splitHeading[1]}</strong>
      </h4>
      <p className="info-card__body">{props.body}</p>
      {props.icon()}
    </Column>
  );
};

export { InfoSection, InfoCard };
