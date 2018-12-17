interface Constants {
  apiUrl: string;
  env: string;
}

const development = {
  env: 'development',
  apiUrl: 'http://localhost:4000/api',
};

const mock = {
  ...development,
  env: 'mock',
  apiUrl: 'http://mock_server:4201/api',
}

const production = {
  ...development,
  env: 'production',
  apiUrl: 'http://localhost:4000/api',
}

const test = {
  ...development,
  env: 'test',
  apiUrl: 'http://localhost:4000/api',
}

const environments: { [key: string]: Constants } = {
  development,
  mock,
};

const key = process.env.REACT_APP_MOCK_API === 'true' ? 'mock' : process.env.NODE_ENV;

export default environments[key] || environments.development;