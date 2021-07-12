export const resolvers = {
  Gene: {
    prefName(obj) {
      return `${'Pref'} ${'Name'}`
    },
  },
  Query: {
    GetRankedGenes: async (object, params, ctx, resolveInfo) => {
      const query =
        'MATCH (n:Path) WHERE n.description contains $keyword RETURN n LIMIT 3'

      var result
      var session = ctx.driver.session()
      await session
        .run(query, params)
        .then((res) => {
          result = res.records.map((rec) => {
            const path = rec.get('n').properties

            console.log(path.ondexId)
            return { ondexId: path.ondexId }
          })
        })
        .catch((error) => {
          result = []
          console.log(error)
        })
        .then(() => session.close())
      return result
    },
  },
}
