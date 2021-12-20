import { connect } from '../../src/lib/connect';
import { disconnect } from '../../src/lib/disconnect';

describe('Connect and Disconnect Tests', () => {
  const options = {
    apiKey: '$AIRTABLE_API_KEY',
    baseId: '$AIRTABLE_BASE',
  };
  test('Connect with good options', async () => {
    connect({ appId: '', app: null, appOptions: options }).then(client => {
      expect(client).not.toBeNull();
    });
  });
  test('Connect with bad options', async () => {
    connect({ appId: '', app: null, appOptions: null })
      .then(client => {
        expect(client).toBeNull();
      })
      .catch(reason => expect(reason).toBeInstanceOf(Error));
  });
  test('Connect with bad options', async () => {
    const disconnection = connect({
      appId: '',
      app: null,
      appOptions: options,
    }).then(client => {
      expect(client).not.toBeNull();
      disconnect({
        app: undefined,
        appId: '',
        appOptions: undefined,
        connection: client,
      });
    });
    await disconnection;
  });
});
