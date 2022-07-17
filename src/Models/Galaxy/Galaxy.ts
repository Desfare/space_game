import { Amolun } from "./Planets/Amolun";
import { Barsara } from "./Planets/Barsara";
import { Corsica } from "./Planets/Corsica";
import { Dinesis } from "./Planets/Dinesis";
import { Ganalor } from "./Planets/Ganalor";
import { Peris } from "./Planets/Peris";
import { Planet } from "./Planets/Planet";
import { Tavin } from "./Planets/Tavin";
import { Valuran } from "./Planets/Valuran";
import { Viktoria } from "./Planets/Viktoria";
import { Sector } from "./Sector";
import { Fortuna } from "../Ships/Fortuna";

const PLANET_X_NUMBER = 3
const PLANET_Y_NUMBER = 3

export class Galaxy {
    sectors: Sector[][] = []

    public travelableSector(selectedSector: Sector | null) {
        for (let i = 0; i < this.sectors.length; i++) {
            const row = this.sectors[i]
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                target.available = !!selectedSector?.spaceShip?.canTravel(target)   //!! change data to boleean
            } 
        }
    }

    public getCopyGalaxy(): Galaxy {
        const newGalaxy = new Galaxy();
        newGalaxy.sectors = this.sectors;
        return newGalaxy;
    }

    public getSector(x: number, y: number) {
        return this.sectors[y][x]
    }


    public initGalaxy() {
        for (let i = 0; i < PLANET_Y_NUMBER; i++) {
            const row: Sector[] = []
            for (let j = 0; j < PLANET_X_NUMBER; j++) {    
                row.push(new Sector(this, j, i, null, null))  // sectors init
            }
            this.sectors.push(row);
        }
    }

    public addPlanets() {
        new Barsara(this.getSector(0,0))
        new Ganalor(this.getSector(1,0))
        new Tavin(this.getSector(2,0))
        new Corsica(this.getSector(0,1))
        new Valuran(this.getSector(1,1))
        new Dinesis(this.getSector(2,1))
        new Amolun(this.getSector(0,2))
        new Viktoria(this.getSector(1,2))
        new Peris(this.getSector(2,2))
    }

    public addShip() {
        this.getSector(1,1).spaceShip = new Fortuna(this.getSector(1,1))
    }
}