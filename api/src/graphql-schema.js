import path from 'path'
import { mergeTypeDefs, mergeResolvers, loadFilesSync } from 'graphql-tools'

const dataSourceTypes = loadFilesSync(
  path.join(__dirname, './schemas/**/typeDefs/*.js')
)
export const typeDefs = mergeTypeDefs(dataSourceTypes)

const dataSourceResolvers = loadFilesSync(
  path.join(__dirname, './schemas/**/resolvers/*.js')
)
export const resolvers = mergeResolvers(dataSourceResolvers)
