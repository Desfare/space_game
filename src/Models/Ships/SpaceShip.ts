import shipPic from "../../Assets/spaceship.png"
import { Sector } from "../Galaxy/Sector"

export class SpaceShip {
    shipPic: typeof shipPic | null;
    sector: Sector


    constructor(sector: Sector) {
        this.shipPic = null
        this.sector = sector
        this.sector.spaceShip = this
    }

    canTravel(target: Sector) : boolean {
        return true
    }

    travel(target: Sector) {
       
    }
}