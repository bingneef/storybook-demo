import {
  Token,
  Team,
  User,
} from '../models'

const clearDatabase = async () => {
  await Token.remove();
  await Team.remove();
  await User.remove()
}

const init = async () => {
  try {
    await clearDatabase()

    const user = await new User({
      firstName: 'Bing',
      lastName: 'Steup',
      email: 'bingsteup@gmail.com',
      password: 'testtest',
    }).save()

    const team_1 = await new Team({
      name: 'Ariston',
    }).save()

    const team_2 = await new Team({
      name: 'VVNoordwijk',
    }).save()
  } catch (e) {
    console.error(e)
  }

  process.exit()
}

init()
