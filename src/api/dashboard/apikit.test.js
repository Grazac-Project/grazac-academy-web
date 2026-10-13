import axios from 'axios';

jest.mock('axios', () => ({ create: jest.fn((config) => ({ defaults: config })) }));

describe('API origins', () => {
  const originalApi = process.env.REACT_APP_API_URL;
  const originalAdmin = process.env.REACT_APP_ADMIN_API_URL;

  beforeEach(() => axios.create.mockImplementation((config) => ({ defaults: config })));

  afterEach(() => {
    if (originalApi === undefined) delete process.env.REACT_APP_API_URL;
    else process.env.REACT_APP_API_URL = originalApi;
    if (originalAdmin === undefined) delete process.env.REACT_APP_ADMIN_API_URL;
    else process.env.REACT_APP_ADMIN_API_URL = originalAdmin;
    axios.create.mockClear();
  });

  it('uses configured local origins for every client', () => {
    process.env.REACT_APP_API_URL = 'http://localhost:9900/';
    process.env.REACT_APP_ADMIN_API_URL = 'http://localhost:9900/';
    jest.isolateModules(() => {
      const clients = require('./apikit');
      expect(clients.academyApiUrl).toBe('http://localhost:9900');
      expect(clients.APIKit.defaults.baseURL).toBe('http://localhost:9900');
      for (const client of [clients.AdminApiKit, clients.AdminApi, clients.forHire]) {
        expect(client.defaults.baseURL).toBe('http://localhost:9900/');
      }
    });
  });

  it('preserves deployed defaults when configuration is absent', () => {
    delete process.env.REACT_APP_API_URL;
    delete process.env.REACT_APP_ADMIN_API_URL;
    jest.isolateModules(() => {
      const clients = require('./apikit');
      expect(clients.APIKit.defaults.baseURL).toBe('https://grazac-academy-back-end-ej7s.onrender.com');
      expect(clients.AdminApi.defaults.baseURL).toBe('https://grazac-academy-admin.onrender.com');
    });
  });
});
