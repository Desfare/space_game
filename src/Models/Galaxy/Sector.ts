import { Galaxy } from "./Galaxy";
import { SpaceShip } from "../Ships/SpaceShip";
import { Planet } from "./Planets/Planet";


export class Sector {
    readonly x: number;
    readonly y: number;
    spaceShip: SpaceShip | null;
    planet: Planet | null;
    galaxy: Galaxy;
    available: boolean;
    id: number;

    

    constructor(galaxy: Galaxy, x: number, y: number, spaceShip: SpaceShip | null, planet: Planet | null) {
        this.x = x
        this.y = y
        this.spaceShip = spaceShip
        this.galaxy = galaxy
        this.available = false // вероятно ненужно посмотрим
        this.id = Math.random()
        this.planet = planet
    }

    setWarpedShip(ship: SpaceShip) {
        this.spaceShip = ship
        this.spaceShip.sector = this
    }

    public travel(target: Sector) {
        if(this.spaceShip && this.spaceShip?.canTravel(target)){
            this.spaceShip?.travel(target) // пустое делегирование, возможно не пригодится
            target.setWarpedShip(this.spaceShip)
            this.spaceShip = null
        }
    }
}