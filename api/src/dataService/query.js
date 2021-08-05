export const queryService = async (query, params, ctx) => {
  let result
  let session = ctx.driver.session()
  await session
    .run(query, params)
    .then((res) => {
      result = res.records.map((rec) => {
        const path = rec.get('n').properties

        return { ondexId: path.ondexId }
      })
    })
    .catch((error) => {
      result = []
      console.log(error)
    })
    .then(() => session.close())
  return result
}
