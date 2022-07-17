import { Sector } from "../Sector";
import { Planet } from "./Planet";
import planet from "../../../Assets/PlanetAssets/planet.png"

export class Barsara extends Planet {

    constructor(sector: Sector) {
        super(sector)
        this.planetPic = planet
        this.influence = ["influenceEmpire", "influenceEmpire", "influenceEmpire"]
    }
}