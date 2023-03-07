import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket implements payload {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    massKg: number;

        constructor (name: string, totalCapacityKg: number) {
            this.name = name;
            this.totalCapacityKg = totalCapacityKg;
        }

        sumMass (items: Payload[]): number {
            let sum: number = 0;
            for (let i=0; i < items.length; i++) {
                sum += items[i].massKg;
            }
            return sum;
        }

        currentMassKg (): number {
            return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        }

        canAdd(item: Payload): boolean {
            return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
        }

        addCargo(cargo: Cargo): boolean {
            if (this.canAdd(cargo)) {
                return true;
            } else {
                return false;
            }
        }
}