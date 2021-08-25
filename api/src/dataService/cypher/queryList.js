//  gene-[..]
export const query_1 =
  'MATCH path = (gene_1:Gene) - [enc_1_7_d:enc] -> (protein_7:Protein) WHERE gene_1.iri IN $startGeneIris RETURN gene_1'
export const query_2 =
  'MATCH path = (gene_1:Gene) - [rel_1_8:homoeolog|regulates|genetic|physical] - (gene_8:Gene) WHERE gene_1.iri IN $startGeneIris RETURN path'

export const query_3 =
  'MATCH path = (gene_1:Gene) - [pub_in_9_2_d:pub_in] -> (publication_2:Publication) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_4 =
  'MATCH path = (gene_1:Gene) - [occ_in_1_2_d:occ_in] -> (publication_2:Publication) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_5 =
  'MATCH path = (gene_1:Gene) - [cooc_wi_9_21:cooc_wi] - (trait_21:Trait) WHERE gene_1.iri IN $startGeneIris RETURN path'

export const query_6 =
  'MATCH path = (gene_1:Gene) - [has_function_9_3_d:has_function] -> (molFunc_3:MolFunc) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_7 =
  'MATCH path = (gene_1:Gene) - [located_in_9_5_d:located_in] -> (celComp_5:CelComp) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_8 =
  'MATCH path = (gene_1:Gene) - [participates_in_9_4_d:participates_in] -> (bioProc_4:BioProc) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_9 =
  'MATCH path = (gene_1:Gene) - [has_observ_pheno_9_13_d:has_observ_pheno] -> (phenotype_13:Phenotype) WHERE gene_1.iri IN $startGeneIris RETURN path'

export const query_10 =
  'MATCH path = (gene_1:Gene) - [part_of_1_19_d:part_of] -> (path_19:Path) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_11 =
  'MATCH path = (gene_1:Gene) - [inv_in_1_188_d:inv_in] -> (reaction_188:Reaction) WHERE gene_1.iri IN $startGeneIris RETURN path'

export const query_12 =
  'MATCH path = (gene_1:Gene) - [rel_1_20_d:has_mutant|has_variation] -> (sNP_20:SNP) - [associated_with_20_211_d:associated_with] -> (trait_211:Trait) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_13 =
  'MATCH path = (gene_1:Gene) - [rel_1_20_d:has_mutant|has_variation] -> (sNP_20:SNP) - [associated_with_20_211_d:associated_with] -> (trait_211:Trait) - [is_part_of_211_21:is_part_of] -> (trait_21:Trait) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_14 =
  'MATCH path = (gene_1:Gene) - [rel_1_20_d:has_mutant|has_variation] -> (sNP_20:SNP) - [associated_with_20_211_d:associated_with] -> (trait_211:Trait) - [pub_in_211_2_d:pub_in] -> (publication_2:Publication) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_15 =
  'MATCH path = (gene_1:Gene) - [rel_1_20_d:has_mutant|has_variation] -> (sNP_20:SNP) - [leads_to_20_26_d:leads_to] -> (sNPEffect_26:SNPEffect) WHERE gene_1.iri IN $startGeneIris RETURN path'

export const query_16 =
  'MATCH path = (gene_1:Gene) - [part_of_1_23_d:part_of] -> (coExpCluster_23:CoExpCluster) - [part_of_23_25_d:part_of] -> (coExpStudy_25:CoExpStudy) WHERE gene_1.iri IN $startGeneIris RETURN path'
// add pvalue filter to reduce hits in gene-cluster-GO/PO
export const query_17 =
  'MATCH path = (gene_1:Gene) - [part_of_1_23_d:part_of] -> (coExpCluster_23:CoExpCluster) - [rel:enriched_for] -> (bioProc_4:BioProc) WHERE toFloat(rel.p_adjust)<1E-10 AND gene_1.iri IN $startGeneIris RETURN path'
export const query_18 =
  'MATCH path = (gene_1:Gene) - [part_of_1_23_d:part_of] -> (coExpCluster_23:CoExpCluster) - [rel:enriched_for] -> (plantOntologyTerm_24:PlantOntologyTerm) WHERE toFloat(rel.over_represented_padj)<1E-3 AND gene_1.iri IN $startGeneIris RETURN path'
export const query_19 =
  'MATCH path = (gene_1:Gene) - [de_9_22_d:differentially_expressed] -> (dGES_22:DGES) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_20 =
  'MATCH path = (gene_1:Gene) - [de_9_22_d:differentially_expressed] -> (dGES_22:DGES) - [enriched_for_23_4_d:enriched_for] -> (bioProc_4:BioProc) WHERE gene_1.iri IN $startGeneIris RETURN path'

// gene-gene-[..]
export const query_21 =
  'MATCH path = (gene_1:Gene) - [rel_1_9:homoeolog|regulates|genetic|physical] - (gene_9:Gene) - [pub_in_9_2_d:pub_in] -> (publication_2:Publication) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_22 =
  'MATCH path = (gene_1:Gene) - [rel_1_9:homoeolog|regulates|genetic|physical] - (gene_9:Gene) - [occ_in_1_2_d:occ_in] -> (publication_2:Publication) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_23 =
  'MATCH path = (gene_1:Gene) - [rel_1_9:homoeolog|regulates|genetic|physical] - (gene_9:Gene) - [cooc_wi_9_21:cooc_wi] - (trait_21:Trait) WHERE gene_1.iri IN $startGeneIris RETURN path'

export const query_24 =
  'MATCH path = (gene_1:Gene) - [rel_1_9:homoeolog|regulates|genetic|physical] - (gene_9:Gene) - [has_function_9_3_d:has_function] -> (molFunc_3:MolFunc) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_25 =
  'MATCH path = (gene_1:Gene) - [rel_1_9:homoeolog|regulates|genetic|physical] - (gene_9:Gene) - [located_in_9_5_d:located_in] -> (celComp_5:CelComp) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_26 =
  'MATCH path = (gene_1:Gene) - [rel_1_9:homoeolog|regulates|genetic|physical] - (gene_9:Gene) - [participates_in_9_4_d:participates_in] -> (bioProc_4:BioProc) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_27 =
  'MATCH path = (gene_1:Gene) - [rel_1_9:homoeolog|regulates|genetic|physical] - (gene_9:Gene) - [has_observ_pheno_9_13_d:has_observ_pheno] -> (phenotype_13:Phenotype) WHERE gene_1.iri IN $startGeneIris RETURN path'

export const query_28 =
  'MATCH path = (gene_1:Gene) - [rel_1_9:homoeolog|regulates|genetic|physical] - (gene_9:Gene) - [part_of_1_19_d:part_of] -> (path_19:Path) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_29 =
  'MATCH path = (gene_1:Gene) - [rel_1_9:homoeolog|regulates|genetic|physical] - (gene_9:Gene) - [inv_in_1_188_d:inv_in] -> (reaction_188:Reaction) WHERE gene_1.iri IN $startGeneIris RETURN path'

export const query_30 =
  'MATCH path = (gene_1:Gene) - [rel_1_9:homoeolog|regulates|genetic|physical] - (gene_9:Gene) - [rel_1_20_d:has_mutant|has_variation] -> (sNP_20:SNP) - [associated_with_20_211_d:associated_with] -> (trait_211:Trait) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_31 =
  'MATCH path = (gene_1:Gene) - [rel_1_9:homoeolog|regulates|genetic|physical] - (gene_9:Gene) - [rel_1_20_d:has_mutant|has_variation] -> (sNP_20:SNP) - [associated_with_20_211_d:associated_with] -> (trait_211:Trait) - [is_part_of_211_21:is_part_of] -> (trait_21:Trait) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_32 =
  'MATCH path = (gene_1:Gene) - [rel_1_9:homoeolog|regulates|genetic|physical] - (gene_9:Gene) - [rel_1_20_d:has_mutant|has_variation] -> (sNP_20:SNP) - [associated_with_20_211_d:associated_with] -> (trait_211:Trait) - [pub_in_211_2_d:pub_in] -> (publication_2:Publication) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_33 =
  'MATCH path = (gene_1:Gene) - [rel_1_9:homoeolog|regulates|genetic|physical] - (gene_9:Gene) - [rel_1_20_d:has_mutant|has_variation] -> (sNP_20:SNP) - [leads_to_20_26_d:leads_to] -> (sNPEffect_26:SNPEffect) WHERE gene_1.iri IN $startGeneIris RETURN path'

// PROTEIN ANNOTATION & HOMOLOGY
//  gene-protein-(protein)-annotation
export const query_34 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_7:Protein) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_35 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [pub_in_10_2_d:pub_in] -> (publication_2:Publication) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_36 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [has_function_10_3_d:has_function] -> (molFunc_3:MolFunc) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_37 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [participates_in_10_4_d:participates_in] -> (bioProc_4:BioProc) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_38 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [located_in_10_5_d:located_in] -> (celComp_5:CelComp) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_39 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [cooc_wi_10_21:cooc_wi] - (trait_21:Trait) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_40 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [rel_xref:xref] - (protein_11:Protein) WHERE gene_1.iri IN $startGeneIris RETURN path'

// gene-protein-(protein)-enzyme-pathway
export const query_41 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [is_a_10_177_d:is_a] -> (enzyme_177:Enzyme) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_42 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [is_a_10_17_d:is_a] -> (enzyme_17:Enzyme) - [ca_by_17_188_d:ca_by] -> (reaction_188:Reaction) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_43 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [is_a_10_17_d:is_a] -> (enzyme_17:Enzyme) - [ca_by_17_18_d:ca_by] -> (reaction_18:Reaction) - [part_of_18_19_d:part_of] -> (path_19:Path) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_44 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [cat_c_10_12_d:cat_c] -> (eC_12:EC) - [equ_12_3:equ] - (molFunc_3:MolFunc) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_45 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [cat_c_10_15_d:cat_c] -> (eC_15:EC) WHERE gene_1.iri IN $startGeneIris RETURN path'

// gene-protein-(protein)-domains
export const query_46 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [has_domain_10_14_d:has_domain] -> (protDomain_14:ProtDomain) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_47 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [has_domain_10_11_d:has_domain] -> (protDomain_11:ProtDomain) - [participates_in_11_4_d:participates_in] -> (bioProc_4:BioProc) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_48 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [has_domain_10_11_d:has_domain] -> (protDomain_11:ProtDomain) - [located_in_11_5_d:located_in] -> (celComp_5:CelComp) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_49 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:h_s_s|ortho|xref*0..1] - (protein_10b:Protein) - [has_domain_10_11_d:has_domain] -> (protDomain_11:ProtDomain) - [has_function_11_3_d:has_function] -> (molFunc_3:MolFunc) WHERE gene_1.iri IN $startGeneIris RETURN path'

// gene-protein-protein-gene-[..]
export const query_50 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_8_d:enc] - (gene_8:Gene) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_51 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [has_variation_9_20_d:has_variation] -> (sNP_20:SNP) - [associated_with_20_21_d:associated_with] -> (trait_21:Trait) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_52 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [has_variation_9_20_d:has_variation] -> (sNP_20:SNP) - [associated_with_20_211_d:associated_with] -> (trait_211:Trait) - [is_part_of_211_21:is_part_of] - (trait_21:Trait) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_53 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [has_variation_9_20_d:has_variation] -> (sNP_20:SNP) - [associated_with_20_211_d:associated_with] -> (trait_211:Trait) - [pub_in_211_2_d:pub_in] -> (publication_2:Publication) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_54 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [has_variation_9_20_d:has_variation] -> (sNP_20:SNP) - [leads_to_20_26_d:leads_to] -> (sNPEffect_26:SNPEffect) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_55 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [has_observ_pheno_9_13_d:has_observ_pheno] -> (phenotype_13:Phenotype) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_56 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [participates_in_9_4_d:participates_in] -> (bioProc_4:BioProc) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_57 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [located_in_9_5_d:located_in] -> (celComp_5:CelComp) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_58 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [pub_in_9_2_d:pub_in] -> (publication_2:Publication) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_59 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [has_function_9_3_d:has_function] -> (molFunc_3:MolFunc) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_60 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [cooc_wi_9_21:cooc_wi] - (trait_21:Trait) WHERE gene_1.iri IN $startGeneIris RETURN path'

// gene-protein-protein-gene-gene-[..]
export const query_61 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_8_d:enc] - (gene_8:Gene) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_62 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [rel_9_9_2:genetic|physical] - (gene_9b:Gene) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_63 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [rel_9_9_2:genetic|physical] - (gene_9b:Gene) - [has_variation_9_20_d:has_variation] -> (sNP_20:SNP) - [associated_with_20_21_d:associated_with] -> (trait_21:Trait) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_64 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [rel_9_9_2:genetic|physical] - (gene_9b:Gene) - [has_variation_9_20_d:has_variation] -> (sNP_20:SNP) - [associated_with_20_211_d:associated_with] -> (trait_211:Trait) - [is_part_of_211_21:is_part_of] - (trait_21:Trait) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_65 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [rel_9_9_2:genetic|physical] - (gene_9b:Gene) - [has_variation_9_20_d:has_variation] -> (sNP_20:SNP) - [associated_with_20_211_d:associated_with] -> (trait_211:Trait) - [pub_in_211_2_d:pub_in] -> (publication_2:Publication) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_66 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [rel_9_9_2:genetic|physical] - (gene_9b:Gene) - [has_variation_9_20_d:has_variation] -> (sNP_20:SNP) - [leads_to_20_26_d:leads_to] -> (sNPEffect_26:SNPEffect) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_67 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [rel_9_9_2:genetic|physical] - (gene_9b:Gene) - [has_observ_pheno_9_13_d:has_observ_pheno] -> (phenotype_13:Phenotype) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_68 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [rel_9_9_2:genetic|physical] - (gene_9b:Gene) - [participates_in_9_4_d:participates_in] -> (bioProc_4:BioProc) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_69 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [rel_9_9_2:genetic|physical] - (gene_9b:Gene) - [located_in_9_5_d:located_in] -> (celComp_5:CelComp) WHERE gene_1.iri IN $startGeneIris RETURN path'

// caution this is a slow query
export const query_70 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [rel_9_9_2:genetic|physical] - (gene_9b:Gene) - [pub_in_9_2_d:pub_in] -> (publication_2:Publication) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_71 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [rel_9_9_2:genetic|physical] - (gene_9b:Gene) - [has_function_9_3_d:has_function] -> (molFunc_3:MolFunc) WHERE gene_1.iri IN $startGeneIris RETURN path'
export const query_72 =
  'MATCH path = (gene_1:Gene) - [enc_1_10_d:enc] -> (protein_10:Protein) - [rel_10_10:ortho] - (protein_10b:Protein) <- [enc_10_9_d:enc] - (gene_9:Gene) - [rel_9_9_2:genetic|physical] - (gene_9b:Gene) - [cooc_wi_9_21:cooc_wi] - (trait_21:Trait) WHERE gene_1.iri IN $startGeneIris RETURN path'
