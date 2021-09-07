const { queryService } = require('./../../../dataService/query')
const {
  query_1,
  query_2,
  query_3,
  query_4,
  query_5,
  query_6,
  query_7,
  query_8,
  query_9,
  query_10,
  query_11,
  query_12,
  query_13,
  query_14,
  query_15,
  query_16,
  query_17,
  query_18,
  query_19,
  query_20,
  query_21,
  query_22,
  query_23,
  query_24,
  query_25,
  query_26,
  query_27,
  query_28,
  query_29,
  query_30,
  query_31,
  query_32,
  query_33,
  query_34,
  query_35,
  query_36,
  query_37,
  query_38,
  query_39,
  query_40,
  query_41,
  query_42,
  query_43,
  query_44,
  query_45,
  query_46,
  query_47,
  query_48,
  query_49,
  query_50,
  query_51,
  query_52,
  query_53,
  query_54,
  query_55,
  query_56,
  query_57,
  query_58,
  query_59,
  query_60,
  query_61,
  query_62,
  query_63,
  query_64,
  query_65,
  query_66,
  query_67,
  query_68,
  query_69,
  query_70,
  query_71,
  query_72,
} = require('../../../dataService/cypher/queryList')

export const resolvers = {
  Gene: {
    prefName(obj) {
      return obj.prefName
    },
  },
  Query: {
    SearchKeyword: async (_, params, ctx, __) => {
      const proteinQuery =
        'match (n:Protein) where n.prefName contains $keyword return n.identifier'
      const pathQuery =
        'match (n:Path) where n.prefName contains $keyword return n.prefName'
      const phenotypeQuery =
        'match (n:Phenotype) where n.Phenotype contains $keyword return n.Phenotype'
      const bioProcQuery =
        'match (n:BioProc) where n.prefName contains $keyword return n.prefName'
      const plantOntologyTermQuery =
        'match (n:PlantOntologyTerm) where n.prefName contains $keyword return n.prefName'
      const celCompQuery =
        'match (n:CelComp) where n.description contains $keyword return n.prefName'
      const traitQuery =
        'match (n:Trait) where n.description contains $keyword return n.prefName'
      const molFuncQuery =
        'match (n:MolFunc) where n.description contains $keyword return n.prefName'
      const reactionQuery =
        'match (n:Reaction) where n.ondexId contains $keyword return n.prefName'
      const geneQuery =
        'match (n:Gene) where n.prefName contains $keyword return n'
      const enzymeQuery =
        'match (n:Enzyme) where n.description contains $keyword return n.prefName'

      let publicationQuery =
        'match (n:Publication) where n.Abstract contains $keyword OR n.AbstractHeader contains $keyword return n'

      publicationQuery =
        'CALL db.index.fulltext.queryNodes("titlesAndAbstracts", "drought AND trehalose") YIELD node, score RETURN node.prefName, score'

      if (params.hasOwnProperty('keyword')) {
        if (params.keyword.toLowerCase().includes(' and ')) {
          params.keyword = params.keyword.replaceAll(/ and /gi, ' AND ')
          const keywords = params.keyword.split(' AND ')

          publicationQuery = 'match (n:Publication) where'

          for (let i = 0; i < keywords.length; i++) {
            const key = keywords[i].trim()

            if (i === 0)
              publicationQuery += ` (n.Abstract contains '${key}' OR n.AbstractHeader contains '${key}')`
            else
              publicationQuery += ` AND (n.Abstract contains '${key}' OR n.AbstractHeader contains '${key}')`
          }

          publicationQuery += ' return n'
          console.log(publicationQuery)
        } else if (params.keyword.toLowerCase().includes(' or ')) {
          params.keyword = params.keyword.replaceAll(/ or /gi, ' OR ')
          const keywords = params.keyword.split(' OR ')

          publicationQuery = 'match (n:Publication) where'

          for (let i = 0; i < keywords.length; i++) {
            const key = keywords[i].trim()

            if (i === 0)
              publicationQuery += ` n.Abstract contains '${key}' OR n.AbstractHeader contains '${key}'`
            else
              publicationQuery += ` OR n.Abstract contains '${key}' OR n.AbstractHeader contains '${key}'`
          }

          publicationQuery += ' return n'
          console.log(publicationQuery)
        }
      }

      return queryService(publicationQuery, params, ctx)
        .then((res) => {
          return res
        })
        .catch((error) => {
          console.log(error)
          return []
        })
    },
    SearchIris: async (_, params, ctx, __) => {
      const query =
        'MATCH (n:Gene) - [:part_of] -> (:Path) WHERE n.iri in $startGeneIris RETURN n LIMIT 3'
      return queryService(query, params, ctx)
        .then((res) => {
          return res
        })
        .catch((error) => {
          console.log(error)
          return []
        })
    },
  },
}
