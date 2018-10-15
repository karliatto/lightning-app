import React from 'react';
import { storiesOf } from '../storybook-react';
import Background from '../../src/component/background';
import MainContent from '../../src/component/main-content';
import BackIcon from '../../src/asset/icon/back';
import PlusIcon from '../../src/asset/icon/plus';
import CancelIcon from '../../src/asset/icon/cancel';
import ArrowDownIcon from '../../src/asset/icon/arrow-down';
import LightningBoltIcon from '../../src/asset/icon/lightning-bolt';
import QrIcon from '../../src/asset/icon/qr';
import SettingsIcon from '../../src/asset/icon/settings';
import ChannelIcon from '../../src/asset/icon/channel';

storiesOf('Icons', module)
  .addDecorator(story => (
    <Background image="purple-gradient-bg">
      <MainContent style={{ justifyContent: 'center' }}>{story()}</MainContent>
    </Background>
  ))
  .add('Back', () => <BackIcon height={24} width={24} />)
  .add('Plus', () => <PlusIcon height={24} width={24} />)
  .add('Cancel', () => <CancelIcon height={24} width={24} />)
  .add('Arrow Down', () => <ArrowDownIcon height={24} width={24} />)
  .add('Lightning Bolt', () => <LightningBoltIcon height={126} width={64} />)
  .add('QR Code', () => <QrIcon height={39} width={40} />)
  .add('Settings', () => <SettingsIcon height={24} width={24} />)
  .add('Channels', () => <ChannelIcon height={24} width={25} />);
