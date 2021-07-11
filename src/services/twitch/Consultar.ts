import { Observable } from 'rxjs';
import { generate } from 'shortid';
import { SocialNetwork } from '../../SocialNetworks';

export class Consultar {

  private socialNetwork: SocialNetwork;

  constructor() {
    this.socialNetwork = {
      id: generate(),
      name: 'Twitch',
      urlPerfil: process.env.URL_PERFIL_TWITCH || ''
    }
  }

  public twitch():Observable<SocialNetwork> {
    return new Observable(subscriber => {
      subscriber.next(this.socialNetwork);
      subscriber.complete();
    });
  }

}