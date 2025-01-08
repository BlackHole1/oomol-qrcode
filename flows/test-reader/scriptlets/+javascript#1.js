export default async function(params, context) {
  if (params.input !== "hello") {
    throw new Error("Input must be 'hello")
  }
}
