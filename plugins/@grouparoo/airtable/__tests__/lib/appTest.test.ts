import { mock } from 'jest-mock-extended';
import { IClient } from '../../src/lib/client/interfaces/iClient';
import { appTest as apptest } from '../../src/lib/appTest';

describe('Plugin Test Connection Scenarios', () => {
  test('Successful Health Check', async () => {
    // instead of mock(FooInterface)
    const client = mock<IClient>();
    client.health.mockResolvedValue({ body: undefined, statusCode: 200 });
    apptest({
      app: undefined,
      appId: '',
      appOptions: undefined,
      connection: client,
    }).then(resp => expect(resp.success).toBeTruthy());
  });
  test('UnSuccessful Health Check', async () => {
    const client = mock<IClient>();
    client.health.mockResolvedValue({ body: undefined, statusCode: 404 });
    apptest({
      app: undefined,
      appId: '',
      appOptions: undefined,
      connection: client,
    }).then(resp => expect(resp.success).toBeFalsy());
  });
  test('Error Health Check', async () => {
    const client = mock<IClient>();
    client.health.mockRejectedValue(Error('Forced Error'));
    apptest({
      app: undefined,
      appId: '',
      appOptions: undefined,
      connection: client,
    }).then(resp => expect(resp.success).toBeFalsy());
  });
});
