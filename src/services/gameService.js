// import xhr from './xhr/'
// import { ERROR_CODES } from './xhr/config'

class GameService {
  getGameList = ({context}) => {
    return new Promise((resolve, reject) => {
      // return xhr({
      //   url: 'gameboy/game/list/cq9',
      //   method: 'get',
      //   context
      // }).then((res) => {
      //   return resolve(res)
      // })
      // .catch((err) => {
      //   console.log(err)
      //   return reject(context.$root.i18n(ERROR_CODES[err.toString()] || err))
      // })
      return resolve([
        {
          'gamecode': '1',
          'gamehall': 'cq9',
          'gamename': 'FruitKing',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '2',
          'gamehall': 'cq9',
          'gamename': 'GodOfChess',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '3',
          'gamehall': 'cq9',
          'gamename': 'VampireKiss',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '4',
          'gamehall': 'cq9',
          'gamename': 'WildTarzan',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '5',
          'gamehall': 'cq9',
          'gamename': 'Mr.Rich',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '6',
          'gamehall': 'cq9',
          'gamename': '1945',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '7',
          'gamehall': 'cq9',
          'gamename': 'RaveJump',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '8',
          'gamehall': 'cq9',
          'gamename': 'SoSweet',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '9',
          'gamehall': 'cq9',
          'gamename': 'ZhongKui',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '10',
          'gamehall': 'cq9',
          'gamename': 'LuckyBat',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '11',
          'gamehall': 'cq9',
          'gamename': 'Wonderland',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '12',
          'gamehall': 'cq9',
          'gamename': 'TreasureHouse',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '13',
          'gamehall': 'cq9',
          'gamename': 'SakuraLegend',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '14',
          'gamehall': 'cq9',
          'gamename': 'RichWitch',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '15',
          'gamehall': 'cq9',
          'gamename': 'GuGuGu',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '16',
          'gamehall': 'cq9',
          'gamename': 'Super5',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '17',
          'gamehall': 'cq9',
          'gamename': 'GreatLion',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '18',
          'gamehall': 'cq9',
          'gamename': 'MahjongKing',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '19',
          'gamehall': 'cq9',
          'gamename': 'HotSpin',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '20',
          'gamehall': 'cq9',
          'gamename': '888',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '21',
          'gamehall': 'cq9',
          'gamename': 'LegendOfTheWolf',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '22',
          'gamehall': 'cq9',
          'gamename': 'MonkeyOfficeLegend',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '23',
          'gamehall': 'cq9',
          'gamename': 'YuanBao',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '24',
          'gamehall': 'cq9',
          'gamename': 'RaveJump2',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '25',
          'gamehall': 'cq9',
          'gamename': 'PokerSLOT',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '26',
          'gamehall': 'cq9',
          'gamename': '777',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '27',
          'gamehall': 'cq9',
          'gamename': 'Magic World',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '28',
          'gamehall': 'cq9',
          'gamename': 'God of Cookery',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '29',
          'gamehall': 'cq9',
          'gamename': 'WaterWorld',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '30',
          'gamehall': 'cq9',
          'gamename': 'Warrior Legend',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '31',
          'gamehall': 'cq9',
          'gamename': 'God of War',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '32',
          'gamehall': 'cq9',
          'gamename': 'Detective Dee',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '33',
          'gamehall': 'cq9',
          'gamename': 'Fire Chibi',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '34',
          'gamehall': 'cq9',
          'gamename': 'Gophers War',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '41',
          'gamehall': 'cq9',
          'gamename': 'Water War',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '42',
          'gamehall': 'cq9',
          'gamename': 'Sherlock Holmes',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '46',
          'gamehall': 'cq9',
          'gamename': 'Wolf Moon',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }, {
          'gamecode': '50',
          'gamehall': 'cq9',
          'gamename': 'Good Forture',
          'gameplat': 'WEB,MOBILE',
          'gametech': 'html5',
          'gametype': 'slot',
          'info': {
            'lang': ['en', 'tw', 'cn']
          },
          'status': true
        }
      ])
    })
  }
}

export default new GameService()
