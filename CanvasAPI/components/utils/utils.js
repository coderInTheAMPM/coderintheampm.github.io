export function randomColorFromPalette(colors){
    let index = randomNumberInRange(0, colors.length - 1);
    let color = colors[index];
    return color;
}

export function randomNumberInRange(begin, end){
    return Math.floor(randomFloatInRange(begin, end));
}

export function randomFloatInRange(begin, end){
    return Math.random() * (end - begin) + begin;
}

// "rgb(r, g, b)" -> [r, g, b]
export function getRGB(color)
{
    return color.substring(color.indexOf('(') + 1, color.lastIndexOf(')'))
                .split(/,\s*/)
                .map(Number);
}
