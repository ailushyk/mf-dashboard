import React, { FC } from 'react';
import { Action, Space, Text } from 'ui/elements';
import { Header, Layout } from 'ui/components';
import { Link } from 'react-router-dom';

const DashboardPage: FC = () => (
  <Layout header={'Dashboard Page'}>
    <Space>
      <Header>Choice your app</Header>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae
        consequatur doloribus ducimus, eos esse fugiat id minima omnis
        perspiciatis quod vero voluptatibus.
      </Text>
      <Space m={12}>
        <Space p={'4'} flex>
          <Action.Link as={Link} to={'app1'}>
            go to app 1
          </Action.Link>
        </Space>
        <Space p={'4'} flex>
          <Action.Link as={Link} to={'app2'}>
            go to app 2
          </Action.Link>
        </Space>
      </Space>
    </Space>
  </Layout>
);

export default DashboardPage;
