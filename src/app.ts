import { Consultar } from './services/Consultar'
import { config } from 'dotenv'

config();

const twitter = new Consultar().twitter()

twitter.subscribe(socialNetwork => {
  console.log(socialNetwork.urlPerfil);
});