import { Consultar as Twitter } from './services/Consultar'
import { config } from 'dotenv'

config();

const twitter = new Twitter().twitter()

twitter.subscribe(socialNetwork => {
  console.log(socialNetwork.urlPerfil);
});