export interface Building {
    id: number;
    name: string;
    visitors?: VisitorStatistics[];
}

export interface VisitorStatistics {
    name: number;
    value: number;
}

export class BuildingsApi {
    target: number;

    constructor(target?: number) {
        this.target = target;
    }

    protected generateVisitor(): VisitorStatistics[] {
        const data = [];
        for (let i = 1; i < 13; i++) {
            data.push({
                name: i,
                value: Math.floor(Math.random() * Math.floor(1000))
            });
        }
        return data;
    }

    public getBuildings(): Building[] {
        return [
            {id: 1, name: 'Building A'},
            {id: 2, name: 'Building B'}
        ];
    }

    public getBuildingsVisitor(): Building {
        const data = this.generateVisitor();
        if (this.target === 1) {
            return {id: 1, name: 'Building A', visitors: data};
        } else {
            return {id: 2, name: 'Building B', visitors: data};
        }
    }
}