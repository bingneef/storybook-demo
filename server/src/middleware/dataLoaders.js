import DataLoader from 'dataloader'

import { Team } from '../models';
import { mapValueResponse, mapArrayResponse} from 'map-array-response'

export default async (ctx, next) => {
  ctx.dataLoaders = {
    teamById: valueDataLoader({model: Team, field: '_id'}),
  }

  await next()
}

const valueDataLoader = ({model, field}) => {
  return new DataLoader(ids => (
    new Promise(async (resolve, reject) => {
      const docs = await model.find({ [field]: ids })
      const strIds = ids.map(id => id.toString());

      const response = mapValueResponse(strIds, field, docs);
      resolve(response)
    })
  ))
}

const arrayDataLoader = ({model, field}) => {
  return new DataLoader(ids => (
    new Promise(async (resolve, reject) => {
      const docs = await model.find({ [field]: ids })
      const strIds = ids.map(id => id.toString());

      const response = mapArrayResponse(strIds, field, docs);
      resolve(response)
    })
  ))
}
