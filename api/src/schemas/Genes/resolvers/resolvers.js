const { queryService } = require('../../../dataService/query')

export const resolvers = {
  Gene: {
    prefName(obj) {
      return `Customed prefName ${obj.prefName}`
    },
  },
  Query: {
    SearchKeyword: async (object, params, ctx, resolveInfo) => {
      const query =
        'MATCH (n:Gene) - [:part_of] -> (:Path {description: $keyword}) WHERE n.iri in $list RETURN n LIMIT 3'

      return queryService(query, params, ctx)
        .then((res) => {
          console.log(res)
          return res
        })
        .catch((error) => {
          console.log(error)
          return []
        })
    },
    GetRankedGenes: async (object, params, ctx, resolveInfo) => {
      const query =
        'MATCH (n:Path) WHERE n.description contains $keyword RETURN n LIMIT 3'

      return queryService(query, params, ctx)
        .then((res) => {
          console.log(res)
          return res
        })
        .catch((error) => console.log(error))
    },
  },
}
