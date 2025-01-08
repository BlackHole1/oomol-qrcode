export default async function(params, context) {
  if (params.input !== true) {
    throw new Error("Input must be true");
  } 
}
