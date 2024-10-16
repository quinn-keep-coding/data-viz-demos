import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type BarData = {
    label: string;
    value: number;
};

const BarChart: React.FC<{ data: BarData[] }> = ({ data }) => {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        // Clear any existing SVG to prevent overlap
        const svgElement = ref.current;
        if (svgElement) {
            const svg = d3.select(svgElement);
            svg.selectAll('*').remove();
        }

        if (!data || !data.length || !ref.current) return;

        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const width = 460 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svg = d3.select(ref.current).append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scaleBand()
            .range([0, width])
            .domain(data.map(d => d.label))
            .padding(0.1);

        const y = d3.scaleLinear()
            .range([height, 0])
            .domain([0, d3.max(data, d => d.value)||2]);

        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x));

        svg.append('g')
            .call(d3.axisLeft(y));


        svg.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.label) || 0)
            .attr('width', x.bandwidth())
            .attr('y', d => y(d.value))
            .attr('height', d => height - y(d.value))
            .attr('fill', '#69b3a2');

    }, [data]);

    return <svg ref={ref}></svg>;
};

export default BarChart;