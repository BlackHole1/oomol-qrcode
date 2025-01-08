const raw = "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";

export default async function(params, context) {
  return {
    base64Raw: raw,
    base64DataURL: `data:image/png;base64,${raw}`,
  };
}
