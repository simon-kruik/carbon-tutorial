import React from 'react';
import RepoTable from './RepoTable';
import { Grid, Column } from '@carbon/react';

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
  },
  {
    key: 'links',
    header: 'Links',
  },
];

const rows = [
  {
    id: '1',
    name: 'Repo 1',
    createdAt: '2012-02-03',
    updatedAt: '2012-03-04',
    issueCount: '20',
    stars: '430',
    links: 'Links',
  },
  {
    id: '2',
    name: 'Repo 2',
    createdAt: '2013-02-06',
    updatedAt: '2013-04-22',
    issueCount: '54',
    stars: '23',
    links: 'Links',
  },
  {
    id: '3',
    name: 'Repo 3',
    createdAt: '2020-02-02',
    updatedAt: '2023-08-07',
    issueCount: '31',
    stars: '423',
    links: 'Links',
  },
];

const RepoPage = () => {
  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <RepoTable headers={headers} rows={rows} />
      </Column>
    </Grid>
  );
};

export default RepoPage;
