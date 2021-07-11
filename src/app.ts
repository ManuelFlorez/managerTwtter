import { Consultar as Facebook } from './services/facebook/Consultar'
import { Consultar as Twitch } from './services/twitch/Consultar'
import { Consultar as Twitter } from './services/twitter/Consultar'
import { Consultar as Youtube } from './services/youtube/Consultar'
import { config } from 'dotenv'

config();

const twitter = new Twitter().twitter()
const twitch = new Twitch().twitch()
const facebook = new Facebook().facebook()
const youtube = new Youtube().youtube()

twitter.subscribe(subscribe => {
  console.log(subscribe.urlPerfil);
});

twitch.subscribe(subscribe => {
  console.log(subscribe.urlPerfil);
});

facebook.subscribe(subscribe => {
  console.log(subscribe.urlPerfil);
});

youtube.subscribe(subscribe => {
  console.log(subscribe.urlPerfil);
});
