import React, { FC } from 'react';
import { Action, Space } from 'ui/elements';
import { Layout } from 'ui/components';
import { Link } from 'react-router-dom';

const DashboardPage: FC = () => (
  <Layout header={'Dashboard Page'}>
    <Space>
      <Action.Link as={Link} to={'app2'}>
        go to app2
      </Action.Link>
    </Space>
  </Layout>
);

export default DashboardPage;
