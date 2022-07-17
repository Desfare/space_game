import { Sector } from "../Galaxy/Sector";
import { SpaceShip } from "./SpaceShip";
import shipPic from "../../Assets/spaceship.png"

export class Fortuna extends SpaceShip {
    constructor(sector: Sector){
        super(sector)
        this.shipPic = shipPic
    }

    canTravel(target: Sector) {
        if (!super.canTravel(target)) return false;
        const dx = Math.abs(this.sector.x - target.x);
        const dy = Math.abs(this.sector.y - target.y);
        
        return (dx === 0 && dy === 1) || (dx === 1 && dy === 0)
    }
    
}