import { Payload } from "./Payload";

export class Astronaut implements Payload {
mass: number;
name: string;

    constructor (massKg: number, name: string) {
        this.name = name;
        this.massKg = massKg;
        }
}