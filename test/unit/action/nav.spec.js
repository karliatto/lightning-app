import createMemoryHistory from 'history/createMemoryHistory';
import { syncHistoryWithStore } from 'mobx-react-router';
import { Store } from '../../../src/store';
import * as log from '../../../src/action/log';
import NavAction from '../../../src/action/nav';

describe('Action Nav Unit Tests', () => {
  let store;
  let sandbox;
  let nav;

  beforeEach(() => {
    sandbox = sinon.createSandbox({});
    sandbox.stub(log);
    store = new Store();
    nav = new NavAction(store);
    syncHistoryWithStore(createMemoryHistory(), store.route);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('goLoader()', () => {
    it('should set correct route', () => {
      nav.goLoader();
      expect(store.route.location.pathname, 'to equal', '/loader');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goSelectSeed()', () => {
    it('should set correct route', () => {
      nav.goSelectSeed();
      expect(store.route.location.pathname, 'to equal', '/select-seed');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goSeed()', () => {
    it('should set correct route', () => {
      nav.goSeed();
      expect(store.route.location.pathname, 'to equal', '/seed');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goSeedVerify()', () => {
    it('should set correct route', () => {
      nav.goSeedVerify();
      expect(store.route.location.pathname, 'to equal', '/seed-verify');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goRestoreSeed()', () => {
    it('should set correct route', () => {
      nav.goRestoreSeed();
      expect(store.route.location.pathname, 'to equal', '/restore-seed');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goSeedSuccess()', () => {
    it('should set correct route', () => {
      nav.goSeedSuccess();
      expect(store.route.location.pathname, 'to equal', '/seed-success');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goSetPassword()', () => {
    it('should set correct route', () => {
      nav.goSetPassword();
      expect(store.route.location.pathname, 'to equal', '/set-password');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goPassword()', () => {
    it('should set correct route', () => {
      nav.goPassword();
      expect(store.route.location.pathname, 'to equal', '/password');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goRestorePassword()', () => {
    it('should set correct route', () => {
      nav.goRestorePassword();
      expect(store.route.location.pathname, 'to equal', '/restore-password');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goNewAddress()', () => {
    it('should set correct route', () => {
      nav.goNewAddress();
      expect(store.route.location.pathname, 'to equal', '/new-address');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goLoaderSyncing()', () => {
    it('should set correct route', () => {
      nav.goLoaderSyncing();
      expect(store.route.location.pathname, 'to equal', '/loader-syncing');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goWait()', () => {
    it('should set correct route', () => {
      nav.goWait();
      expect(store.route.location.pathname, 'to equal', '/wait');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goHome()', () => {
    it('should set correct route', () => {
      nav.goHome();
      expect(store.route.location.pathname, 'to equal', '/home');
      expect(store.route.history.entries.length, 'to equal', 1);
    });
  });

  describe('goPay()', () => {
    it('should set correct route', () => {
      nav.goPay();
      expect(store.route.location.pathname, 'to equal', '/payment');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goPayLightningConfirm()', () => {
    it('should set correct route', () => {
      nav.goPayLightningConfirm();
      expect(
        store.route.location.pathname,
        'to equal',
        '/pay-lightning-confirm'
      );
    });
  });

  describe('goPayLightningDone()', () => {
    it('should set correct route', () => {
      nav.goPayLightningDone();
      expect(store.route.location.pathname, 'to equal', '/pay-lightning-done');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goPaymentFailed()', () => {
    it('should set correct route', () => {
      nav.goPaymentFailed();
      expect(store.route.location.pathname, 'to equal', '/payment-failed');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goPayBitcoin()', () => {
    it('should set correct route', () => {
      nav.goPayBitcoin();
      expect(store.route.location.pathname, 'to equal', '/pay-bitcoin');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goPayBitcoinConfirm()', () => {
    it('should set correct route', () => {
      nav.goPayBitcoinConfirm();
      expect(store.route.location.pathname, 'to equal', '/pay-bitcoin-confirm');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goPayBitcoinDone()', () => {
    it('should set correct route', () => {
      nav.goPayBitcoinDone();
      expect(store.route.location.pathname, 'to equal', '/pay-bitcoin-done');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goInvoice()', () => {
    it('should set correct route', () => {
      nav.goInvoice();
      expect(store.route.location.pathname, 'to equal', '/invoice');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goInvoiceQR()', () => {
    it('should set correct route', () => {
      store.displayCopied = true;
      nav.goInvoiceQR();
      expect(store.route.location.pathname, 'to equal', '/invoice-qr');
      expect(store.route.history.entries.length, 'to equal', 2);
      expect(store.displayCopied, 'to be', false);
    });
  });

  describe('goChannels()', () => {
    it('should set correct route', () => {
      nav.goChannels();
      expect(store.route.location.pathname, 'to equal', '/channel');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goChannelDetail()', () => {
    it('should set correct route', () => {
      nav.goChannelDetail();
      expect(store.route.location.pathname, 'to equal', '/channel-detail');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goChannelDelete()', () => {
    it('should set correct route', () => {
      nav.goChannelDelete();
      expect(store.route.location.pathname, 'to equal', '/channel-delete');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goChannelCreate()', () => {
    it('should set correct route', () => {
      nav.goChannelCreate();
      expect(store.route.location.pathname, 'to equal', '/channel-create');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goTransactions()', () => {
    it('should set correct route', () => {
      nav.goTransactions();
      expect(store.route.location.pathname, 'to equal', '/transaction');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goTransactionDetail()', () => {
    it('should set correct route', () => {
      nav.goTransactionDetail();
      expect(store.route.location.pathname, 'to equal', '/transaction-detail');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goNotifications()', () => {
    it('should set correct route', () => {
      nav.goNotifications();
      expect(store.route.location.pathname, 'to equal', '/notification');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goSettings()', () => {
    it('should set correct route', () => {
      nav.goSettings();
      expect(store.route.location.pathname, 'to equal', '/setting');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goSettingsUnit()', () => {
    it('should set correct route', () => {
      nav.goSettingsUnit();
      expect(store.route.location.pathname, 'to equal', '/setting-unit');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goSettingsFiat()', () => {
    it('should set correct route', () => {
      nav.goSettingsFiat();
      expect(store.route.location.pathname, 'to equal', '/setting-fiat');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goCLI()', () => {
    it('should set correct route', () => {
      nav.goCLI();
      expect(store.route.location.pathname, 'to equal', '/cli');
      expect(store.route.history.entries.length, 'to equal', 2);
    });
  });

  describe('goCreateChannel()', () => {
    it('should set correct route', () => {
      nav.goCreateChannel();
      expect(store.route.location.pathname, 'to equal', '/create-channel');
    });
  });

  describe('goDeposit()', () => {
    it('should set correct route', () => {
      store.displayCopied = true;
      nav.goDeposit();
      expect(store.route.location.pathname, 'to equal', '/deposit');
      expect(store.route.history.entries.length, 'to equal', 2);
      expect(store.displayCopied, 'to be', false);
    });
  });

  describe('goBack()', () => {
    it('should set correct route', () => {
      nav.goSettings();
      nav.goSettingsUnit();
      expect(store.route.location.pathname, 'to equal', '/setting-unit');
      expect(store.route.history.entries.length, 'to equal', 3);
      nav.goBack();
      expect(store.route.location.pathname, 'to equal', '/setting');
      expect(store.route.history.entries.length, 'to equal', 3);
      nav.goBack();
      expect(store.route.location.pathname, 'to equal', '/');
      expect(store.route.history.entries.length, 'to equal', 3);
    });
  });
});
