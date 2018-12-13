import { client } from '../services/graphql';

export const doMutation = async ({ mutation, variables }) => {
  return await handleGraphql(client.mutate({ mutation, variables }));
};

export const doQuery = async ({ query, variables }) => {
  return await handleGraphql(client.query({ query, variables }));
};

export const handleGraphql = async request => {
  try {
    const { errors, data } = await request;
    if (errors) {
      const error = errors[0] || {};
      return {
        error: error.message,
        success: error.type === 'SnowflakeError',
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: 'Unknown error occured',
    };
  }
}