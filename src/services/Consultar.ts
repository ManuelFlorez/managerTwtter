import { SocialNetwork } from "../SocialNetworks"
import { generate } from 'shortid'
import { Observable } from 'rxjs'

export class Consultar {
  socialNetwork: SocialNetwork;

  constructor() {
    this.socialNetwork = {
      id: generate(),
      name: 'Twitter',
      urlPerfil: process.env.URL_PERFIL_TWITTER || ''
    }
  }

  public twitter(): Observable<SocialNetwork> {
    return new Observable(subscriber => {
      subscriber.next(this.socialNetwork);
      subscriber.complete();
    });
  }

}