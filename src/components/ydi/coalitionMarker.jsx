import React from "react";

export const CoalitionMarker = ({ x, y, colorFirst, colorSecond, isMobile = false }) => {
    const circleSize = isMobile ? 5 : 6;
    const height = circleSize;
    const width = circleSize * 2;

    if (isMobile) {
        y -= 11;
    }

    return (
        <g
            transform={`translate(${x - width / 2}, ${y - height / 2})`}>
            <circle
                cx={circleSize * 2 - 2}
                cy={circleSize / 2}
                r={circleSize}
                fill={colorSecond}
            />
            <circle
                cx={circleSize / 2}
                cy={circleSize / 2}
                r={circleSize}
                fill={colorFirst}
            />
        </g>
    );
}

const COLOR_CDU = "#000000"
const COLOR_SPD = "#E3000F"
const COLOR_FDP = "#ffed00"
const COLOR_GRUENE = "#46962b"

export const coalitions = {
    "2002": {
        colorFirst: COLOR_SPD,
        colorSecond: COLOR_GRUENE,
    },
    "2005": {
        colorFirst: COLOR_CDU,
        colorSecond: COLOR_SPD,
    },
    "2009": {
        colorFirst: COLOR_CDU,
        colorSecond: COLOR_FDP,
    },
    "2013": {
        colorFirst: COLOR_CDU,
        colorSecond: COLOR_SPD,
    },
    "2017": {
        colorFirst: COLOR_CDU,
        colorSecond: COLOR_SPD,
    },
}
