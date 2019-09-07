import { Card } from 'antd';
import { MembershipListComponent } from '../lib/list';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

storiesOf('Memberships', module).add(
  'basic',
  () => (
    <div style={{ padding: 80 }}>
      <Card title="Memberships">
        <MembershipListComponent
          memberships={[
            {
              id: '1',
              member: { id: 'john.doe', email: 'john.doe@example.com' },
              role: 'admin'
            }
          ]}
          roles={[{ id: 'admin', name: 'Administrator' }]}
          onDelete={action('delete')}
        />
      </Card>
    </div>
  ),
  { notes: 'A very simple component' }
);
