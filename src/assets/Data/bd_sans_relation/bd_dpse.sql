DROP DATABASE IF EXISTS bd_dpse;

CREATE DATABASE IF NOT EXISTS bd_dpse;
USE bd_dpse;
# -----------------------------------------------------------------------------
#       TABLE : SUIVIDAE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS SUIVIDAE
 (
   ID_SUIVI INTEGER NOT NULL  ,
   DATE_ENVOI_PRIMATURE DATE NULL  ,
   DATE_RETOUR_PRIMATURE DATE NULL  ,
   DATE_ENVOI_PRM DATE NULL  ,
   DATE_RETOUR_PRM DATE NULL  
   , PRIMARY KEY (ID_SUIVI) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : LOCALISATION
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS LOCALISATION
 (
   ID_LOCALISATION INTEGER NOT NULL  ,
   ID_IDENTIFICATION INTEGER NOT NULL  ,
   AXE CHAR (32) NULL  ,
   PK_DEBUT CHAR (32) NULL  ,
   PK_FIN CHAR (32) NULL  ,
   REGION_CONCERNEES CHAR (32) NULL  ,
   DISTRICT CHAR (32) NULL  ,
   COMMUNE CHAR (32) NULL  ,
   POPULATIONTOUCHEE VARCHAR (128) NULL  ,
   NBR_EMPLOI BIGINT NULL  ,
   LOCALITE_DEBUT CHAR (32) NULL  ,
   LOCALITE_FIN CHAR (32) NULL  ,
   TRAFIC TEXT NULL  ,
   GEO_REFERENCEMENT_DEBUT TEXT NULL  ,
   GEO_REFERENCEMENT__FIN TEXT NULL  
   , PRIMARY KEY (ID_LOCALISATION) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE LOCALISATION
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_LOCALISATION_IDENTIFICATION
     ON LOCALISATION (ID_IDENTIFICATION ASC);

# -----------------------------------------------------------------------------
#       TABLE : IDENTIFICATION
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS IDENTIFICATION
 (
   ID_IDENTIFICATION INTEGER NOT NULL  ,
   ID_TOTAL INTEGER NOT NULL  ,
   ID_SUIVI INTEGER NULL  ,
   ID_AVANCEMENT INTEGER NOT NULL  ,
   NUMERO CHAR (32) NULL  ,
   PROGRAMMELF DECIMAL (10,2) NULL  ,
   CONVENTIONLF DECIMAL (10,2) NULL  ,
   CONVENTIONLIBLF TEXT NULL  ,
   DIRECTION TEXT NULL  ,
   ACTIVITE TEXT NULL  ,
   NATURE CHAR (32) NULL  ,
   FINANCEMENT CHAR (32) NULL  ,
   BAILLEURS CHAR (32) NULL  ,
   COUTS_ESTIMATIF DECIMAL (10,2) NULL  ,
   RESPONSABLE_PROJET CHAR (32) NULL  ,
   VALEUR_CIBLE_UNITES CHAR (32) NULL  ,
   VALEUR_CIBLE_QTE DECIMAL (10,2) NULL  ,
   INDICATEUR_PME_PTA CHAR (32) NULL  ,
   INDICATEUR_ODD DECIMAL (10,2) NULL  ,
   INDICATEUR_PERFORMANCE CHAR (32) NULL  
   , PRIMARY KEY (ID_IDENTIFICATION) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE IDENTIFICATION
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_IDENTIFICATION_TOTAL_GENERAL
     ON IDENTIFICATION (ID_TOTAL ASC);

CREATE  INDEX I_FK_IDENTIFICATION_SUIVIDAE
     ON IDENTIFICATION (ID_SUIVI ASC);

CREATE  INDEX I_FK_IDENTIFICATION_AVANCEMENT
     ON IDENTIFICATION (ID_AVANCEMENT ASC);

# -----------------------------------------------------------------------------
#       TABLE : CARACTERISTIQUE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CARACTERISTIQUE
 (
   ID_CARACTERISTIQUE INTEGER NOT NULL  ,
   ID_IDENTIFICATION INTEGER NOT NULL  ,
   REF_MARCHE_CONVE CHAR (32) NULL  ,
   DESIGNATIONS TEXT NULL  ,
   COUT DECIMAL (11,2) NULL  ,
   DATE_OS DATE NULL  ,
   DATE_PPM DATE NULL  ,
   DATE_TEF DATE NULL  ,
   MONTANT_ENGAGÉ DECIMAL (10,2) NULL  ,
   DÉLAI_D_EXÉCUTION__JOURS_ DECIMAL (10,2) NULL  ,
   TITULAIRE CHAR (32) NULL  ,
   TEMPOREL DECIMAL (10,2) NULL  ,
   FINANCIÈRE DECIMAL (10,2) NULL  ,
   DATE_LANCEMENT_AO DATE NULL  ,
   DATE_REMISE_AO DATE NULL  ,
   UNITÉS CHAR (32) NULL  
   , PRIMARY KEY (ID_CARACTERISTIQUE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE CARACTERISTIQUE
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_CARACTERISTIQUE_IDENTIFICATION
     ON CARACTERISTIQUE (ID_IDENTIFICATION ASC);

# -----------------------------------------------------------------------------
#       TABLE : AVANCEMENT
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS AVANCEMENT
 (
   ID_AVANCEMENT INTEGER NOT NULL  ,
   PHYSIQUE DECIMAL (10,2) NULL  ,
   SITUATION CHAR (32) NULL  ,
   OBSERVATION TEXT NULL  ,
   ETAT_D_AVANCEMENT DECIMAL (10,2) NULL  
   , PRIMARY KEY (ID_AVANCEMENT) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : TOTAL_GENERAL
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS TOTAL_GENERAL
 (
   ID_TOTAL INTEGER NOT NULL  ,
   SOMME_VC_QTE DECIMAL (10,2) NULL  ,
   SOMME_PHYSIQUE DECIMAL (10,2) NULL  ,
   SOMME_AV_ANNUEL DECIMAL (10,2) NULL  ,
   SOMME_S1 DECIMAL (10,2) NULL  ,
   SOMME_S DECIMAL (10,2) NULL  ,
   SOMME_EVOLUTION_S1_S DECIMAL (10,2) NULL  ,
   SOMME_GENERAL_AV_ANNUEL DECIMAL (10,2) NULL  ,
   SOMME_QTE_REALISER DECIMAL (10,2) NULL  
   , PRIMARY KEY (ID_TOTAL) 
 ) 
 comment = "";


# -----------------------------------------------------------------------------
#       CREATION DES REFERENCES DE TABLE
# -----------------------------------------------------------------------------


ALTER TABLE LOCALISATION 
  ADD FOREIGN KEY FK_LOCALISATION_IDENTIFICATION (ID_IDENTIFICATION)
      REFERENCES IDENTIFICATION (ID_IDENTIFICATION) ;


ALTER TABLE IDENTIFICATION 
  ADD FOREIGN KEY FK_IDENTIFICATION_TOTAL_GENERAL (ID_TOTAL)
      REFERENCES TOTAL_GENERAL (ID_TOTAL) ;


ALTER TABLE IDENTIFICATION 
  ADD FOREIGN KEY FK_IDENTIFICATION_SUIVIDAE (ID_SUIVI)
      REFERENCES SUIVIDAE (ID_SUIVI) ;


ALTER TABLE IDENTIFICATION 
  ADD FOREIGN KEY FK_IDENTIFICATION_AVANCEMENT (ID_AVANCEMENT)
      REFERENCES AVANCEMENT (ID_AVANCEMENT) ;


ALTER TABLE CARACTERISTIQUE 
  ADD FOREIGN KEY FK_CARACTERISTIQUE_IDENTIFICATION (ID_IDENTIFICATION)
      REFERENCES IDENTIFICATION (ID_IDENTIFICATION) ;

