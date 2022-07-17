import { Sector } from "../Sector";
import { Planet } from "./Planet";
import planet from "../../../Assets/PlanetAssets/planet.png"

export class Corsica extends Planet {
    constructor(sector: Sector) {
        super(sector)
        this.planetPic = planet
    }
}