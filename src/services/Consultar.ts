import { SocialNetwork } from "../SocialNetworks"
import { generate } from 'shortid'
import { Observable } from 'rxjs'

export class Consultar {
  socialNetwork: SocialNetwork;

  constructor() {
    this.socialNetwork = {
      id: generate(),
      name: 'Twitter',
      urlPerfil: ''
    }
  }

  public twitter(): Observable<SocialNetwork> {
    return new Observable(subscriber => {
      subscriber.next(this.socialNetwork);
      subscriber.complete();
    });
  }
}