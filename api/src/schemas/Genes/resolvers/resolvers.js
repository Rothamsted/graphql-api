const { queryService } = require('./../../../dataService/query')

export const resolvers = {
  Gene: {
    prefName(obj) {
      return `Customed prefName ${obj.prefName}`
    },
  },
  Query: {
    SearchKeyword: async (_, params, ctx, __) => {
      // const query =
      //   'MATCH (n:Gene) - [:part_of] -> (:Path {description: $keyword}) WHERE n.iri in $list RETURN n LIMIT 3'
      const query =
        'MATCH (n:Gene) - [:part_of] -> (:CelComp {description: $keyword}) WHERE n.iri in $list RETURN n LIMIT 3'
      return queryService(query, params, ctx)
        .then((res) => {
          return res
        })
        .catch((error) => {
          console.log(error)
          return []
        })
    },
    SearchRelation: async (_, params, ctx, __) => {
      let result = []
      const descriptionQuery =
        'MATCH (n:Gene) - [:part_of] -> (:Path) WHERE n.iri in $list RETURN n LIMIT 3'

      return queryService(descriptionQuery, params, ctx)
        .then(async (res) => {
          let ondexIDs = []
          result = [...result, ...res]

          res.forEach((el) => {
            if (ondexIDs.indexOf(el.ondexId) === -1) ondexIDs.push(el.ondexId)
          })

          const ondexQuery =
            'MATCH (n:Gene) - [r:part_of] -> (p:Path) WHERE r.ondexId IN $ondexIDs RETURN properties(r) LIMIT 2'

          return await queryService(ondexQuery, { ondexIDs }, ctx)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    SearchAttribute: async (_, params, ctx, __) => {
      let result = []
      const descriptionQuery =
        'MATCH (n:Gene) - [:part_of] -> (:Path) WHERE n.iri in $list RETURN n LIMIT 3'

      return queryService(descriptionQuery, params, ctx)
        .then(async (res) => {
          let ondexIDs = []
          result = [...result, ...res]

          res.forEach((el) => {
            if (ondexIDs.indexOf(el.ondexId) === -1) ondexIDs.push(el.ondexId)
          })

          const ondexQuery =
            'MATCH (n:Gene) - [r:part_of] -> (p:Path) WHERE r.ondexId IN $ondexIDs RETURN properties(r) LIMIT 2'

          return await queryService(ondexQuery, { ondexIDs }, ctx)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    GetRankedGenes: async (object, params, ctx, resolveInfo) => {
      const query =
        'MATCH (n:Path) WHERE n.description contains $keyword RETURN n LIMIT 3'

      return queryService(query, params, ctx)
        .then((res) => {
          return res
        })
        .catch((error) => console.log(error))
    },
  },
}
