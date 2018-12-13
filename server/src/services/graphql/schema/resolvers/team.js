import { Team } from '../../../../models';

export default {
  Query: {
    teams: async ({ ctx }) => {
      const payload = {}
      return await Team.find(payload)
    },
  },
  Team: {
  },
};
