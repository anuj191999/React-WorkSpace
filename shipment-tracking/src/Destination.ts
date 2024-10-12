import { faker } from '@faker-js/faker';
import {Entity} from "./TrackingMap"


export class Destination implements Entity{
    receiver:string;
    location:{
        lat:number;
        lon:number;
    };

    constructor(){
         this.receiver=faker.person.firstName('male');
         this.location={
            lat:faker.location.latitude(),
            lon:faker.location.longitude()
         };
    }

    popupText():string{
        return `<h3>Receiver Name: ${this.receiver}</h3>`
    }
}