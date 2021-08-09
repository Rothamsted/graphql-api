import test from 'ava'
import gql from 'graphql-tag'
import { client } from '../../client'

test('Gene path: (Gene)<-[]-()-[]->(:)-[]->()', async (t) => {
  t.plan(1)

  const query = gql`
    query {
      genes(
        where: { identifier_IN: ["TRAESCS3D02G468400", "TRAESCS2B02G038700"] }
      ) {
        identifier
        prefName
        Chromosome
        BEGIN
        evidenceTypes {
          bioProcs(options: { limit: 2 }) {
            prefName
          }
          publications(options: { limit: 3 }) {
            identifier
          }
          traits(options: { limit: 2 }) {
            prefName
          }
        }
      }
    }
  `

  const expected = {
    data: {
      genes: [
        {
          identifier: 'TRAESCS3D02G468400',
          prefName: 'TT2',
          Chromosome: '3D',
          BEGIN: 570801163,
          evidenceTypes: [
            {
              bioProcs: [
                {
                  description:
                    'An intracellular protein kinase cascade containing at least a MAPK, a MAPKK and a MAP3K. The cascade can also contain an additional tiers: the upstream MAP4K. The kinases in each tier phosphorylate and activate the kinase in the downstream tier to transmit a signal within a cell.',
                  prefName: 'MAPK Cascade',
                  iri:
                    'http://knetminer.org/data/rdf/resources/bioproc_go_0000165_go_0000165_go_0000165',
                },
                {
                  description:
                    'The chemical reactions and pathways involving pyrimidine nucleobases, 1,3-diazine, organic nitrogenous bases.',
                  prefName: 'Pyrimidine Nucleobase Metabolic Process',
                  iri:
                    'http://knetminer.org/data/rdf/resources/bioproc_go_0006206_go_0006206',
                },
              ],
              publications: [
                {
                  identifier: '28325834;28325834;PMID:28325834',
                  ondexId: '752101',
                },
                {
                  identifier: '26576681',
                  ondexId: '752184',
                },
                {
                  identifier: '19342247',
                  ondexId: '753682',
                },
              ],
              traits: [
                {
                  prefName: 'bran percentage',
                  T3_Description: null,
                  description: null,
                },
                {
                  prefName: 'endosperm storage protein-1 content',
                  T3_Description: null,
                  description:
                    'Assay for the amount of 13kDa seed storage protein present in the endosperm.',
                },
              ],
            },
          ],
        },
        {
          identifier: 'TRAESCS2B02G038700',
          prefName: 'CHS',
          Chromosome: '2B',
          BEGIN: 17881640,
          evidenceTypes: [
            {
              bioProcs: [
                {
                  description:
                    'An intracellular protein kinase cascade containing at least a MAPK, a MAPKK and a MAP3K. The cascade can also contain an additional tiers: the upstream MAP4K. The kinases in each tier phosphorylate and activate the kinase in the downstream tier to transmit a signal within a cell.',
                  prefName: 'MAPK Cascade',
                  iri:
                    'http://knetminer.org/data/rdf/resources/bioproc_go_0000165_go_0000165_go_0000165',
                },
                {
                  description:
                    'The chemical reactions and pathways involving pyrimidine nucleobases, 1,3-diazine, organic nitrogenous bases.',
                  prefName: 'Pyrimidine Nucleobase Metabolic Process',
                  iri:
                    'http://knetminer.org/data/rdf/resources/bioproc_go_0006206_go_0006206',
                },
              ],
              publications: [
                {
                  identifier: '28325834;28325834;PMID:28325834',
                  ondexId: '752101',
                },
                {
                  identifier: '26576681',
                  ondexId: '752184',
                },
                {
                  identifier: '19342247',
                  ondexId: '753682',
                },
              ],
              traits: [
                {
                  prefName: 'bran percentage',
                  T3_Description: null,
                  description: null,
                },
                {
                  prefName: 'endosperm storage protein-1 content',
                  T3_Description: null,
                  description:
                    'Assay for the amount of 13kDa seed storage protein present in the endosperm.',
                },
              ],
            },
          ],
        },
      ],
    },
  }

  await client
    .query({ query })
    .then((data) => {
      t.deepEqual(data.data, expected.data)
    })
    .catch((error) => {
      t.fail(error.message)
    })
})
