export const queryService = async (query, params, ctx) => {
  let result
  let session = ctx.driver.session()

  await session
    .run(query, params)
    .then((res) => {
      result = res.records.map((rec) => {
        const path = rec.get('node').properties

        return path
      })
    })
    .catch((error) => {
      result = []
    })
    .then(() => session.close())
  return result
}
