import React, { FC } from 'react';
import { Action } from 'ui/elements';
import { Link } from 'react-router-dom';

const DashboardPage: FC = () => (
  <div>
    Dashboard Page
    <div>
      <Action.Link as={Link} to={'app2'}>
        go to app2
      </Action.Link>
    </div>
  </div>
);

export default DashboardPage;
