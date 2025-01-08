export default async function(params, context) {
  if (params.input !== false) {
    throw new Error("Input must be false");
  } 
}
