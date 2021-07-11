import { Observable } from 'rxjs';
import { generate } from 'shortid';
import { SocialNetwork } from '../../SocialNetworks';

export class Consultar {

  private socialNetwork: SocialNetwork;

  constructor() {
    this.socialNetwork = {
      id: generate(),
      name: 'Youtube',
      urlPerfil: process.env.URL_PERFIL_YOUTUBE || ''
    }
  }

  public youtube():Observable<SocialNetwork> {
    return new Observable(subscriber => {
      subscriber.next(this.socialNetwork);
      subscriber.complete();
    });
  }

}