import { Sector } from "../Sector";
import planetPic from "../../../Assets/PlanetAssets/planet.png"

export enum PlanetNames {
    PLANET='planet',
    BARSARA='barsara',
    GANALOR='ganalor',
    TAVIN='tavin',
    CORSICA='corsica',
    VARULAN='varulan',
    DINESIS='dinesis',
    AMOLUN='amolun',
    PERIS='peris',
    VIKTORIA='viktoria'
}

export class Planet {
    sector: Sector;
    name: PlanetNames;
    id: number;
    planetPic: typeof planetPic | null;
    influence: any[] | null


    constructor(sector: Sector) {
        this.sector = sector;
        this.sector.planet = this;
        this.name = PlanetNames.PLANET;
        this.planetPic = null;
        this.id = Math.random();
        this.influence = null
    }
}