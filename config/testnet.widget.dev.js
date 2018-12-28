import baseConfig from './default'
import config from './testnet'
import moment from 'moment-with-locales-es6'


const newERC20 = {}
newERC20[process.argv[3]] = {
  address: process.argv[2],
  decimals: Number.parseInt(process.argv[4], 10),
  fullName: process.argv[5].split('_').join(' '),
}

export default {
  env: 'development',
  entry: 'testnet',
  local: 'online',

  base: `http://localhost:${baseConfig.http.port}/`,
  publicPath: `http://localhost:${baseConfig.http.port}${baseConfig.publicPath}`,

  time: moment(Date.now()).format('LLLL'),

  isWidget: true,
  ...config,
  erc20: newERC20,
}