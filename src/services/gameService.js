import xhr from './xhr/'
import { ERROR_CODES } from './xhr/config'

class GameService {
  getGameList = ({context}) => {
    return new Promise((resolve, reject) => {
      return xhr({
        url: 'gameboy/game/list/cq9',
        method: 'get',
        context
      }).then((res) => {
        return resolve(res)
      })
      .catch((err) => {
        console.log(err)
        return reject(context.$root.i18n(ERROR_CODES[err.toString()] || err))
      })
    })
  }
}

export default new GameService()
