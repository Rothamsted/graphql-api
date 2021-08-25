import { gql } from 'apollo-server'

export const typeDefs = gql`
  scalar Point
  scalar DateTime
  scalar PointInput

  """
  Start Base Type
  """
  interface baseType {
    iri: String!
    ondexId: ID!
  }

  # Base Types
  type Accession {
    identifier: String!
    iri: String!
    isAmbiguousAccession: String
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    # Consider this relationship
    evidenceTypes: [EvidenceType]
      @relationship(type: "dataSource", direction: OUT)
    publications: [Publication] @relationship(type: "identifier", direction: IN)
    proteins: [Protein] @relationship(type: "identifier", direction: IN)
    snps: [SNP] @relationship(type: "identifier", direction: IN)
    genes: [Gene] @relationship(type: "identifier", direction: IN)
    bioProcs: [BioProc] @relationship(type: "identifier", direction: IN)
    reactions: [Reaction] @relationship(type: "identifier", direction: IN)
    comps: [Comp] @relationship(type: "identifier", direction: IN)
    protDomains: [ProtDomain] @relationship(type: "identifier", direction: IN)
    enzymes: [Enzyme] @relationship(type: "identifier", direction: IN)
    phenotypes: [Phenotype] @relationship(type: "identifier", direction: IN)
    celComps: [CelComp] @relationship(type: "identifier", direction: IN)
    traits: [Trait] @relationship(type: "identifier", direction: IN)
    ECs: [EC] @relationship(type: "identifier", direction: IN)
    paths: [Path] @relationship(type: "identifier", direction: IN)
    plantOntologyTerms: [PlantOntologyTerm]
      @relationship(type: "identifier", direction: IN)
    protcmplxs: [Protcmplx] @relationship(type: "identifier", direction: IN)
    coExpClusters: [CoExpCluster]
      @relationship(type: "identifier", direction: IN)
    transports: [Transport] @relationship(type: "identifier", direction: IN)
    coExpStudies: [CoExpStudy] @relationship(type: "identifier", direction: IN)
    SNPEffects: [SNPEffect] @relationship(type: "identifier", direction: IN)
  }

  type BioProc implements baseType {
    prefName: String
    description: String
    identifier: String
    iri: String!
    ondexId: ID!
    altName: String
    # bioProcs: [BioProc] @relationship(type: "is_a", direction: OUT)
    # bioProcs: [BioProc] @relationship(type: "part_of", direction: OUT)
    # bioProcs: [BioProc] @relationship(type: "regulates", direction: OUT)
    # bioProcs: [BioProc] @relationship(type: "pos_reg", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    molFuncs: [MolFunc] @relationship(type: "regulates", direction: OUT)
    molFuncs: [MolFunc] @relationship(type: "neg_reg", direction: OUT)
    molFuncs: [MolFunc] @relationship(type: "pos_reg", direction: OUT)
    coExpClusters: [CoExpCluster]
    genes: [Gene] @relationship(type: "participates_in", direction: IN)
    proteins: [Protein]
      @relationship(type: "participates_in", direction: IN)
      @relationship(type: "enriched_for", direction: IN)
    molFuncs: [MolFunc] @relationship(type: "part_of", direction: IN)
    genes: [Gene] @relationship(type: "participates_not", direction: IN)
    molFuncs: [MolFunc] @relationship(type: "regulates", direction: IN)
    ECs: [EC] @relationship(type: "equ", direction: IN)
  }

  type CelComp implements baseType {
    description: String!
    prefName: String!
    identifier: String!
    iri: String!
    ondexId: ID!
    altName: String
    # celComps: [CelComp] @relationship(type: "is_a", direction: OUT)
    # celComps: [CelComp] @relationship(type: "part_of", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    genes: [Gene] @relationship(type: "located_in", direction: IN)
    proteins: [Protein] @relationship(type: "located_in", direction: IN)
    genes: [Gene] @relationship(type: "not_located_in", direction: IN)
  }

  type CoExpCluster implements baseType {
    prefName: String!
    iri: String!
    ondexId: ID!
    # coExpClusters: [CoExpCluster] @relationship(type: "part_of", direction: OUT)
    bioProcs: [BioProc] @relationship(type: "enriched_for", direction: OUT)
    plantOntologyTerms: [PlantOntologyTerm]
      @relationship(type: "enriched_for", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    genes: [Gene] @relationship(type: "part_of", direction: IN)
  }

  # Little Records
  type CoExpStudy {
    prefName: String!
    iri: String!
    Method: String!
    Authors: String!
    ondexId: ID!
    Title: String
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
  }

  type Comp implements baseType {
    prefName: String!
    Mr: Float
    description: String
    identifier: String!
    iri: String!
    ondexId: ID!
    CML: String
    altName: String
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    reactions: [Reaction] @relationship(type: "pd_by", direction: OUT)
    paths: [Path] @relationship(type: "relatedConcept", direction: OUT)
    reactions: [Reaction] @relationship(type: "cs_by", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    transports: [Transport] @relationship(type: "pd_by", direction: OUT)
    transports: [Transport] @relationship(type: "cs_by", direction: OUT)
    enzymes: [Enzyme] @relationship(type: "in_by", direction: IN)
    enzymes: [Enzyme] @relationship(type: "ac_by", direction: IN)
  }

  type Concept {
    prefName: String
    Chemical: String
    Abstract: String
    ondexId: ID!
    AUTHORS: String
    MeSH: String
    identifier: String
    YEAR: Int
    AbstractHeader: String
    JOURNAL_REF: String
    iri: String!
    PUB_TYPE: String
    comment: String
    testAttribute: String
    BEGIN: Int
    TAXID: Int
    Chromosome: Int
    END: Int
    altName: String
    description: String
    AA: String
    Description: String
    Method: String
    Authors: String
    Title: String
    T3_Description: String
    Study: String
    Phenotype: String
    Pheno: String
    Position: String
    Mr: String
    CML: String
  }

  type DataSource {
    label: String
    identifier: String!
    iri: String!
    description: String
    accessions: [Accession] @relationship(type: "dataSource", direction: IN)
    proteins: [Protein] @relationship(type: "dataSource", direction: IN)
    snps: [SNP] @relationship(type: "dataSource", direction: IN)
    genes: [Gene] @relationship(type: "dataSource", direction: IN)
    publications: [Publication] @relationship(type: "dataSource", direction: IN)
    bioProcs: [BioProc] @relationship(type: "dataSource", direction: IN)
    molFuncs: [MolFunc] @relationship(type: "dataSource", direction: IN)
    protDomains: [ProtDomain] @relationship(type: "dataSource", direction: IN)
    enzymes: [Enzyme] @relationship(type: "dataSource", direction: IN)
    phenotypes: [Phenotype] @relationship(type: "dataSource", direction: IN)
    celComps: [CelComp] @relationship(type: "dataSource", direction: IN)
    reactions: [Reaction] @relationship(type: "dataSource", direction: IN)
    comps: [Comp] @relationship(type: "dataSource", direction: IN)
    ECs: [EC] @relationship(type: "dataSource", direction: IN)
    traits: [Trait] @relationship(type: "dataSource", direction: IN)
    plantOntologyTerms: [PlantOntologyTerm]
      @relationship(type: "dataSource", direction: IN)
    paths: [Path] @relationship(type: "dataSource", direction: IN)
    protcmplxs: [Protcmplx] @relationship(type: "dataSource", direction: IN)
    coExpClusters: [CoExpCluster]
      @relationship(type: "dataSource", direction: IN)
    transports: [Transport] @relationship(type: "dataSource", direction: IN)
    SNPEffects: [SNPEffect] @relationship(type: "dataSource", direction: IN)
    coExpStudies: [CoExpStudy] @relationship(type: "dataSource", direction: IN)
  }

  type EC implements baseType {
    prefName: String
    identifier: String!
    iri: String!
    ondexId: ID!
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    paths: [Path] @relationship(type: "relatedConcept", direction: OUT)
    molFuncs: [MolFunc] @relationship(type: "equ", direction: OUT)
    bioProcs: [BioProc] @relationship(type: "equ", direction: OUT)
    proteins: [Protein] @relationship(type: "cat_c", direction: IN)
    reactions: [Reaction] @relationship(type: "cat_c", direction: IN)
  }

  type Enzyme implements baseType {
    prefName: String!
    identifier: String!
    iri: String!
    ondexId: ID!
    description: String
    altName: String
    paths: [Path] @relationship(type: "relatedConcept", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    comps: [Comp] @relationship(type: "in_by", direction: OUT)
    comps: [Comp] @relationship(type: "ac_by", direction: OUT)
    proteins: [Protein] @relationship(type: "ac_by", direction: OUT)
    reactions: [Reaction] @relationship(type: "ca_by", direction: IN)
    proteins: [Protein] @relationship(type: "is_a", direction: IN)
    protcmplxs: [Protcmplx] @relationship(type: "is_a", direction: IN)
    transports: [Transport] @relationship(type: "ca_by", direction: IN)
  }

  type EvidenceType {
    label: String
    identifier: String!
    iri: String!
    description: String
    proteins: [Protein] @relationship(type: "evidence", direction: IN)
    # Consider this relationship
    accessions: [Accession] @relationship(type: "dataSource", direction: IN)
    snps: [SNP] @relationship(type: "evidence", direction: IN)
    genes: [Gene] @relationship(type: "evidence", direction: IN)
    proteins: [Protein] @relationship(type: "dataSource", direction: IN)
    publications: [Publication] @relationship(type: "evidence", direction: IN)
    snps: [SNP] @relationship(type: "dataSource", direction: IN)
    bioProcs: [BioProc] @relationship(type: "evidence", direction: IN)
    genes: [Gene] @relationship(type: "dataSource", direction: IN)
    molFuncs: [MolFunc] @relationship(type: "evidence", direction: IN)
    protDomains: [ProtDomain] @relationship(type: "evidence", direction: IN)
    protDomains: [ProtDomain] @relationship(type: "dataSource", direction: IN)
    enzymes: [Enzyme] @relationship(type: "evidence", direction: IN)
    phenotypes: [Phenotype] @relationship(type: "evidence", direction: IN)
    celComps: [CelComp] @relationship(type: "evidence", direction: IN)
    reactions: [Reaction] @relationship(type: "evidence", direction: IN)
    comps: [Comp] @relationship(type: "evidence", direction: IN)
    ECs: [EC] @relationship(type: "evidence", direction: IN)
    traits: [Trait] @relationship(type: "evidence", direction: IN)
    plantOntologyTerms: [PlantOntologyTerm]
      @relationship(type: "evidence", direction: IN)
    paths: [Path] @relationship(type: "evidence", direction: IN)
    protcmplxs: [Protcmplx] @relationship(type: "evidence", direction: IN)
    coExpClusters: [CoExpCluster] @relationship(type: "evidence", direction: IN)
    transports: [Transport] @relationship(type: "evidence", direction: IN)
    SNPEffects: [SNPEffect] @relationship(type: "evidence", direction: IN)
    coExpStudies: [CoExpStudy] @relationship(type: "evidence", direction: IN)
  }

  type Gene implements baseType {
    iri: String!
    identifier: String
    TAXID: Int
    Chromosome: String
    END: Int
    comment: String
    ondexId: ID!
    BEGIN: Int
    altName: String
    prefName: String
    # genes: [Gene] @relationship(type: "regulates", direction: OUT)
    # genes: [Gene] @relationship(type: "homoeolog", direction: OUT)
    # genes: [Gene] @relationship(type: "physical", direction: OUT)
    # genes: [Gene] @relationship(type: "genetic", direction: OUT)
    publications: [Publication] @relationship(type: "pub_in", direction: OUT)
    proteins: [Protein] @relationship(type: "enc", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    snps: [SNP] @relationship(type: "has_mutant", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    coExpClusters: [CoExpCluster] @relationship(type: "part_of", direction: OUT)
    publications: [Publication] @relationship(type: "occ_in", direction: OUT)
    snps: [SNP] @relationship(type: "has_variation", direction: OUT)
    celComps: [CelComp] @relationship(type: "located_in", direction: OUT)
    bioProcs: [BioProc] @relationship(type: "participates_in", direction: OUT)
    molFuncs: [MolFunc] @relationship(type: "has_function", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "dataSource", direction: OUT)
    paths: [Path] @relationship(type: "part_of", direction: OUT)
    phenotypes: [Phenotype]
      @relationship(type: "has_observ_pheno", direction: OUT)
    reactions: [Reaction] @relationship(type: "inv_in", direction: OUT)
    traits: [Trait] @relationship(type: "cooc_wi", direction: OUT)
    celComps: [CelComp] @relationship(type: "not_located_in", direction: OUT)
    bioProcs: [BioProc] @relationship(type: "participates_not", direction: OUT)
    molFuncs: [MolFunc] @relationship(type: "not_function", direction: OUT)
    traits: [Trait] @relationship(type: "cooc_wi", direction: IN)
  }

  type MolFunc implements baseType {
    prefName: String
    altName: String
    description: String
    identifier: String!
    iri: String!
    ondexId: ID!
    # molFuncs: [MolFunc] @relationship(type: "is_a", direction: OUT)
    # molFuncs: [MolFunc] @relationship(type: "neg_reg", direction: OUT)
    # molFuncs: [MolFunc] @relationship(type: "regulates", direction: OUT)
    # molFuncs: [MolFunc] @relationship(type: "pos_reg", direction: OUT)
    # molFuncs: [MolFunc] @relationship(type: "part_of", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    bioProcs: [BioProc] @relationship(type: "part_of", direction: OUT)
    bioProcs: [BioProc] @relationship(type: "regulates", direction: OUT)
    proteins: [Protein] @relationship(type: "has_function", direction: IN)
    genes: [Gene] @relationship(type: "has_function", direction: IN)
    ECs: [EC] @relationship(type: "equ", direction: IN)
    bioProcs: [BioProc] @relationship(type: "regulates", direction: IN)
    bioProcs: [BioProc] @relationship(type: "neg_reg", direction: IN)
    bioProcs: [BioProc] @relationship(type: "pos_reg", direction: IN)
    genes: [Gene] @relationship(type: "not_function", direction: IN)
  }

  type Path implements baseType {
    description: String
    identifier: String
    iri: String!
    ondexId: ID!
    prefName: String
    altName: String
    # paths: [Path] @relationship(type: "relatedConcept", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    genes: [Gene] @relationship(type: "part_of", direction: IN)
    enzymes: [Enzyme] @relationship(type: "relatedConcept", direction: IN)
    comps: [Comp] @relationship(type: "relatedConcept", direction: IN)
    proteins: [Protein] @relationship(type: "relatedConcept", direction: IN)
    reactions: [Reaction] @relationship(type: "part_of", direction: IN)
    reactions: [Reaction] @relationship(type: "relatedConcept", direction: IN)
    ECs: [EC] @relationship(type: "relatedConcept", direction: IN)
    protcmplxs: [Protcmplx] @relationship(type: "relatedConcept", direction: IN)
    transports: [Transport] @relationship(type: "part_of", direction: IN)
    transports: [Transport] @relationship(type: "relatedConcept", direction: IN)
  }

  type Phenotype implements baseType {
    iri: String!
    ondexId: ID!
    Phenotype: String
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    genes: [Gene] @relationship(type: "has_observ_pheno", direction: IN)
  }

  type PlantOntologyTerm implements baseType {
    ondexId: ID!
    prefName: String
    description: String
    identifier: String!
    altName: String
    iri: String!
    # plantOntologyTerms: [PlantOntologyTerm]
    #   @relationship(type: "is_a", direction: OUT)
    # plantOntologyTerms: [PlantOntologyTerm]
    #   @relationship(type: "part_of", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    coExpClusters: [CoExpCluster]
      @relationship(type: "enriched_for", direction: IN)
  }

  type ProtDomain implements baseType {
    prefName: String
    Description: String
    iri: String!
    ondexId: ID!
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "dataSource", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    proteins: [Protein] @relationship(type: "has_domain", direction: IN)
  }

  type Protcmplx implements baseType {
    TAXID: Int
    prefName: String
    description: String
    identifier: String!
    altName: String
    iri: String!
    ondexId: ID!
    # protcmplxs: [Protcmplx] @relationship(type: "is_part_of", direction: OUT)
    paths: [Path] @relationship(type: "relatedConcept", direction: OUT)
    enzymes: [Enzyme] @relationship(type: "is_a", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    reactions: [Reaction] @relationship(type: "cs_by", direction: OUT)
    reactions: [Reaction] @relationship(type: "pd_by", direction: OUT)
    proteins: [Protein] @relationship(type: "is_part_of", direction: IN)
  }

  type Protein implements baseType {
    prefName: String
    AA: String
    ondexId: ID!
    TAXID: Int
    identifier: String
    iri: String!
    comment: String
    altName: String
    description: String
    Pheno: String
    # proteins: [Protein] @relationship(type: "h_s_s", direction: OUT)
    # proteins: [Protein] @relationship(type: "ortho", direction: OUT)
    # proteins: [Protein] @relationship(type: "genetic", direction: OUT)
    # proteins: [Protein] @relationship(type: "physical", direction: OUT)
    # proteins: [Protein] @relationship(type: "para", direction: OUT)
    # proteins: [Protein] @relationship(type: "xref", direction: OUT)
    # proteins: [Protein] @relationship(type: "equivalent", direction: OUT)
    protDomains: [ProtDomain] @relationship(type: "has_domain", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    publications: [Publication] @relationship(type: "pub_in", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "dataSource", direction: OUT)
    celComps: [CelComp] @relationship(type: "located_in", direction: OUT)
    molFuncs: [MolFunc] @relationship(type: "has_function", direction: OUT)
    bioProcs: [BioProc] @relationship(type: "participates_in", direction: OUT)
    ecs: [EC] @relationship(type: "cat_c", direction: OUT)
    enzymes: [Enzyme] @relationship(type: "is_a", direction: OUT)
    paths: [Path] @relationship(type: "relatedConcept", direction: OUT)
    protcmplxs: [Protcmplx] @relationship(type: "is_part_of", direction: OUT)
    reactions: [Reaction] @relationship(type: "pd_by", direction: OUT)
    reactions: [Reaction] @relationship(type: "cs_by", direction: OUT)
    genes: [Gene] @relationship(type: "enc", direction: IN)
    enzymes: [Enzyme] @relationship(type: "ac_by", direction: IN)
  }

  type Publication implements baseType {
    prefName: String
    Chemical: String
    Abstract: String
    ondexId: ID!
    AUTHORS: String
    MeSH: String
    identifier: String
    YEAR: Int
    AbstractHeader: String
    JOURNAL_REF: String
    iri: String!
    PUB_TYPE: String
    comment: String
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    genes: [Gene] @relationship(type: "pub_in", direction: IN)
    proteins: [Protein] @relationship(type: "pub_in", direction: IN)
    genes: [Gene] @relationship(type: "occ_in", direction: IN)
    traits: [Trait] @relationship(type: "pub_in", direction: IN)
  }

  type Reaction {
    prefName: String
    identifier: String
    iri: String!
    ondexId: ID!
    altName: String
    description: String
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    enzymes: [Enzyme] @relationship(type: "ca_by", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    paths: [Path] @relationship(type: "part_of", direction: OUT)
    paths: [Path] @relationship(type: "relatedConcept", direction: OUT)
    ECs: [EC] @relationship(type: "cat_c", direction: OUT)
    comps: [Comp] @relationship(type: "pd_by", direction: IN)
    comps: [Comp] @relationship(type: "cs_by", direction: IN)
    genes: [Gene] @relationship(type: "inv_in", direction: IN)
    proteins: [Protein] @relationship(type: "pd_by", direction: IN)
    proteins: [Protein] @relationship(type: "cs_by", direction: IN)
    protcmplxs: [Protcmplx] @relationship(type: "cs_by", direction: IN)
    protcmplxs: [Protcmplx] @relationship(type: "pd_by", direction: IN)
  }

  type Resource {
    prefName: String
    Chemical: String
    Abstract: String
    ondexId: ID
    AUTHORS: String
    MeSH: String
    identifier: String
    YEAR: Int
    AbstractHeader: String
    JOURNAL_REF: String
    iri: String!
    PUB_TYPE: String
    comment: String
    testAttribute: String
    BEGIN: Int
    TAXID: Int
    Chromosome: String
    END: Int
    altName: String
    description: String
    AA: String
    Description: String
    Method: String
    Authors: String
    Title: String
    T3_Description: String
    Study: String
    Phenotype: String
    Pheno: String
    Position: String
    Mr: String
    CML: String
    label: String
    isAmbiguousAccession: String
  }

  type SNP implements baseType {
    iri: String!
    ondexId: ID!
    Position: String
    prefName: String
    END: Int
    BEGIN: Int
    TAXID: Int
    Chromosome: String
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    SNPEffects: [SNPEffect] @relationship(type: "leads_to", direction: OUT)
    traits: [Trait]
      @relationship(type: "associated_with", direction: OUT)
      @relationship(type: "dataSource", direction: OUT)
    genes: [Gene] @relationship(type: "has_mutant", direction: IN)
    genes: [Gene] @relationship(type: "has_variation", direction: IN)
    evidenceTypes: [EvidenceType]
  }

  type SNPEffect implements baseType {
    iri: String!
    ondexId: ID!
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    snps: [SNP] @relationship(type: "leads_to", direction: IN)
  }

  type Trait implements baseType {
    prefName: String
    description: String
    identifier: String
    iri: String!
    ondexId: ID!
    altName: String
    T3_Description: String
    Study: String
    # traits: [Trait] @relationship(type: "is_a", direction: OUT)
    # traits: [Trait] @relationship(type: "is_part_of", direction: OUT)
    # traits: [Trait] @relationship(type: "part_of", direction: OUT)
    genes: [Gene] @relationship(type: "cooc_wi", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    publications: [Publication] @relationship(type: "pub_in", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "dataSource", direction: OUT)
    snps: [SNP] @relationship(type: "associated_with", direction: IN)
    genes: [Gene] @relationship(type: "cooc_wi", direction: IN)
  }

  type Transport implements baseType {
    prefName: String
    identifier: String!
    iri: String!
    ondexId: ID!
    altName: String
    description: String
    enzymes: [Enzyme] @relationship(type: "ca_by", direction: OUT)
    evidenceTypes: [EvidenceType]
      @relationship(type: "evidence", direction: OUT)
    dataSources: [DataSource] @relationship(type: "dataSource", direction: OUT)
    accessions: [Accession] @relationship(type: "identifier", direction: OUT)
    paths: [Path] @relationship(type: "part_of", direction: OUT)
    paths: [Path] @relationship(type: "relatedConcept", direction: OUT)
    comps: [Comp] @relationship(type: "pd_by", direction: IN)
    comps: [Comp] @relationship(type: "cs_by", direction: IN)
  }

  """
  The Definition of Base Types End
  Start Custom Query
  """
  type RankedGene {
    ondexId: Int!
    accession: String!
    geneName: String!
    chro: Int!
    start: Int
    taxId: Int!
    score: Float!
    user: String!
    qtlEvidence: String!
  }

  type Query {
    FullSearch(keyword: String, startGeneIris: [String]): [Gene]
    SearchKeyword(keyword: String, startGeneIris: [String]): [Gene]
    SearchRelation(keyword: String, list: [String]): [Gene]
    SearchAttribute(keyword: String, list: [String]): [Gene]
    GetRankedGenes(keyword: String, list: String): [RankedGene]!
  }
`
