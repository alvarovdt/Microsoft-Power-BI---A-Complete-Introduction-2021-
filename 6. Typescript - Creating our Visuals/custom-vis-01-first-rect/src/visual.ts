
"use strict";

import "core-js/stable";
import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import { select, Selection } from 'd3';

export class Visual implements IVisual {
    private svg: Selection<SVGElement, any, any, any>;

    constructor(options: VisualConstructorOptions) {
        this.svg = select(options.element)
            .append('svg');

        this.svg.append('rect')
            .attr('width', 50)
            .attr('height', 50)
            .attr('fill', 'red');
    }

    public update(options: VisualUpdateOptions) {
        this.svg.select('rect').attr('fill', 'green');
    }
}