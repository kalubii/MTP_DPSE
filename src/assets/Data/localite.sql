-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 25 mars 2024 à 15:40
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `localite`
--

-- --------------------------------------------------------

--
-- Structure de la table `antananarivo`
--

CREATE TABLE `antananarivo` (
  `id_tana` int(11) NOT NULL,
  `Axes` varchar(50) NOT NULL,
  `Section` varchar(50) NOT NULL,
  `PK_debut` double NOT NULL,
  `Localite_debut` varchar(50) NOT NULL,
  `PK_fin` double NOT NULL,
  `Localite_fin` varchar(50) NOT NULL,
  `Longueur` double NOT NULL,
  `Longueur_traitee` double NOT NULL,
  `Nature_Surface` varchar(50) NOT NULL,
  `Observation` varchar(50) NOT NULL,
  `Region` varchar(50) NOT NULL,
  `Gestionnaire_de_l'axe` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `antananarivo`
--

INSERT INTO `antananarivo` (`id_tana`, `Axes`, `Section`, `PK_debut`, `Localite_debut`, `PK_fin`, `Localite_fin`, `Longueur`, `Longueur_traitee`, `Nature_Surface`, `Observation`, `Region`, `Gestionnaire_de_l'axe`) VALUES
(1, 'RNS 1', '1', 0, 'Gare Soarano', 2.5, 'Rond point Anosy', 2.5, 2.5, 'RB', '', 'Analamanga', 'DRTP'),
(2, 'RNS 1', '1', 2.5, 'Rond point Anosy', 6, 'Sortie pont Ampitatafika', 3.5, 3.5, 'RB', '', 'Analamanga', 'DRTP'),
(3, 'RNS 1', '1', 6, 'Sortie pont Ampitatafika', 8, 'Ampitatafika', 2, 2, 'RB', '', 'Analamanga', 'DRTP'),
(4, 'RNS 1', '2', 8, 'Ampitatafika', 16, 'Pont Andromba', 8, 8, 'RB', '', 'Analamanga', 'DRTP'),
(5, 'RNS 1', '3-4-5', 16, 'Pont Andromba', 69, 'Soamahamanina', 53, 53, 'RB', '', 'Itasy', 'DRTP'),
(6, 'RNS 1', '5', 69, 'Soamahamanina', 115.334, 'Ambatondramijay', 46.334, 46.334, 'RB', '', 'Itasy', 'DRTP'),
(7, 'RNS 1', '5', 115.334, 'Ambatondramijay', 150, 'Pont sur la Rivi?re Sakay (Ambalanirana)', 34.666, 34.666, 'RT', '', 'Itasy', 'DRTP'),
(8, 'RNS 1', '7', 150, 'Pont sur la Riviere Sakay (Ambalanirana)', 241, 'Tsiroanomandidy', 91, 91, 'RT', '', 'Bongolava', 'DRTP'),
(9, 'RNS 1bis', '1-2', 0, 'Ambatondramijay (BK 0,  RNS 1)', 24, 'Pont Sakay (Ankadinondry)', 24, 24, 'RB', '', 'Itasy', 'DRTP'),
(10, 'RNS 1bis', '3', 24, 'Pont Sakay (Ankadinondry)', 100, 'Antsampanimahazo', 76, 76, 'RB', '', 'Bongolava', 'DRTP'),
(11, 'RNS 1bis', '4', 100, 'Antsampanimahazo', 210, 'Orimbaton\'i Tavolomanana (Limite DIRTPI T/M)', 110, 110, 'RT', 'RPI MTP + FR DINFRA 2023 : A confirmer avec DINFRA', 'Bongolava', 'DRTP'),
(12, 'RNS 1A', '1', 0, 'Alakamisy (RNS 1 / PK 14)', 5, 'CUR Vontovorona', 5, 0, 'RB', 'RPI MTP 2023', 'Analamanga', 'DRTP'),
(13, 'RNP 2', '1', 0, 'Gare Soarano', 6, 'Mahazo', 6, 6, 'RB', '', 'Analamanga', 'DRTP'),
(14, 'RNP 2', '1', 6, 'Mahazo', 11, 'Borne kilom?trique N?11', 5, 5, 'RB', '', 'Analamanga', 'DRTP'),
(15, 'RNP 2', '2', 11, 'Borne kilom?trique N?11', 46.083, 'Borne kilom?trique N?46', 35.083, 0, 'RB', 'RPI MTP 2023 : PK 11+000 au 78+100\nPDDR : PK 14+00', 'Analamanga', 'DRTP'),
(16, 'RNP 2', '3', 46.083, 'Borne kilom?trique N?46', 48.086, 'Borne kilom?trique N?48', 2.003, 0, 'RB', 'RPI MTP 2023 : PK 11+000 au 78+100', 'Analamanga', 'DRTP'),
(17, 'RNP 2', '4', 48.086, 'Borne kilom?trique N?48', 72.067, 'Marozevo', 23.981, 0, 'RB', 'RPI MTP 2023 : PK 11+000 au 78+100\nCERC : 69+000-7', 'Analamanga', 'DRTP'),
(18, 'RNT 2bis', '1', 0, 'Ankorahotra', 2, 'Ankatso', 2, 2, 'RB', '', 'Analamanga', 'DRTP'),
(19, 'RNS 2A', '1', 0, 'RNS 2 / PK 16', 2.1, 'Ambohimalaza', 2.1, 2.1, 'RT', '', 'Analamanga', 'DRTP'),
(20, 'RNS 2A', '2', 2.1, 'Ambohimalaza', 21, 'Ambatomanga', 18.9, 18.9, 'RB', '', 'Analamanga', 'DRTP'),
(21, 'RNS 3', '1', 0, 'Gare Soarano', 1.5, 'Andravoahangy Ambony', 1.5, 1.5, 'RB', '', 'Analamanga', 'DRTP'),
(22, 'RNS 3', '1', 1.5, 'Andravoahangy Ambony', 10.5, 'Sabotsy Namehana', 9, 9, 'RB', '', 'Analamanga', 'DRTP'),
(23, 'RNS 3', '1', 10.5, 'Sabotsy Namehana', 12, 'Anosiavaratra', 1.5, 0, 'RB', 'DINFRA FR 2023', 'Analamanga', 'DRTP'),
(24, 'RNS 3', '2', 12, 'Anosiavaratra', 30, 'Ambohimanarivo', 18, 0, 'RB', 'DINFRA FR 2023', 'Analamanga', 'DRTP'),
(25, 'RNS 3', '3', 30, 'Ambohimanarivo', 50, 'Antokonana', 20, 0, 'RB', 'DINFRA FR 2023', 'Analamanga', 'DRTP'),
(26, 'RNS 3', '4', 50, 'Antokonana', 90.292, 'Ville Anjozorobe - BK N?90', 40.292, 0, 'RB', 'DINFRA FR 2023', 'Analamanga', 'DRTP'),
(27, 'RNP 4', '1', 0, 'Gare Soarano', 9.4, 'Imerina Afovoany', 9.4, 9.4, 'RB', '', 'Analamanga', 'DRTP'),
(28, 'RNP 4', '1', 9.4, 'Imerina Afovoany', 12, 'Borne kilom?trique N?12', 2.6, 2.6, 'RB', 'PDDR (PK 10 - 30)', 'Analamanga', 'DRTP'),
(29, 'RNP 4', '2', 12, 'Borne kilom?trique N?12', 46, 'Andranovelona', 34, 33.3, 'RB', 'CERC : 30+100-30+700 ; 33+100-33+200 ; 40+950 ; 43', 'Analamanga', 'DRTP'),
(30, 'RNP 4', '3', 46, 'Andranovelona', 78, 'PK 78', 32, 32, 'RB', 'PDDR (PK 55-155)', 'Analamanga', 'DRTP'),
(31, 'RNP 4', '4', 78, 'PK 78', 94.895, 'Buse intersection 2 routes', 16.895, 16.895, 'RB', 'PDDR (PK 55-155)', 'Analamanga', 'DRTP'),
(32, 'RNP 4', '5', 94.895, 'Buse intersection 2 routes', 110, 'Borne kilom?trique N?110', 15.105, 15.105, 'RB', 'PDDR (PK 55-155)', 'Analamanga', 'DRTP'),
(33, 'RNP 4', '6', 110, 'Borne kilom?trique N?110', 160.603, 'Borne kilom?trique N?160', 50.603, 50.603, 'RB', 'PDDR (PK 55-155)', 'Analamanga', 'DRTP'),
(34, 'RNP 4', '7', 160.603, 'Borne kilom?trique N?160', 180, 'Limite Ex-DIRTPI T/M', 19.397, 19.397, 'RB', 'CERC : 160+800', 'Analamanga', 'DRTP'),
(35, 'RNP 7', '1', 0, 'Gare Soarano', 11, 'Mandriamena', 11, 11, 'RB', '', 'Analamanga', 'DRTP'),
(36, 'RNP 7', '1', 11, 'Mandriamena', 13, 'Borne kilom?trique N?13', 2, 2, 'RB', '', 'Analamanga', 'DRTP'),
(37, 'RNP 7', '2', 13, 'Borne kilom?trique N?13', 31, 'Analamanga Parc', 18, 18, 'RB', '', 'Analamanga', 'DRTP'),
(38, 'RNP 7', '2', 31, 'Analamanga Parc', 66.081, 'Borne kilom?trique N?66', 35.081, 35.081, 'RB', 'PDDR (PK 35-55)', 'Vakinankaratra', 'DRTP'),
(39, 'RNP 7', '3', 66.081, 'Borne kilom?trique N?66', 71.906, 'Borne kilom?trique N?72', 5.825, 5.825, 'RB', '', 'Vakinankaratra', 'DRTP'),
(40, 'RNP 7', '4', 71.906, 'Borne kilom?trique N?72', 110, 'Borne kilom?trique N?110 limite SUBTP', 38.094, 38.094, 'RB', 'CERC : 86+000 ; 107+150 / PDDR (EP-Mars 2023) : PK', 'Vakinankaratra', 'DRTP'),
(41, 'RNP 7', '5', 110, 'Borne kilom?trique N?110 limite SUBTP', 120, 'Borne kilom?trique N?120', 10, 0, 'RB', '', 'Vakinankaratra', 'DRTP'),
(42, 'RNP 7', '', 120, 'Borne kilom?trique N?120', 161.363, 'Sortie pont apr?s BK 160', 41.363, 25, 'RB', 'FR DINFRA 2022 : en cours PK 145+000 au PK 164+000', 'Vakinankaratra', 'DRTP'),
(43, 'RNP 7', '6', 161.363, 'Sortie pont apr?s BK 160', 172.099, 'Borne kilom?trique N?172 sortie Antsirabe', 10.736, 2.099, 'RB', 'FR DINFRA 2022 : en cours PK 145+000 au PK 164+000', 'Vakinankaratra', 'DRTP'),
(44, 'RNP 7', '7', 172.099, 'Borne kilom?trique N?172 sortie Antsirabe', 202.03, 'Borne N?202 entr?e pont', 29.931, 29.931, 'RB', 'CERC : 186+300', 'Vakinankaratra', 'DRTP'),
(45, 'RNT 26', '', 0, 'Ilempona ( RNS 7)', 3, 'Antanifotsy', 3, 3, 'RB', '', 'Vakinankaratra', 'DRTP'),
(46, 'RNT 26', '', 3, 'Antanifotsy', 4, 'Bureau District Antanifotsy', 1, 1, 'RT', '', 'Vakinankaratra', 'DRTP'),
(47, 'RNS 34', '', 0, 'Borne kilom?trique N?0 Antsirabe', 8.04, 'Borne kilom?trique N?8 (Ambohidrano)', 8.04, 8.04, 'RB', 'RPI MTP 2022 : entre Antsirabe et Mandoto, ? confi', 'Vakinankaratra', 'DRTP'),
(48, 'RNS 34', '', 8.04, 'Borne kilom?trique N?8 (Ambohidrano)', 165.2, 'Ambatakazo - Limite Ex-DIRTPI T/U', 157.16, 157.16, 'RB', 'RPI MTP 2022 : entre Antsirabe et Mandoto, ? confi', 'Vakinankaratra', 'DRTP'),
(49, 'RNT 36', '1', 0, ' RNS 4 (PK35+600) Ampanotokana', 41, 'Pont Marotampona', 41, 41, 'RT', '', 'Analamanga', 'DRTP'),
(50, 'RNT 36', '2', 41, 'Pont Marotampona', 75, 'Firavahana (_|_ RIP 95)', 34, 34, 'RT', '', 'Bongolava', 'DRTP'),
(51, 'RNT 36', '2', 75, 'Firavahana ( RIP 95)', 128, 'Fenoarivo Centre', 53, 53, 'RT', '', 'Bongolava', 'DRTP'),
(52, 'RNS 43', '1', 0, 'Analavory ( RNS 1)', 29.483, 'Soavinandriana', 29.483, 0, 'RB', 'FR DINFRA 2023', 'Itasy', 'DRTP'),
(53, 'RNS 43', '', 29.483, 'Soavinandriana', 60, 'Andohariana', 30.517, 30.517, 'RB', '', 'Itasy', 'DRTP'),
(54, 'RNS 43', '', 60, 'Andohariana', 81.6, 'Faratsiho', 21.6, 21.6, 'RB', '', 'Vakinankaratra', 'DRTP'),
(55, 'RNS 43', '', 81.6, 'Faratsiho', 124.1, 'Ambohibary', 42.5, 0, 'RT', 'R?hab. BADEA', 'Vakinankaratra', 'DRTP'),
(56, 'RNS 43', '', 124.1, 'Ambohibary', 128.1, 'Sambaina', 4, 0, 'RB', 'R?hab. BADEA', 'Vakinankaratra', 'DRTP'),
(57, 'RNT 51', '1', 0, 'RNS 3 PK 16+500', 5.013, 'Ambohimanga Rova', 5.013, 5.013, 'RB', '', 'Analamanga', 'DRTP'),
(58, 'RNS 52', '1', 0, 'Talatamaty ( RNP 4/PK 10+500)', 5, 'Ivato (Don Bosco)', 5, 5, 'RB', '', 'Analamanga', 'DRTP'),
(59, 'RNT 56', '1', 0, ' RNS 1', 1.183, 'Point de vigie', 1.183, 1.183, 'RB', '', 'Itasy', 'DRTP'),
(60, 'RNS 58A', '1', 0, 'Ankadimbahoaka ( RNP 7)', 6.5, 'Ampasika (_|_ vers Itaosy)', 6.5, 4.9, 'RB', 'RPI MTP 2023 : Entre PK 0+000  et 3+100, longueur ', 'Analamanga', 'DRTP'),
(61, 'RNS 58A', '2', 6.5, 'Ampasika (vers Itaosy)', 14.2, 'Andranomena (_|_ RNP 4 )', 7.7, 7.7, 'RB', '', 'Analamanga', 'DRTP'),
(62, 'RNT 58B', '1', 0, 'Ankadindratombo', 6.982, 'Ambohimanambola', 6.982, 6.982, 'RB', '', 'Analamanga', 'DRTP'),
(63, 'RNT 58C', '1', 0, 'Ampasika ( RNS 58A)', 8, 'Itaosy', 8, 8, 'RB', '', 'Analamanga', 'DRTP'),
(64, 'RNS 60', '1', 0, 'Iavoloha (RNP 7) ', 15, 'Ambohimangakely (_|_ RNP 2)', 15, 15, 'RB', 'PDDR (By-Pass)', 'Analamanga', 'DRTP'),
(65, 'RNS 61', '1', 0, 'A?roport Ivato', 19, 'Ankasina (_|_RNS 66)', 19, 0, 'RB', 'R?hab. Exim Bank Chine', 'Analamanga', 'DRTP'),
(66, 'RNS 62', '1', 0, 'Ivato', 11, 'Tsarasaotra', 11, 11, 'RB', '', 'Analamanga', 'DRTP'),
(67, 'RNS 63', '1', 0, ' RNS 60 (PK 5+500)', 2.6, '_|_ RNP 7 PK 5+000 (Ankadievo)', 2.6, 0, 'RB', 'RPI MTP 2023 / PDDR (EP)', 'Analamanga', 'DRTP'),
(68, 'RNS 64', '1', 0, 'Andohatampenaka ( RNS 58A)', 1, '_|_ RNS 61', 1, 1, 'RB', '(Maki)', 'Analamanga', 'DRTP'),
(69, 'RNS 65', '1', 0, ' RNS 60', 11, 'Ankorondrano (_|_ Route des Hydrocarbures)', 11, 0, 'RB', '(Rocade Iarivo)', 'Analamanga', 'DRTP'),
(70, 'RNS 66', '1', 0, 'Ankadimbahoaka ( RNP 7)', 9, 'Ankorondrano (_|_ Route des Hydrocarbures)', 9, 9, 'RB', '(Boulevard de l\'Europe)', 'Analamanga', 'DRTP');

-- --------------------------------------------------------

--
-- Structure de la table `antsiranana`
--

CREATE TABLE `antsiranana` (
  `id_antsiranana` int(11) NOT NULL,
  `Axes` varchar(50) NOT NULL,
  `Section` varchar(50) NOT NULL,
  `PK_debut` double NOT NULL,
  `Localite_debut` varchar(50) NOT NULL,
  `PK_fin` double NOT NULL,
  `Localite_fin` varchar(50) NOT NULL,
  `Longueur` double NOT NULL,
  `Longueur_traitee` double NOT NULL,
  `Nature_surface` varchar(50) NOT NULL,
  `Observation` varchar(50) NOT NULL,
  `Region` varchar(50) NOT NULL,
  `Gestionnaire_de_l'axe` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `antsiranana`
--

INSERT INTO `antsiranana` (`id_antsiranana`, `Axes`, `Section`, `PK_debut`, `Localite_debut`, `PK_fin`, `Localite_fin`, `Longueur`, `Longueur_traitee`, `Nature_surface`, `Observation`, `Region`, `Gestionnaire_de_l'axe`) VALUES
(1, 'RNT 3B', '1', 0, 'Ambariomiambana (_|_ RNS 5A)', 97.767, 'Andapa', 97.767, 97.767, 'RB', '', 'Sava', 'DRTP'),
(2, 'RNS 5A', '1', 0, 'Ambilobe (_|_ RNP 6 Isesy)', 73, 'Ambongomirahavavy', 73, 0, 'RT', 'Rehab Exim Bank Chine', 'Diana', 'DRTP'),
(3, 'RNS 5A', '2', 73, 'Ambongomirahavavy', 161, 'Androrona (_|_ RNT 59A)', 88, 0, 'RT', 'Rehab Exim Bank Chine', 'Sava', 'DRTP'),
(4, 'RNS 5A', '3', 161, 'Androrona (_|_ RNT 59A)', 267, 'Antaimby', 106, 106, 'RB', 'PDDR : PK 161+000 - 198+500', 'Sava', 'DRTP'),
(5, 'RNS 5A', '4', 267, 'Antaimby', 285, 'Pont Bemarivo', 18, 18, 'RB', '', 'Sava', 'DRTP'),
(6, 'RNS 5A', '5', 285, 'Pont Bemarivo', 302, 'Entr?e Sambava', 17, 17, 'RB', '', 'Sava', 'DRTP'),
(7, 'RNS 5A', '6', 302, 'Entr?e Sambava', 309, 'Bifurcation A?roport Sambava', 7, 7, 'RB', '', 'Sava', 'DRTP'),
(8, 'RNS 5A', '7', 309, 'Bifurcation A?roport Sambava', 344, 'Fanambanahely', 35, 35, 'RB', 'PDDR : PK 309+000 - 346+500', 'Sava', 'DRTP'),
(9, 'RNS 5A', '8', 344, 'Fanambanahely', 387, 'Pont Vinany', 43, 43, 'RB', 'PDDR : PK 309+000 - 346+500', 'Sava', 'DRTP'),
(10, 'RNS 5A', '9', 387, 'Pont Vinany', 417.779, 'Marofinaritra', 30.779, 30.779, 'RT', '', 'Sava', 'DRTP'),
(11, 'RNP 6', '', 448.4, 'Djangoa (PK Diego 260+300)', 466.7, 'Pont Sambirano', 18.3, 18.3, 'RB', 'CERC : PK 457+000 ; 459+000', 'Diana', 'DRTP'),
(12, 'RNP 6', '', 466.7, 'Pont Sambirano', 467, 'Ambanja', 0.3, 0.3, 'RB', '', 'Diana', 'DRTP'),
(13, 'RNP 6', '', 467, 'Ambanja', 476.7, 'Ambalavelona', 9.7, 0, 'RB', 'R?hab. BEI + UE', 'Diana', 'DRTP'),
(14, 'RNP 6', '', 476.7, 'Ambalavelona', 542.7, 'Beramanja', 66, 0, 'RB', 'R?hab. BEI + UE', 'Diana', 'DRTP'),
(15, 'RNP 6', '', 542.7, 'Beramanja', 567.7, 'Sengaloka', 25, 0, 'RB', 'R?hab. BEI + UE', 'Diana', 'DRTP'),
(16, 'RNP 6', '', 567.7, 'Sengaloka', 573.7, 'Ambilobe', 6, 0, 'RB', 'R?hab. BEI + UE', 'Diana', 'DRTP'),
(17, 'RNP 6', '', 573.7, 'Ambilobe', 594.7, 'Ambilomagaodra', 21, 0, 'RB', 'R?hab. BEI + UE', 'Diana', 'DRTP'),
(18, 'RNP 6', '', 594.7, 'Ambilomagaodra', 632.7, 'Anivorano', 38, 0, 'RB', 'R?hab. BEI + UE', 'Diana', 'DRTP'),
(19, 'RNP 6', '', 632.7, 'Anivorano', 699.587, 'Arrachard', 66.887, 0, 'RB', 'R?hab. BEI + UE', 'Diana', 'DRTP'),
(20, 'RNP 6', '', 699.587, 'Arrachard', 700.8, 'Entr?e Antsiranana', 1.213, 0, 'RB', 'R?hab. BEI + UE', 'Diana', 'DRTP'),
(21, 'RNP 6', '', 700.8, 'Entr?e Antsiranana', 708.7, 'Port d\'Antsiranana', 7.9, 7.9, 'RB', '', 'Diana', 'DRTP'),
(22, 'RNS 30', '1', 0, 'Ambalavelona (_|_ RNP 6 / PK 476+700)', 20.377, 'Ankify ( Zomba)', 20.377, 0, 'RB', 'RPI MTP 2022 : PK 0+000 au PK 20+377', 'Diana', 'DRTP'),
(23, 'RNS 30A', '1', 0, 'Rond point ', 25.739, 'Entr?e Ventaclub', 25.739, 13.739, 'RB', 'RPI MTP 2022 : PK 0+000 au PK 12+000', 'Diana', 'DRTP'),
(24, 'RNS 30B', '1', 0, 'Madiro (_|_ RNS 30A)', 23.88, 'Fasc?ne (_|_ RNS 57)', 23.88, 23.88, 'RB', '', 'Diana', 'DRTP'),
(25, 'RNT 53', '1', 0, 'Antalaha', 12.076, 'Antsirabato', 12.076, 12.076, 'RB', '', 'Sava', 'DRTP'),
(26, 'RNS 57', '1', 0, 'Hell Ville (_|_ RNS 30A )', 11.322, 'Fasc?ne', 11.322, 11.322, 'RB', '', 'Diana', 'DRTP'),
(27, 'RNT 59A', '1', 0, 'Androrona (_|_ RNS 5A)', 3.7, 'Port Voh?mar', 3.7, 3.7, 'RB', '', 'Sava', 'DRTP'),
(28, 'RNT 59B', '1', 0, 'Antsiranana', 18.057, 'Ramena', 18.057, 18.057, 'RB', '', 'Diana', 'DRTP');

-- --------------------------------------------------------

--
-- Structure de la table `fianarantsoa`
--

CREATE TABLE `fianarantsoa` (
  `id_fianara` int(11) NOT NULL,
  `Axes` varchar(50) NOT NULL,
  `Section` varchar(50) NOT NULL,
  `PK_debut` double NOT NULL,
  `Localite_debut` varchar(50) NOT NULL,
  `PK_fin` double NOT NULL,
  `Localite_fin` varchar(50) NOT NULL,
  `Longueur` double NOT NULL,
  `Longueur_traitee` double NOT NULL,
  `Nature_Surface` varchar(50) NOT NULL,
  `Observation` varchar(50) NOT NULL,
  `Region` varchar(50) NOT NULL,
  `Gestionnaire_de_l'axe` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `fianarantsoa`
--

INSERT INTO `fianarantsoa` (`id_fianara`, `Axes`, `Section`, `PK_debut`, `Localite_debut`, `PK_fin`, `Localite_fin`, `Longueur`, `Longueur_traitee`, `Nature_Surface`, `Observation`, `Region`, `Gestionnaire_de_l'axe`) VALUES
(1, 'RNP 7', '8', 202.03, 'Borne kilometrique N?202 entree pont', 256, 'Entr?e Ambositra pont', 53.97, 53.97, 'RB', 'CERC : PK228+700; 233+250; 233+500; 235+400; 235+8', 'Amoron\'i Mania', 'DRTP'),
(2, 'RNP 7', '9', 256, 'Entr?e Ambositra pont', 261, 'Station sortie Ambositra', 5, 2, 'RB', 'RPI MTP 2023 : PK 258+000 au PK 311+000', 'Amoron\'i Mania', 'DRTP'),
(3, 'RNP 7', '10', 261, 'Station sortie Ambositra', 311, 'Ambodiala', 50, 0, 'RB', 'RPI MTP 2023 : PK 258+000 au PK 311+000\nCERC : PK2', 'Amoron\'i Mania', 'DRTP'),
(4, 'RNP 7', '11', 311, 'Ambodiala', 353, 'Sortie sud Ambohimahasoa', 42, 42, 'RB', 'CERC : PK329+700; 330+650; 331+800; 338+150; 339+2', 'Haute Matsiatra', 'DRTP'),
(5, 'RNP 7', '12', 353, 'Sortie sud Ambohimahasoa', 404, 'Entr?e nord Fianarantsoa', 51, 51, 'RB', 'CERC : PK361+400; 365+200; 367+100; 368+000; 369+6', 'Haute Matsiatra', 'DRTP'),
(6, 'RNP 7', '13', 404, 'Entr?e nord Fianarantsoa', 414, 'Borne N?414 sortie Fianarantsoa', 10, 10, 'RB', '', 'Haute Matsiatra', 'DRTP'),
(7, 'RNP 7', '14', 414, 'Borne N?414 sortie Fianarantsoa', 462, 'Borne kilom?trique N?462', 48, 48, 'RB', 'Pont de Soaindrana au PK 420+080, sous garantie\nCE', 'Haute Matsiatra', 'DRTP'),
(8, 'RNP 7', '15', 462, 'Borne kilom?trique N?462', 465.842, 'Panneau limitation vitesse 40 Km/h', 3.842, 3.842, 'RB', '', 'Haute Matsiatra', 'DRTP'),
(9, 'RNP 7', '16', 465.842, 'Panneau limitation vitesse 40 Km/h', 532.406, 'Borne kilom?trique N?533', 66.564, 66.564, 'RB', 'CERC : PK476+400; 471+100; 482+950; 500+800; 509+8', 'Haute Matsiatra', 'DRTP'),
(10, 'RNP 7', '17', 532.406, 'Borne kilom?trique N?533', 600, 'Borne kilom?trique N?600 entr?e Ihosy', 67.594, 67.594, 'RB', 'PDDR (EP-Mai 2023) : PK 515-540', 'Ihorombe', 'DRTP'),
(11, 'RNP 7', '18', 600, 'Borne kilom?trique N?600 entr?e Ihosy', 604, 'Entr?e pont sortie Ihosy', 4, 4, 'RB', '', 'Ihorombe', 'DRTP'),
(12, 'RNP 7', '19', 604, 'Entr?e pont sortie Ihosy', 621, 'Borne kilom?trique N?621', 17, 17, 'RB', '', 'Ihorombe', 'DRTP'),
(13, 'RNP 7', '20', 621, 'Borne kilom?trique N?621', 664, 'Borne kilom?trique N?664', 43, 43, 'RB', '', 'Ihorombe', 'DRTP'),
(14, 'RNP 7', '21', 664, 'Borne kilom?trique N?664', 690, 'Borne kilom?trique N?690 entr?e Ranohira', 26, 26, 'RB', '', 'Ihorombe', 'DRTP'),
(15, 'RNP 7', '22', 690, 'Borne kilom?trique N?690 entr?e Ranohira', 740.8, 'Limite Ex-DIRTPI F/U - Panneau limite province', 50.8, 50.8, 'RB', 'CERC : PK732+200', 'Ihorombe', 'DRTP'),
(16, 'RNS 11', '1', 0, 'Tsararivotra (_|_ RN25/PK 159+000)', 4, 'Andranomborondolo (_|_ RNT 24/PK 0)', 4, 4, 'RB', 'RPI MTP 2023 : A confirmer avec DINFRA', 'Vatovavy', 'DRTP'),
(17, 'RNS 11', '2', 4, 'Andranomborondolo (_|_ RNT 24/PK 0)', 34, 'Ambohimandroso (_|_ CIP 1005)', 30, 30, 'RT', 'RPI MTP 2023 : A confirmer avec DINFRA', 'Vatovavy', 'DRTP'),
(18, 'RNS 11', '3', 34, 'Ambohimandroso (_|_ CIP 1005 )', 68, 'Vohilava', 34, 34, 'RT', 'RPI MTP 2023 : A confirmer avec DINFRA', 'Vatovavy', 'DRTP'),
(19, 'RNS 11', '4', 68, 'Vohilava', 101, 'Nosy Varika', 33, 33, 'RT', 'RPI MTP 2023 : A confirmer avec DINFRA', 'Vatovavy', 'DRTP'),
(20, 'RNT 11', '1', 0, 'Nosy Varika (RNS 11 / PK 101)', 22, 'Ambinanivolo (Limite Ex-DIRTPI F/A)', 22, 0, 'RT', 'RPI MTP 2022 : PK 0+000 au PK 90+000', 'Vatovavy', 'DRTP'),
(21, 'RNS 12', '1', 0, 'Irondro _|_ RNS 25', 25.9, 'Pont Sandroy', 25.9, 25.9, 'RB', 'PDDR (EP-Juin 2023) : PK 0+000 - 25+000', 'Vatovavy', 'DRTP'),
(22, 'RNS 12', '', 25.9, 'Pont Sandroy', 51.5, 'Pont Faraony ', 25.6, 25.6, 'RB', 'CERC : PK 28+600; 30+000; 30+500; 31+100; 31+500; ', 'Fitovinany', 'DRTP'),
(23, 'RNS 12', '2', 51.5, 'Pont Faraony ', 71, 'Borne Kilom?trique N?71', 19.5, 4.5, 'RB', 'CERC : PK 56-77', 'Fitovinany', 'DRTP'),
(24, 'RNS 12', '', 71, 'Borne Kilom?trique N?71', 100, 'Pont au Borne kilom?trique N?100', 29, 23, 'RB', 'CERC : PK 56-77\nPDDR (EP-Juin 2023) : PK 84+000 - ', 'Fitovinany', 'DRTP'),
(25, 'RNS 12', '3', 100, 'Pont au Borne kilom?trique N?100', 103, 'Borne kilom?trique N?103 sortie Manakara', 3, 3, 'RB', 'PDDR (EP-Juin 2023) : PK 84+000 - 134+000', 'Fitovinany', 'DRTP'),
(26, 'RNS 12', '4', 103, 'Borne kilom?trique N?103 sortie Manakara', 146, 'Vohipeno', 43, 43, 'RB', 'CERC : PK 145+600\nPDDR (EP-Juin 2023) : PK 84+000 ', 'Fitovinany', 'DRTP'),
(27, 'RNS 12', '4', 146, 'Vohipeno', 156, 'Borne Kilom?trique N?156', 10, 10, 'RB', 'CERC : PK 146+100; 146+500', 'Fitovinany', 'DRTP'),
(28, 'RNS 12', '', 156, 'Borne Kilom?trique N?156', 170, 'Borne Kilom?trique N?170', 14, 14, 'RB', '', 'Fitovinany', 'DRTP'),
(29, 'RNS 12', '', 170, 'Borne Kilom?trique N?170', 185.6, 'Fin projet', 15.6, 15.6, 'RB', '', 'Fitovinany', 'DRTP'),
(30, 'RNS 12', '', 185.6, 'Fin projet', 189, 'Limite ex subdivision', 3.4, 3.4, 'RB', 'RPI MTP 2022 (Sous garantie) : PK 185+700 au PK 20', 'Fitovinany', 'DRTP'),
(31, 'RNS 12', '5', 189, 'Limite ex subdivision', 206.832, 'Sortie pont Manambato', 17.832, 17.832, 'RB', 'RPI MTP 2022 (Sous garantie) : PK 185+700 au PK 20', 'Atsimo Atsinanana', 'DRTP'),
(32, 'RNS 12', '6', 206.832, 'Sortie pont Manambato', 218, 'Farafangana', 11.168, 11.168, 'RB', '', 'Atsimo Atsinanana', 'DRTP'),
(33, 'RNS 12', '6', 218, 'Farafangana', 238.778, 'Borne kilom?trique N?254 limite SUBTP', 20.778, 20.778, 'RB', '', 'Atsimo Atsinanana', 'DRTP'),
(34, 'RNS 12', '7', 238.778, 'Borne kilom?trique N?254 limite SUBTP', 279.154, 'Panneau carrefour RNT 18', 40.376, 40.376, 'RB', 'CERC : PK 280+020', 'Atsimo Atsinanana', 'DRTP'),
(35, 'RNT 12A', '3', 139, 'Bac Befasy (Limite SRTP)', 168.8, 'Somisika', 29.8, 29.8, 'RT', '', 'Atsimo Atsinanana', 'DRTP'),
(36, 'RNT 12A', '3', 168.8, 'Somisika', 172, 'Bac Manambondro', 3.2, 0, 'RT', 'R?habilitation IDA (PACT)', 'Atsimo Atsinanana', 'DRTP'),
(37, 'RNT 12A', '4', 172, 'Bac Manambondro', 184.5, 'Mahabe', 12.5, 0, 'RT', 'R?habilitation IDA (PACT)', 'Atsimo Atsinanana', 'DRTP'),
(38, 'RNT 12A', '4', 184.5, 'Mahabe', 202.308, 'Bac Masianaka Basse', 17.808, 0, 'RT', 'R?habilitation IDA (PACT)', 'Atsimo Atsinanana', 'DRTP'),
(39, 'RNT 12A', '4', 202.308, 'Bac Masianaka Basse', 203.8, 'Masianaka', 1.492, 0, 'RT', 'R?habilitation IDA (PACT)', 'Atsimo Atsinanana', 'DRTP'),
(40, 'RNT 12A', '4', 203.8, 'Masianaka', 206.7, 'Nosy Omby', 2.9, 0, 'RT', 'R?habilitation BAD (PACFC)', 'Atsimo Atsinanana', 'DRTP'),
(41, 'RNT 12A', '4', 206.7, 'Nosy Omby', 210.6, 'Manety', 3.9, 0, 'RT', 'R?habilitation BAD (PACFC)', 'Atsimo Atsinanana', 'DRTP'),
(42, 'RNT 12A', '4', 210.6, 'Manety', 232, 'Borne kilom?trique N?232', 21.4, 0, 'RT', 'R?habilitation BAD (PACFC)', 'Atsimo Atsinanana', 'DRTP'),
(43, 'RNT 12A', '4', 232, 'Borne kilom?trique N?232', 246.38, '_|_ RNS 12 (Vangaindrano)', 14.38, 0, 'RT', 'R?habilitation BAD (PACFC)', 'Atsimo Atsinanana', 'DRTP'),
(44, 'RNS 13', '1', 0, '_|_ RNP7 (PK 613)', 57, 'Radier Iampety (Limite Ex-DIRTPI F/U)', 57, 0, 'RT', 'RPI MTP 2023 : PK 0+000 au PK 118+000', 'Ihorombe', 'DRTP'),
(45, 'RNT 14', '1', 0, 'Ifanadiana (_|_ RNS 25/PK 58+300) ', 26, 'Ambinanindranotelo', 26, 26, 'RT', 'RPI MTP 2023 : A confirmer avec DINFRA', 'Vatovavy', 'DRTP'),
(46, 'RNT 14', '1', 26, 'Ambinanindranotelo', 46, 'Tolongoina', 20, 20, 'RT', 'RPI MTP 2023 : A confirmer avec DINFRA', 'Fitovinany', 'DRTP'),
(47, 'RNT 14', '2', 46, 'Tolongoina', 92, 'Ikongo', 46, 46, 'RT', 'RPI MTP 2023 : A confirmer avec DINFRA', 'Fitovinany', 'DRTP'),
(48, 'RNT 16', '1', 0, '_|_ RNS 27 ( PK 42) ', 35, 'Ranotsara ', 35, 35, 'RT', '', 'Ihorombe', 'DRTP'),
(49, 'RNT 16', '2', 35, 'Ranotsara', 60, 'Beadabo', 25, 25, 'RT', '', 'Ihorombe', 'DRTP'),
(50, 'RNT 16', '2', 60, 'Beadabo', 83, 'Iakora', 23, 23, 'RT', '', 'Ihorombe', 'DRTP'),
(51, 'RNT 18', '1', 0, '_|_ RNS 12/PK 279+154 (Vangaindrano)', 42, 'Ranomena', 42, 0, 'RT', 'RPI MTP 2023 : PK 0+000 au PK 70+000\nFR DINFRA 202', 'Atsimo Atsinanana', 'DRTP'),
(52, 'RNT 18', '', 42, 'Ranomena', 56, 'Borne Kilom?trique N?56', 14, 0, 'RT', 'RPI MTP 2023 : PK 0+000 au PK 70+000\nFR DINFRA 202', 'Atsimo Atsinanana', 'DRTP'),
(53, 'RNT 18', '', 56, 'Borne Kilom?trique N?56', 94, 'Midongy du Sud', 38, 0, 'RT', 'RPI MTP 2023 : PK 0+000 au PK 70+000\nFR DINFRA 202', 'Atsimo Atsinanana', 'DRTP'),
(54, 'RNT 18', '', 94, 'Midongy du Sud', 136, 'Befotaka', 42, 0, 'RT', 'RPI MTP 2023 : PK 0+000 au PK 70+000\nFR DINFRA 202', 'Atsimo Atsinanana', 'DRTP'),
(55, 'RNT 24', '1', 0, 'Andranomborondolo (_|_ RNT 11/PK4+000) ', 17, 'Ambaladara', 17, 0, 'RB', 'CERC : PK 0+130; 2+700; 5+150; 6+500; 10+800', 'Vatovavy', 'DRTP'),
(56, 'RNT 24', '2', 17, 'Ambaladara', 42, 'Vohilava', 25, 0, 'RT', 'CERC : PK 17+900; 21+400; 26+100; 27+900; 28+400; ', 'Vatovavy', 'DRTP'),
(57, 'RNS 25', '1', 0, 'Ambalanivoahangy (_|_ RNP7 (PK 357+100)', 25, 'Amboditanimena', 25, 25, 'RT', '', 'Haute Matsiatra', 'DRTP'),
(58, 'RNS 25', '2', 25, 'Amboditanimena', 90, 'Limite SUBTP Ifanadiana / Mananjary', 65, 65, 'RB', '', 'Vatovavy', 'DRTP'),
(59, 'RNS 25', '3', 90, 'Limite SUBTP Ifanadiana / Mananjary', 114.9, 'Irondro (_|_ RNS 12/PK 0+000)', 24.9, 24.9, 'RB', '', 'Vatovavy', 'DRTP'),
(60, 'RNS 25', '4', 114.9, 'Irondro (_|_ RNS 12/PK 0+000)', 171, 'Entr?e Mananjary', 56.1, 56.1, 'RB', '', 'Vatovavy', 'DRTP'),
(61, 'RNS 25', '5', 171, 'Entr?e Mananjary', 175, 'Sortie Mananjary', 4, 4, 'RB', '', 'Vatovavy', 'DRTP'),
(62, 'RNS 27', '1', 0, 'Ihosy (_|_ RNP 7/PK 598+000)', 42, '_|_ Iakora (PK 42)', 42, 0, 'RT', 'FR DINFRA 2023 : PK 0+000 au PK 145+000', 'Ihorombe', 'DRTP'),
(63, 'RNS 27', '1', 42, '_|_ Iakora (PK 42)', 47, 'Radier Menarahaka', 5, 0, 'RT', 'FR DINFRA 2023 : PK 0+000 au PK 145+000', 'Ihorombe', 'DRTP'),
(64, 'RNS 27', '2', 47, 'Radier Menarahaka', 80, 'Borne Kilom?trique N?80', 33, 0, 'RT', 'FR DINFRA 2023 : PK 0+000 au PK 145+000', 'Ihorombe', 'DRTP'),
(65, 'RNS 27', '2', 80, 'Borne Kilom?trique N?80', 109, 'Ivohibe', 29, 0, 'RT', 'FR DINFRA 2023 : PK 0+000 au PK 145+000', 'Ihorombe', 'DRTP'),
(66, 'RNS 27', '3', 109, 'Ivohibe', 145, 'Maropaika', 36, 0, 'RT', 'FR DINFRA 2023 : PK 0+000 au PK 145+000', 'Ihorombe', 'DRTP'),
(67, 'RNS 27', '3', 145, 'Maropaika', 206, 'Vondrozo', 61, 0, 'RT', 'RPI MTP 2022 : PK 145+000 au PK 272+000', 'Atsimo Atsinanana', 'DRTP'),
(68, 'RNS 27', '4', 206, 'Vondrozo', 261, '_|_ CIP 1402 (vers Ambalatany)', 55, 0, 'RT', 'RPI MTP 2022 : PK 145+000 au PK 272+000', 'Atsimo Atsinanana', 'DRTP'),
(69, 'RNS 27', '4', 261, '_|_ CIP 1402 (vers Ambalatany)', 272, 'Farafangana (_|_ RNS 12/PK 205+200)', 11, 0, 'RT', 'RPI MTP 2022 : PK 145+000 au PK 272+000', 'Atsimo Atsinanana', 'DRTP'),
(70, 'RNT 35', '1', 0, '_|_ RNP 7', 64.241, 'Ambatofinandrahana', 64.241, 64.241, 'RB', '', 'Amoron\'i Mania', 'DRTP'),
(71, 'RNT 35', '2T1', 64.241, 'Ambatofinandrahana', 170, 'Amborompotsy', 105.759, 105.759, 'RT', '', 'Amoron\'i Mania', 'DRTP'),
(72, 'RNT 35', '', 170, 'Amborompotsy', 220, 'Janjina kely (Limite Ex-DIRTPI F/U)', 50, 50, 'RT', '', 'Amoron\'i Mania', 'DRTP'),
(73, 'RNS 41', '1', 0, 'Kelikampina (_|_ RNP 7/PK 253+800)', 42.3, 'Fandriana', 42.3, 42.3, 'RB', '', 'Amoron\'i Mania', 'DRTP'),
(74, 'RNT 42', '1', 0, 'Dalot apr?s panneau', 33.679, 'Isorana', 33.679, 0, 'RB', 'FR DINFRA 2023', 'Haute Matsiatra', 'DRTP'),
(75, 'RNT 42', '2', 33.679, 'Isorana', 95, 'Ikalamavony', 61.321, 0, 'RT', 'FR DINFRA 2023', 'Haute Matsiatra', 'DRTP'),
(76, 'RNS 45', '1', 0, '_|_ RNP 7/PK 382+600', 23.4, 'Vohiparara (_|_ RNS 25/PK 25+400)', 23.4, 23.4, 'RB', 'PDDR', 'Haute Matsiatra', 'DRTP'),
(77, 'RNT 46', '1', 0, 'Soamandroso (_|_ RNP 7/PK 305+200)', 19, 'Ambovombe (_|_ CIP 601)', 19, 19, 'RT', '', 'Amoron\'i Mania', 'DRTP'),
(78, 'RNT 47', '', 0, 'Ivato (_|_ RNP 7/PK 273+000)', 25.4, 'Antoetra', 25.4, 25.4, 'RT', '', 'Amoron\'i Mania', 'DRTP');

-- --------------------------------------------------------

--
-- Structure de la table `mahajanga`
--

CREATE TABLE `mahajanga` (
  `id_mahajanga` int(11) NOT NULL,
  `Axes` varchar(50) NOT NULL,
  `Section` varchar(50) NOT NULL,
  `PK_debut` double NOT NULL,
  `Localite_debut` varchar(50) NOT NULL,
  `PK_fin` double NOT NULL,
  `Localite_fin` varchar(50) NOT NULL,
  `Longueur` double NOT NULL,
  `Longueur_traitee` double NOT NULL,
  `Nature_surface` varchar(50) NOT NULL,
  `Observation` varchar(50) NOT NULL,
  `Region` varchar(50) NOT NULL,
  `Gestionnaire_de_l'axe` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `mahajanga`
--

INSERT INTO `mahajanga` (`id_mahajanga`, `Axes`, `Section`, `PK_debut`, `Localite_debut`, `PK_fin`, `Localite_fin`, `Longueur`, `Longueur_traitee`, `Nature_surface`, `Observation`, `Region`, `Gestionnaire_de_l'axe`) VALUES
(1, 'RNS 1bis', '5', 210, 'Orimbaton\'i Tavolomanana (Limite Ex-DIRTPI T/M)', 338, 'Bemahatazana (sud Morafenobe)', 128, 128, 'RT', 'RPI MTP + FR DINFRA 2023 : A confirmer avec DINFRA', 'Melaky', 'DRTP'),
(2, 'RNS 1bis', '6', 338, 'Bemahatazana (sud Morafenobe)', 415, 'PK 415', 77, 77, 'RT', 'RPI MTP + FR DINFRA 2023 : A confirmer avec DINFRA', 'Melaky', 'DRTP'),
(3, 'RNS 1bis', '6', 415, 'PK 415', 496, '_|_ RNT 8A', 81, 81, 'RT', 'RPI MTP + FR DINFRA 2023 : A confirmer avec DINFRA', 'Melaky', 'DRTP'),
(4, 'RNP 4', '8', 180, 'Limite Ex-DIRTPI T/M', 216.3, 'Entr?e pont apr?s BK N?216/ sortie Andriba', 36.3, 36.3, 'RB', '', 'Betsiboka', 'DRTP'),
(5, 'RNP 4', '9', 216.3, 'Entr?e pont apr?s BK N?216/ sortie Andriba', 235, 'Entr?e pont apr?s BK N?235', 18.7, 18.7, 'RB', '', 'Betsiboka', 'DRTP'),
(6, 'RNP 4', '10', 235, 'Entr?e pont apr?s BK N?235', 261, 'BK N?261/sortie Antsiafabositra', 26, 5, 'RB', 'PDDR : PK 240+000 - 320+000', 'Betsiboka', 'DRTP'),
(7, 'RNP 4', '11', 261, 'BK N?261/sortie Antsiafabositra', 313.6, 'Panneau Maevatanana', 52.6, 0, 'RB', 'PDDR : PK 240+000 - 320+000', 'Betsiboka', 'DRTP'),
(8, 'RNP 4', '12', 313.6, 'Panneau Maevatanana', 316, 'Borne kilom?trique N?316', 2.4, 0, 'RB', 'PDDR : PK 240+000 - 320+000', 'Betsiboka', 'DRTP'),
(9, 'RNP 4', '13', 316, 'Borne kilom?trique N?316', 369, 'Borne kilom?trique N?369', 53, 49, 'RB', 'PDDR : PK 240+000 - 320+000', 'Betsiboka', 'DRTP'),
(10, 'RNP 4', '13P', 369, 'Borne kilom?trique N?369', 403, '_|_ RNT 33A vers Tsaratan?na', 34, 34, 'RB', 'CERC : PK 378+800; 385+200', 'Betsiboka', 'DRTP'),
(11, 'RNP 4', '14', 403, '_|_ RNT 33A vers Tsaratan?na', 460, 'Pont Soafera', 57, 0, 'RB', 'RPI MTP 2023 : PK 403+000 au 460+000\nCERC : PK 423', 'Boeny', 'DRTP'),
(12, 'RNP 4', '15', 460, 'Pont Soafera', 487.2, '_|_ RNT 8B vers Marovoay', 27.2, 27.2, 'RB', 'CERC : PK 465+300', 'Boeny', 'DRTP'),
(13, 'RNP 4', '16', 487.2, '_|_ RNT 8B vers Marovoay', 562.8, 'Dalot double apr?s BK N?561', 75.6, 75.6, 'RB', 'CERC : PK 498+400; 501+706', 'Boeny', 'DRTP'),
(14, 'RNP 4', '17', 562.8, 'Dalot double apr?s BK N?561', 570.33, 'Monument au nord du BAOBAB', 7.53, 7.53, 'RB', '', 'Boeny', 'DRTP'),
(15, 'RNP 6', '', 0, '_|_ RNP 4 Ambrondromamy', 63, 'Bekoratsaka', 63, 0, 'RB', 'CERC : PK 40+100; 45+300; 46+100; 46+600; 62+400\nR', 'Boeny', 'DRTP'),
(16, 'RNP 6', '', 63, 'Bekoratsaka', 93, 'Antanandava', 30, 0, 'RB', 'CERC : PK 77+200\nRPI MTP 2023 : PK 32+000 ? 409+10', 'Sofia', 'DRTP'),
(17, 'RNP 6', '', 93, 'Antanandava', 134, 'Tsarahasina', 41, 0, 'RB', 'CERC : PK 96+200\nRPI MTP 2023 : PK 32+000 ? 409+10', 'Sofia', 'DRTP'),
(18, 'RNP 6', '', 134, 'Tsarahasina', 157, 'Port Berg?;23', 0, 0, 'RPI MTP 2023 : PK 32+000 ? 409+100\nCERC : PK 151+4', 'Sofia', 'DRTP', ''),
(19, 'RNP 6', '', 157, 'Port Berger', 234, 'Anjiamangirana', 77, 0, 'RB', 'RPI MTP 2023 : PK 32+000 ? 409+100\nCERC : PK 199+1', 'Sofia', 'DRTP'),
(20, 'RNP 6', '', 234, 'Anjiamangirana', 279, 'Entr?e Antsohihy', 45, 0, 'RB', 'RPI MTP 2023 : PK 32+000 ? 409+100\nCERC : PK 235+1', 'Sofia', 'DRTP'),
(21, 'RNP 6', '', 279, 'Entr?e Antsohihy', 295, '_|_ RNT 31 (Antanalabe)', 16, 0, 'RB', 'RPI MTP 2023 : PK 32+000 ? 409+100\nCERC : PK 291+3', 'Sofia', 'DRTP'),
(22, 'RNP 6', '', 295, '_|_ RNT 31 (Antanalabe)', 331, 'Antsohihely', 36, 0, 'RB', 'RPI MTP 2023 : PK 32+000 ? 409+100\nCERC : PK 306+0', 'Sofia', 'DRTP'),
(23, 'RNP 6', '', 331, 'Antsohihely', 448.4, 'Djangoa (PK Diego 260+300)', 117.4, 39.3, 'RB', 'RPI MTP 2023 : PK 32+000 ? 409+100\nCERC : PK 337+8', 'Sofia', 'DRTP'),
(24, 'RNT 8', '4', 180, 'Bac Bekopaka (lim Ex-DIRTPI U/M)', 275, 'Antsalova', 95, 95, 'RT', '', 'Melaky', 'DRTP'),
(25, 'RNT 8A', '1', 0, 'Maintirano', 25.4, 'Pont Demoka', 25.4, 0, 'RB', 'FR DINFRA 2023', 'Melaky', 'DRTP'),
(26, 'RNT 8A', '2', 25.4, 'Pont Demoka', 123, 'Antsalova', 97.6, 0, 'RT', 'FR DINFRA 2023', 'Melaky', 'DRTP'),
(27, 'RNT 8B', '1', 0, '_|_ RNP 4', 10.6, 'Hopital Marovoay', 10.6, 10.6, 'RB', '', 'Boeny', 'DRTP'),
(28, 'RNT 8B', '2', 10.6, 'Hopital Marovoay', 18.21, 'Ambolomoty', 7.61, 7.61, 'RT', '', 'Boeny', 'DRTP'),
(29, 'RNT 8C', '1', 0, '_|_ RNP 4', 35, 'Rond point Mahazoma', 35, 35, 'RB', '', 'Betsiboka', 'DRTP'),
(30, 'RNT 8C', '2', 35, 'Rond point Mahazoma', 120, 'Kandreho', 85, 85, 'RT', '', 'Betsiboka', 'DRTP'),
(31, 'RNT 8C', '', 120, 'Kandreho', 146, 'Limite SRTP Betsiboka/ Melaky', 26, 0, 'RT', 'D?gradations trop importantes', 'Betsiboka', 'DRTP'),
(32, 'RNT 8C', '', 146, 'Limite SRTP Betsiboka/ Melaky', 192, 'Ambatomainty', 46, 0, 'RT', 'D?gradations trop importantes', 'Melaky', 'DRTP'),
(33, 'RNT 8C', '', 192, 'Ambatomainty', 300, 'Morafenobe', 108, 108, 'RT', '', 'Melaky', 'DRTP'),
(34, 'RNT 8C', '', 300, 'Morafenobe', 318, 'Bemahatazana (_|_ RNS 1bis)', 18, 18, 'RT', '', 'Melaky', 'DRTP'),
(35, 'RNT 19', '1', 0, 'Katsepy (Bac Mahajanga)', 63, '_|_ route vers Namakia', 63, 0, 'RT', 'FR DINFRA 2023', 'Boeny', 'DRTP'),
(36, 'RNT 19', '2', 63, '_|_ vers Namakia', 80, 'Mitsinjo', 17, 0, 'RT', 'FR DINFRA 2023', 'Boeny', 'DRTP'),
(37, 'RNT 19', '3', 80, 'Mitsinjo', 151, 'Soalala', 71, 0, 'RT', 'FR DINFRA 2023', 'Boeny', 'DRTP'),
(38, 'RNT 19', '4', 151, 'Soalala', 228, 'Ambohipaky', 77, 77, 'RT', '', 'Boeny', 'DRTP'),
(39, 'RNT 19', '', 228, 'Ambohipaky', 331, 'Besalampy', 103, 103, 'RT', '', 'Melaky', 'DRTP'),
(40, 'RNT 19', '', 331, 'Besalampy', 435, 'Ranobe', 104, 104, 'RT', '', 'Melaky', 'DRTP'),
(41, 'RNT 19', '', 435, 'Ranobe', 547, 'Maintirano', 112, 112, 'RT', '', 'Melaky', 'DRTP'),
(42, 'RNT 31', '1', 0, 'Ankazobetsihay_|_ RNP 6', 38.896, 'Antsahabe entraxe buse', 38.896, 38.896, 'RB', '', 'Sofia', 'DRTP'),
(43, 'RNT 31', '2', 38.896, 'Antsahabe entraxe buse', 68.596, 'Ampandrana', 29.7, 29.7, 'RB', '', 'Sofia', 'DRTP'),
(44, 'RNT 31', '3', 68.596, 'Ampandrana', 97.5, 'Bealanana', 28.904, 28.904, 'RT', '', 'Sofia', 'DRTP'),
(45, 'RNT 31', '', 97.5, 'Bealanana', 127.5, 'Ambatoriha', 30, 30, 'RT', '', 'Sofia', 'DRTP'),
(46, 'RNT 31A', '', 0, 'Tsinjomorona (_|_ RNP 6)', 71, 'Analalava', 71, 71, 'RT', '', 'Sofia', 'DRTP'),
(47, 'RNS 32', '1', 0, 'Andilambe (_|_ RNP 6) ', 35.5, 'Limite District Antsohihy', 35.5, 35.5, 'RB', '', 'Sofia', 'DRTP'),
(48, 'RNS 32', '2', 35.5, 'Limite District Antsohihy', 76, 'Befandriana Nord', 40.5, 40.5, 'RB', '', 'Sofia', 'DRTP'),
(49, 'RNS 32', '3', 76, 'Befandriana Nord', 110, 'Pont Sofia', 34, 34, 'RB', '', 'Sofia', 'DRTP'),
(50, 'RNS 32', '6', 110, 'Pont Sofia', 148, 'Borne kilom?trique N?148', 38, 38, 'RB', '', 'Sofia', 'DRTP'),
(51, 'RNS 32', '7', 148, 'Borne kilom?trique N?148', 186.029, 'Mandritsara', 38.029, 38.029, 'RB', '', 'Sofia', 'DRTP'),
(52, 'RNT 33A', '', 0, '_|_ RNP 4', 68, 'Bekapaika (_|_ RIP 106)', 68, 68, 'RT', '', 'Betsiboka', 'DRTP'),
(53, 'RNT 33A', '', 68, 'Bekapaika (_|_ RIP 106)', 83, 'Tsaratanana', 15, 15, 'RT', '', 'Betsiboka', 'DRTP'),
(54, 'RNT 33B', '1', 0, '_|_ RNP 4', 20, 'Bac', 20, 0, 'RB', 'FR DINFRA 2023', 'Boeny', 'DRTP'),
(55, 'RNT 33B', '2', 20, 'Bac', 24.521, 'Ambato Boeni', 4.521, 0, 'RB', 'FR DINFRA 2023', 'Boeny', 'DRTP'),
(56, 'RNT 54', '1', 0, 'Mahajanga', 8.006, 'A?roport Amborovy', 8.006, 8, 'RB', 'FR DINFRA 2022 : 550ml de chauss?e b?tonn?e', 'Boeny', 'DRTP');

-- --------------------------------------------------------

--
-- Structure de la table `toamasina`
--

CREATE TABLE `toamasina` (
  `id_Toamasina` int(11) NOT NULL,
  `Axes` varchar(50) NOT NULL,
  `Section` varchar(50) NOT NULL,
  `PK_debut` double NOT NULL,
  `Localite_debut` varchar(50) NOT NULL,
  `PK_fin` double NOT NULL,
  `Localite_fin` varchar(50) NOT NULL,
  `Longueur` double NOT NULL,
  `Longueur_traitee` double NOT NULL,
  `Nature_surface` varchar(50) NOT NULL,
  `Observation` varchar(50) NOT NULL,
  `Region` varchar(50) NOT NULL,
  `Gestionnaire_de_l'axe` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `toamasina`
--

INSERT INTO `toamasina` (`id_Toamasina`, `Axes`, `Section`, `PK_debut`, `Localite_debut`, `PK_fin`, `Localite_fin`, `Longueur`, `Longueur_traitee`, `Nature_surface`, `Observation`, `Region`, `Gestionnaire_de_l'axe`) VALUES
(1, 'RNP 2', '5', 72.067, 'Marozevo', 108.668, 'Entr?e pont apr?s BK N?108', 36.601, 25.568, 'RB', 'RPI MTP 2023 : PK 11+000 au 78+100\nCERC : 72+067-8', 'Alaotra Mangoro', 'DRTP'),
(2, 'RNP 2', '6', 108.668, 'Entr?e pont apr?s BK N?108', 111.831, 'Entr?e pont tunnel apr?s BK N?112', 3.163, 0.263, 'RB', 'CERC : PK 108+700 - 111+600', 'Alaotra Mangoro', 'DRTP'),
(3, 'RNP 2', '7', 111.831, 'Entr?e pont tunnel apr?s BK N?112', 142, 'Andasibe', 30.169, 28.169, 'RB', 'RPI MTP 2022 (Sous garantie) : PK 140+000 au PK 25', 'Alaotra Mangoro', 'DRTP'),
(4, 'RNP 2', '7', 142, 'Andasibe', 190.839, 'Entr?e pont ? Antongombato', 48.839, 0, 'RB', 'RPI MTP 2022 (Sous garantie) : PK 140+000 au PK 25', 'Alaotra Mangoro', 'DRTP'),
(5, 'RNP 2', '8', 190.839, 'Entr?e pont ? Antongobato', 203, 'Sahamamy', 12.161, 0, 'RB', 'RPI MTP 2022 (Sous garantie) : PK 140+000 au PK 25', 'Atsinanana', 'DRTP'),
(6, 'RNP 2', '8', 203, 'Sahamamy', 250.755, 'Biffurcation Vohitraivo (Brickaville)', 47.755, 0, 'RB', 'RPI MTP 2022 (Sous garantie) : PK 140+000 au PK 25', 'Atsinanana', 'DRTP'),
(7, 'RNP 2', '9', 250.755, 'Biffurcation Vohitraivo (Brickaville)', 270, 'Sahavalaina', 19.245, 5.245, 'RB', 'RPI MTP 2022 (Sous garantie) : PK 269+000 au PK 30', 'Atsinanana', 'DRTP'),
(8, 'RNP 2', '9', 270, 'Sahavalaina', 279.691, 'Entr?e pont (Agglom?ration Savalaina)', 9.691, 0, 'RB', 'RPI MTP 2022 (Sous garantie) : PK 269+000 au PK 30', 'Atsinanana', 'DRTP'),
(9, 'RNP 2', '10', 279.691, 'Entr?e pont (Agglom?ration Savalaina)', 306, 'Ampasimadinika', 26.309, 2, 'RB', 'RPI MTP 2022 (Sous garantie) : PK 269+000 au PK 30', 'Atsinanana', 'DRTP'),
(10, 'RNP 2', '10', 306, 'Ampasimadinika', 317, 'Borne kilom?trique N?317', 11, 0, 'RB', 'RPI MTP 2022 (Sous garantie) : PK 304 au PK 352+72', 'Atsinanana', 'DRTP'),
(11, 'RNP 2', '10', 317, 'Borne kilom?trique N?317', 342.596, 'Biffurcation nouvel acc?s port ', 25.596, 0, 'RB', 'RPI MTP 2022 (Sous garantie) : PK 304 au PK 352+72', 'Atsinanana', 'DRTP'),
(12, 'RNP 2', '11', 342.596, 'Biffurcation nouvel acc?s port ', 352.729, 'Port Toamasina', 10.133, 0, 'RB', 'RPI MTP 2022 (Sous garantie) : PK 304 au PK 352+72', 'Atsinanana', 'DRTP'),
(13, 'RNT 2Ter', '1', 0, 'Tsarakofafa', 7, 'Anjoma', 7, 7, 'RB', '', 'Atsinanana', 'DRTP'),
(14, 'RNT 3A', '1', 0, 'St?le Vohidiala', 52.262, '1?re buse apr?s BK N?52', 52.262, 52.262, 'RB', 'CERC : PK 12+000; 12+700; 24+200; 29+550\nPDDR (EP-', 'Alaotra Mangoro', 'DRTP'),
(15, 'RNT 3A', '2', 52.262, '1?re buse apr?s BK N?52', 103.965, 'Vohitraivo (_|_ RNS 44  2?me buse apr?s BK 104)', 51.703, 50.703, 'RB', 'CERC : PK 55+200; 79+000-80+000; 79+350; 91+000; 9', 'Alaotra Mangoro', 'DRTP'),
(16, 'RNT 3A', '3', 103.965, 'Vohitraivo (_|_ RNS 44  2?me buse apr?s BK 104)', 148.62, 'Andilamena', 44.655, 0, 'RT', 'FR DINFRA 2023\nPDDR (EP-Janv 2023) : PK 110+000 au', 'Alaotra Mangoro', 'DRTP'),
(17, 'RNS 5', '1', 0, 'Toamasina a?roport', 55.007, 'Borne kilom?trique N?55', 55.007, 4.107, 'RB', 'CERC : PK 0+000 au 5+500; 7+000 au 9+000; 9+700; 1', 'Atsinanana', 'DRTP'),
(18, 'RNS 5', '2', 55.007, 'Borne kilom?trique N?55', 70.28, 'Sortie pont Namahoaka', 15.273, 15.273, 'RB', 'PDDR : PK 55+000 au 70+000', 'Atsinanana', 'DRTP'),
(19, 'RNS 5', '3a', 70.28, 'Sortie pont Namahoaka', 89.04, '_|_ route vers Vavatenina (RNT 22)', 18.76, 18.76, 'RB', 'PDDR : PK 70+000 au 163+000', 'Analanjirofo', 'DRTP'),
(20, 'RNS 5', '3b', 89.04, '_|_ route vers Vavatenina (RNT 22)', 97.014, 'Borne kilom?trique N?97', 7.974, 7.974, 'RB', 'PDDR : PK 70+000 au 163+000', 'Analanjirofo', 'DRTP'),
(21, 'RNS 5', '4', 97.014, 'Borne kilom?trique N?97', 101.014, 'Borne kilom?trique N?101', 4, 4, 'RB', 'PDDR : PK 70+000 au 163+000', 'Analanjirofo', 'DRTP'),
(22, 'RNS 5', '5', 101.014, 'Borne kilom?trique N?101', 162.702, 'Bac Soanierana Ivongo', 61.688, 61.688, 'RB', 'RPI MTP 2023 : PK 158+450\nCERC : PK 123+700\nPDDR (', 'Analanjirofo', 'DRTP'),
(23, 'RNS 5', '6', 162.702, 'Bac Soanierana Ivongo', 203, 'Manompana', 40.298, 0, 'RT', 'R?hab. Multi-bailleurs', 'Analanjirofo', 'DRTP'),
(24, 'RNS 5', '7', 203, 'Manompana', 239.5, 'Sortie Bac Vahibe (Limite AT/FE-AT)', 36.5, 0, 'RT', 'R?hab. Multi-bailleurs', 'Analanjirofo', 'DRTP'),
(25, 'RNS 5', '8', 239.5, 'Sortie Bac Vahibe (Limite AT/FE-AT)', 283, 'Mananara Nord', 43.5, 43.5, 'RT', '', 'Analanjirofo', 'DRTP'),
(26, 'RNS 5', '9', 283, 'Mananara Nord', 289.5, 'Bac Soavinarivo', 6.5, 6.5, 'RB', '', 'Analanjirofo', 'DRTP'),
(27, 'RNS 5', '10', 289.5, 'Bac Soavinarivo', 306, 'Manambolosy', 16.5, 16.5, 'RT', '', 'Analanjirofo', 'DRTP'),
(28, 'RNS 5', '11', 306, 'Manambolosy', 369, 'Nandrasana', 63, 63, 'RT', '', 'Analanjirofo', 'DRTP'),
(29, 'RNS 5', '12', 369, 'Nandrasana', 387, 'Soanierana', 18, 18, 'RT', '', 'Analanjirofo', 'DRTP'),
(30, 'RNS 5', '13', 387, 'Soanierana', 404, 'Sortie pont Anjahanambo', 17, 17, 'RB', '', 'Analanjirofo', 'DRTP'),
(31, 'RNS 5U', '1', 0, 'Toamasina (RNP 2/ PK 348+700)', 4.185, 'A?roport Toamasina (Ambalamanasy)', 4.185, 4.185, 'RB', '', 'Atsinanana', 'DRTP'),
(32, 'RNT 11', '5', 22, 'Ambinanivolo (Limite Ex-DIRTPI F/A)', 45.3, 'Masomeloka', 23.3, 0, 'RT', 'RPI MTP 2022 : PK 0+000 au PK90+000', 'Atsinanana', 'DRTP'),
(33, 'RNT 11', '6', 45.3, 'Masomeloka', 90.3, 'Tsangambato Mahanoro (Sortie Pont)', 45, 0, 'RT', 'RPI MTP 2022 : PK 0+000 au PK90+000', 'Atsinanana', 'DRTP'),
(34, 'RNT 11A', '1', 0, 'Antsapanana _|_ RNP 2', 44.628, 'Buse apr?s Borne N?44', 44.628, 44.628, 'RB', '', 'Atsinanana', 'DRTP'),
(35, 'RNT 11A', '2', 44.628, 'Buse apr?s Borne N?44', 48.929, 'Sortie pont Pangalane 1', 4.301, 4.301, 'RB', '', 'Atsinanana', 'DRTP'),
(36, 'RNT 11A', '3', 48.929, 'Sortie pont Pangalane 1', 53.795, 'Entr?e Pont Pangalane 2', 4.866, 4.866, 'RB', '', 'Atsinanana', 'DRTP'),
(37, 'RNT 11A', '4', 53.795, 'Entr?e Pont Pangalane 2', 70.556, 'Sortie pont Sakanila', 16.761, 5.205, 'RB', 'CERC : PK 59+000 au 70+000', 'Atsinanana', 'DRTP'),
(38, 'RNT 11A', '5', 70.556, 'Sortie pont Sakanila', 84.3, '_|_ Marosiky', 13.744, 0, 'RB', 'CERC : PK 70+000 au 84+300', 'Atsinanana', 'DRTP'),
(39, 'RNT 11A', '6', 84.3, '_|_ Marosiky', 136.795, 'Entr?e Mahanoro, panneau', 52.495, 0, 'RB', 'CERC : PK 84+300 au 138+900', 'Atsinanana', 'DRTP'),
(40, 'RNT 11A', '7', 136.795, 'Entr?e Mahanoro, panneau', 138.795, 'Entr?e pont Mahanoro', 2, 0, 'RB', 'CERC : PK 84+300 au 138+900', 'Atsinanana', 'DRTP'),
(41, 'RNT 20', '1', 0, 'Ilaka (_|_ RNT 11A /PK 88+900) ', 38.8, 'Entr?e march? Antanambao/Manampotsy', 38.8, 0, 'RT', 'RPI MTP 2023 : PK 0+000 au PK 38+800', 'Atsinanana', 'DRTP'),
(42, 'RNS 21', '1', 0, 'Aniribe', 1.02, 'Ravoraha', 1.02, 1.02, 'RT', '', 'Analanjirofo', 'DRTP'),
(43, 'RNS 21', '1', 1.02, 'Ravoraha', 10, 'Ifototra', 8.98, 8.98, 'RB', '', 'Analanjirofo', 'DRTP'),
(44, 'RNS 21', '1', 10, 'Ifototra', 28.9, 'Loukintsy', 18.9, 18.9, 'RB', '', 'Analanjirofo', 'DRTP'),
(45, 'RNS 21', '2', 28.9, 'Loukintsy', 52.7, 'Ambodiatafana', 23.8, 23.8, 'RB', '', 'Analanjirofo', 'DRTP'),
(46, 'RNT 22', '1', 0, 'Antsikafoka', 35.08, 'Buse (Borne N?35)', 35.08, 35.08, 'RB', 'RPI MTP + FR DINFRA 2023 : A confirmer avec DINFRA', 'Analanjirofo', 'DRTP'),
(47, 'RNT 22', '2', 35.08, 'Buse (Borne N?35)', 38.089, 'Buse (Borne N?38)', 3.009, 3.009, 'RB', 'RPI MTP + FR DINFRA 2023 : A confirmer avec DINFRA', 'Analanjirofo', 'DRTP'),
(48, 'RNT 22', '3', 38.089, 'Buse (Borne N?38)', 53.24, 'March? Anjahambe', 15.151, 15.151, 'RB', 'RPI MTP + FR DINFRA 2023 : A confirmer avec DINFRA', 'Analanjirofo', 'DRTP'),
(49, 'RNT 23', '1', 0, '_|_ ex-RIP 2 (Tsangambato)', 11.55, 'Bac Menagisy', 11.55, 11.55, 'RT', 'RPI MTP 2023 et 2022 : A confirmer avec DINFRA', 'Atsinanana', 'DRTP'),
(50, 'RNT 23', '02-mars', 11.55, 'Bac Menagisy', 52, 'Ambinanindrano', 40.45, 40.45, 'RT', 'RPI MTP 2023 et 2022 : A confirmer avec DINFRA', 'Atsinanana', 'DRTP'),
(51, 'RNT 23', '02-mars', 52, 'Ambinanindrano', 60, 'Entr?e Pont Ambinanindrano', 8, 8, 'RT', 'RPI MTP 2023 et 2022 : A confirmer avec DINFRA', 'Atsinanana', 'DRTP'),
(52, 'RNT 23', '3', 60, 'Entr?e Pont Ambinanindrano', 120, 'Marolambo', 60, 60, 'RT', 'RPI MTP 2023 et 2022 : A confirmer avec DINFRA', 'Atsinanana', 'DRTP'),
(53, 'RNT 23A', '1', 0, 'Moramanga (_|_ RNP 2 /PK 111+700)', 1.42, 'Sortie Tanamasoandro (d?but digue)', 1.42, 0, 'RB', 'FR DINFRA 2023 : PK 0+000 au 71+000\nCERC : PK 0+00', 'Alaotra Mangoro', 'DRTP'),
(54, 'RNT 23A', '2', 1.42, 'Sortie Tanamasoandro (d?but digue)', 71.3, 'Anosibe An\'Ala', 69.88, 0, 'RT', 'RPI MTP 2022 (Sous garantie) : PK 50+000 au PK 70+', 'Alaotra Mangoro', 'DRTP'),
(55, 'RNT 33', '1', 0, 'Ambaiboho (Borne N? 0)', 63.156, 'Borne kilom?trique N?65', 63.156, 63.156, 'RB', '', 'Alaotra Mangoro', 'DRTP'),
(56, 'RNT 33', '2', 63.156, 'Borne kilom?trique N?65', 87.795, 'Entr?e Pont Ambodiadabo Laverie', 24.639, 24.639, 'RB', '', 'Alaotra Mangoro', 'DRTP'),
(57, 'RNS 44', '1', 0, 'Carrefour Moramanga Borne', 2.043, '1?re buse apr?s BK N?2', 2.043, 2.043, 'RB', '', 'Alaotra Mangoro', 'DRTP'),
(58, 'RNS 44', '2', 2.043, '1?re buse apr?s BK N?2', 19.999, 'Borne kilom?trique N?20', 17.956, 17.956, 'RB', '', 'Alaotra Mangoro', 'DRTP'),
(59, 'RNS 44', '3', 19.999, 'Borne kilom?trique N?20', 90, 'Limite SUBTP 33/34', 70.001, 0, 'RT', 'R?habilitation IDA (PACT) : sous garantie : PK 20+', 'Alaotra Mangoro', 'DRTP'),
(60, 'RNS 44', '3', 90, 'Limite SUBTP 33/34', 133.083, 'Axe buse ', 43.083, 0, 'RT', 'R?habilitation IDA (PACT) : PK 60+000 au PK 133+00', 'Alaotra Mangoro', 'DRTP'),
(61, 'RNS 44', '5', 133.083, 'Axe buse ', 154.758, 'Debut radier', 21.675, 21.675, 'RB', '', 'Alaotra Mangoro', 'DRTP'),
(62, 'RNS 44', '6', 154.758, 'Debut radier', 159.044, 'Sortie Ambatondrazaka, buse ', 4.286, 4.286, 'RB', '', 'Alaotra Mangoro', 'DRTP'),
(63, 'RNS 44', '7', 159.044, 'Sortie Ambatondrazaka, buse ', 184, 'Ambatosoratra', 24.956, 24.956, 'RT', '', 'Alaotra Mangoro', 'DRTP'),
(64, 'RNS 44', '7', 184, 'Ambatosoratra', 206, 'Imerimandroso', 22, 22, 'RT', '', 'Alaotra Mangoro', 'DRTP'),
(65, 'RNS 44', '7', 206, 'Imerimandroso', 226, 'Vohitraivo (2?me _|_ RNT 3A)', 20, 20, 'RT', '', 'Alaotra Mangoro', 'DRTP');

-- --------------------------------------------------------

--
-- Structure de la table `toliara`
--

CREATE TABLE `toliara` (
  `id_toliara` int(11) NOT NULL,
  `Axes` varchar(50) NOT NULL,
  `Section` varchar(50) NOT NULL,
  `PK_debut` double NOT NULL,
  `Localite_debut` varchar(50) NOT NULL,
  `PK_fin` double NOT NULL,
  `Localite_fin` varchar(50) NOT NULL,
  `Longueur` double NOT NULL,
  `Longueur_traitee` double NOT NULL,
  `Nature_surface` varchar(50) NOT NULL,
  `Observation` varchar(50) NOT NULL,
  `Region` varchar(50) NOT NULL,
  `Gestionnaire_de_l'axe` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `toliara`
--

INSERT INTO `toliara` (`id_toliara`, `Axes`, `Section`, `PK_debut`, `Localite_debut`, `PK_fin`, `Localite_fin`, `Longueur`, `Longueur_traitee`, `Nature_surface`, `Observation`, `Region`, `Gestionnaire_de_l'axe`) VALUES
(1, 'RNP 7', '23', 740.8, 'Limite Ex-DIRTPI F/U - Panneau limite provinces', 800, 'Sakaraha', 59.2, 59.2, 'RB', '', 'Atsimo Andrefana', 'DRTP'),
(2, 'RNP 7', '24', 800, 'Sakaraha', 860.369, 'Borne kilom?trique N?860 limite SUBTP', 60.369, 40.369, 'RB', 'PDDR : PK 820 - 840', 'Atsimo Andrefana', 'DRTP'),
(3, 'RNP 7', '25', 860.369, 'Borne kilom?trique N?860 limite SUBTP', 926.662, 'Borne kilom?trique N?923', 66.293, 41.293, 'RB', 'PDDR : PK 900 - 925', 'Atsimo Andrefana', 'DRTP'),
(4, 'RNP 7', '26', 926.662, 'Borne kilom?trique N?923', 931.679, 'Devant Faritany de Toliara', 5.017, 5.017, 'RB', '', 'Atsimo Andrefana', 'DRTP'),
(5, 'RNT 8', '1', 0, '_|_ RNS 35 (Marofototra) - ', 29, 'Marofandilia', 29, 29, 'RT', '', 'Menabe', 'DRTP'),
(6, 'RNT 8', '2', 29, 'Marofandilia', 85, 'Belo sur Tsiribihina', 56, 56, 'RT', '', 'Menabe', 'DRTP'),
(7, 'RNT 8', '3', 85, 'Belo sur Tsiribihina', 180, 'Bac Bekopaka (lim Ex-DIRTPI U/M)', 95, 95, 'RT', '', 'Menabe', 'DRTP'),
(8, 'RNT 9', '1', 0, 'Toliara', 47, 'Ankilimalinike lim SUBTP 44/41', 47, 47, 'RB', '', 'Atsimo Andrefana', 'DRTP'),
(9, 'RNT 9', '2', 47, 'Ankilimalinike lim SUBTP 44/41', 72, 'Ankililoaka', 25, 25, 'RB', '', 'Atsimo Andrefana', 'DRTP'),
(10, 'RNT 9', '2', 72, 'Ankililoaka', 96, 'Ambahiza', 24, 24, 'RB', '', 'Atsimo Andrefana', 'DRTP'),
(11, 'RNT 9', '2', 96, 'Ambahiza', 107, 'Analamisampy', 11, 11, 'RB', '', 'Atsimo Andrefana', 'DRTP'),
(12, 'RNT 9', '3', 107, 'Analamisampy', 204, '_|_ RNT 55 vers Morombe', 97, 0, 'RT', 'R?habilitation BAD (PACFC)', 'Atsimo Andrefana', 'DRTP'),
(13, 'RNT 9', '4', 204, '_|_ RNT 55 vers Morombe', 205, 'Bevoay (Limite SUBTP 41/42)', 1, 0, 'RT', 'R?habilitation BAD (PACFC)', 'Atsimo Andrefana', 'DRTP'),
(14, 'RNT 9', '5', 205, 'Bevoay (Limite SUBTP 41/42)', 243.2, 'Sorita', 38.2, 0, 'RT', 'R?habilitation BAD (PACFC)', 'Menabe', 'DRTP'),
(15, 'RNT 9', '6', 243.2, 'Sorita', 286, 'Manja', 42.8, 0, 'RT', 'R?habilitation BAD (PACFC)', 'Menabe', 'DRTP'),
(16, 'RNT 9', '7', 286, 'Manja', 376, 'Mandabe', 90, 90, 'RT', 'R?habilitation BAD/OFID/AIIB/UE (PACFC) - travaux ', 'Menabe', 'DRTP'),
(17, 'RNT 9', '8', 376, 'Mandabe', 426, 'Ambatovoaba', 50, 50, 'RT', 'R?habilitation BAD/OFID/AIIB/UE (PACFC) - travaux ', 'Menabe', 'DRTP'),
(18, 'RNT 9', '9', 426, 'Ambatovoaba', 471, 'Dabara (_|_ RNS 35)', 45, 45, 'RT', 'R?habilitation BAD/OFID/AIIB/UE (PACFC) - travaux ', 'Menabe', 'DRTP'),
(19, 'RNS 10', '1', 0, 'Andranovory (_|_ RNP 7)', 61, 'Ihotry (_|_ RIP 109)', 61, 61, 'RT', '', 'Atsimo Andrefana', 'DRTP'),
(20, 'RNS 10', '2', 61, 'Ihotry (_|_ RIP109)', 90, 'Betioky', 29, 29, 'RT', '', 'Atsimo Andrefana', 'DRTP'),
(21, 'RNS 10', '3', 90, 'Betioky', 222, 'Limite SUBTP 44/37', 132, 132, 'RT', '', 'Atsimo Andrefana', 'DRTP'),
(22, 'RNS 10', '3', 222, 'Limite SUBTP 44/37', 226, 'Ampanihy', 4, 4, 'RT', '', 'Atsimo Andrefana', 'DRTP'),
(23, 'RNS 10', '4', 226, 'Ampanihy', 264, 'Tranoroa (_|_ Betioky - Bekily)', 38, 38, 'RT', '', 'Atsimo Andrefana', 'DRTP'),
(24, 'RNS 10', '5', 264, 'Tranoroa (_|_ Betioky - Bekily)', 374, 'Tsihombe (_|_ Antanimora RNS 13)', 110, 110, 'RT', '', 'Androy', 'DRTP'),
(25, 'RNS 10', '6', 374, 'Tsihombe (_|_ Antanimora RNS 13)', 434, 'Ambovombe (_|_ RNS 13)', 60, 60, 'RT', '', 'Androy', 'DRTP'),
(26, 'RNT 12A', '1', 0, 'Tolagnaro', 0.85, 'Tolagnaro', 0.85, 0, 'RB', 'R?habilitation BAD (PACFC)', 'Anosy', 'DRTP'),
(27, 'RNT 12A', '1', 0.85, 'Tolagnaro', 3.5, 'Antanifotsy', 2.65, 0, 'RB', 'R?habilitation BAD (PACFC)', 'Anosy', 'DRTP'),
(28, 'RNT 12A', '1', 3.5, 'Antanifotsy', 33, 'Mahatalaky', 29.5, 0, 'RT', 'R?habilitation BAD (PACFC)', 'Anosy', 'DRTP'),
(29, 'RNT 12A', '01-f?vr', 33, 'Mahatalaky', 44.85, 'Ebakika', 11.85, 0, 'RT', 'R?habilitation BAD (PACFC)', 'Anosy', 'DRTP'),
(30, 'RNT 12A', '01-f?vr', 44.85, 'Ebakika', 88, 'Village Ankaramania', 43.15, 0, 'RT', 'R?habilitation BAD (PACFC) -Pr?vision travaux en m', 'Anosy', 'DRTP'),
(31, 'RNT 12A', '2', 88, 'Village Ankaramania', 101, 'Manantenina', 13, 0, 'RT', 'R?habilitation BAD (PACFC) -Pr?vision travaux en m', 'Anosy', 'DRTP'),
(32, 'RNT 12A', '2', 101, 'Manantenina', 115, 'Bac Maroroy PK 120', 14, 0, 'RT', 'R?habilitation BAD (PACFC) -Pr?vision travaux en m', 'Anosy', 'DRTP'),
(33, 'RNT 12A', '2', 115, 'Bac Maroroy PK 120', 139, 'Bac Befasy (Limite SRTP)', 24, 0, 'RT', 'R?habilitation BAD (PACFC) -Pr?vision travaux en m', 'Anosy', 'DRTP'),
(34, 'RNS 13', '2', 57, 'Radier Iampety (Limite Ex-DIRTPI F/U)', 95, 'Anaviavy', 38, 0, 'RT', 'RPI MTP 2023 : PK 0+000 au PK 118+000', 'Anosy', 'DRTP'),
(35, 'RNS 13', '2', 95, 'Anaviavy', 116, 'Entr?e Betroka', 21, 0, 'RT', 'RPI MTP 2023 : PK 0+000 au PK 118+000', 'Anosy', 'DRTP'),
(36, 'RNS 13', '3', 116, 'Entr?e Betroka', 135, 'Ankaroka', 19, 0, 'RT', 'RPI MTP 2023 : PK 118+000 au PK 389+000', 'Anosy', 'DRTP'),
(37, 'RNS 13', '4', 135, 'Ankaroka', 196, 'Isoanala', 61, 0, 'RT', 'RPI MTP 2023 : PK 118+000 au PK 389+000', 'Anosy', 'DRTP'),
(38, 'RNS 13', '5', 196, 'Isoanala', 223, 'Manankoliva (_|_ RNS 13 Bekily - RIP 111)', 27, 0, 'RT', 'RPI MTP 2023 : PK 118+000 au PK 389+000', 'Anosy', 'DRTP'),
(39, 'RNS 13', '6', 223, 'Manankoliva (_|_ RNS 13 Bekily - RIP 111)', 246, 'Beraketa', 23, 0, 'RT', 'RPI MTP 2023 : PK 118+000 au PK 389+000', 'Androy', 'DRTP'),
(40, 'RNS 13', '7', 246, 'Beraketa', 322, 'Antanimora Limite SUBTP 43/37', 76, 0, 'RT', 'RPI MTP 2023 : PK 118+000 au PK 389+000', 'Androy', 'DRTP'),
(41, 'RNS 13', '8', 322, 'Antanimora Limite SUBTP 43/37', 378, 'Borne Kilom?trique N?378', 56, 0, 'RT', 'RPI MTP 2023 : PK 118+000 au PK 389+000', 'Androy', 'DRTP'),
(42, 'RNS 13', '9', 378, 'Borne Kilom?trique N?378', 381, 'Ambovombe', 3, 0, 'RT', 'RPI MTP 2023 : PK 118+000 au PK 389+000', 'Androy', 'DRTP'),
(43, 'RNS 13', '9', 381, 'Ambovombe', 398, 'Borne Kilom?trique N?398', 17, 0, 'RB', 'RPI MTP 2023 : PK 118+000 au PK 389+000\nR?habilita', 'Anosy', 'DRTP'),
(44, 'RNS 13', '10', 398, 'Borne Kilom?trique N?398', 417, 'Amboasary', 19, 0, 'RB', 'R?habilitation BEI+UE', 'Anosy', 'DRTP'),
(45, 'RNS 13', '11', 417, 'Amboasary', 488, 'Plaque ville Taolagnaro', 71, 0, 'RB', 'R?habilitation BEI+UE', 'Anosy', 'DRTP'),
(46, 'RNT 15', '1', 0, 'Sakaraha (_|_ RNP 7) ', 87, '_|_ RNT 15B vers Ankazoabo', 87, 0, 'RT', 'FR DINFRA 2023\nTU RPI MTP 2022 (Sous garantie) : ?', 'Atsimo Andrefana', 'DRTP'),
(47, 'RNT 15', '2', 87, '_|_ RNT 15B vers Ankazoabo', 150, 'Ankoabe', 63, 0, 'RT', 'FR DINFRA 2023\nTU RPI MTP 2022 (Sous garantie) : ?', 'Atsimo Andrefana', 'DRTP'),
(48, 'RNT 15', '3', 150, 'Ankoabe', 211, 'Beroroha', 61, 0, 'RT', 'FR DINFRA 2023\nTU RPI MTP 2022 (Sous garantie) : ?', 'Atsimo Andrefana', 'DRTP'),
(49, 'RNT 15B', '1', 0, '_|_ RNT 15', 29, 'Ankazoabo', 29, 29, 'RT', '', 'Atsimo Andrefana', 'DRTP'),
(50, 'RNT 17', '1', 0, 'Manankoliva (PK 221 _|_ RNS 13)', 41, '_|_ RIP 106 (Bekily)', 41, 0, 'RT', 'FR DINFRA 2023', 'Androy', 'DRTP'),
(51, 'RNT 17A', '1', 0, '_|_ RNS 10 (Ihotry)', 22, 'Bezaha', 22, 0, 'RT', 'FR DINFRA 2023', 'Atsimo Andrefana', 'DRTP'),
(52, 'RNT 17A', '2', 22, 'Bezaha', 63, 'Belamoty', 41, 0, 'RT', 'FR DINFRA 2023', 'Atsimo Andrefana', 'DRTP'),
(53, 'RNT 17A', '3', 63, 'Belamoty', 104, 'Benenitra', 41, 0, 'RT', 'FR DINFRA 2023', 'Atsimo Andrefana', 'DRTP'),
(54, 'RNS 34', '03-avr', 165.2, 'Limite SUBTP Tana/Toliara', 222.826, 'Ambatomena borne fontaine (Miandrivazo)', 57.626, 57.626, 'RB', 'CERC : PK 175+600\nPDDR (EP-Avril 2023) : PK 145+00', 'Menabe', 'DRTP'),
(55, 'RNS 34', '', 222.826, 'Ambatomena borne fontaine (Miandrivazo)', 331, '_|_ RN 35 (proche Malaimbandy)', 108.174, 108.174, 'RB', 'CERC : PK 233+400; 259+900; 272+100; 289+050; 314+', 'Menabe', 'DRTP'),
(56, 'RNS 35', '1', 0, 'Janjina kely (Limite Ex-DIRTPI F/U)', 25, 'Janjina', 25, 25, 'RT', '', 'Menabe', 'DRTP'),
(57, 'RNS 35', '2', 25, 'Janjina', 45, 'Tambazo', 20, 20, 'RB', '', 'Menabe', 'DRTP'),
(58, 'RNS 35', '3', 45, 'Tambazo', 66.5, 'Malaimbandy', 21.5, 21.5, 'RT', '', 'Menabe', 'DRTP'),
(59, 'RNS 35', '4', 66.5, 'Malaimbandy', 89.235, 'Borne kilom?trique N?309', 22.735, 22.735, 'RB', '', 'Menabe', 'DRTP'),
(60, 'RNS 35', '5', 89.235, 'Borne kilom?trique N?309', 135.077, 'Ankilizato', 45.842, 45.842, 'RB', '', 'Menabe', 'DRTP'),
(61, 'RNS 35', '6', 135.077, 'Ankilizato', 175.4, 'Pont Canal Dabara', 40.323, 40.323, 'RB', '', 'Menabe', 'DRTP'),
(62, 'RNS 35', '7', 175.4, 'Pont Canal Dabara', 224.211, 'Face Alliance Fran?aise Morondava', 48.811, 48.811, 'RB', '', 'Menabe', 'DRTP'),
(63, 'RNT 55', '1', 0, 'Bevoay (_|_ RNT 9 /PK204)', 18, 'Antsakoabe', 18, 18, 'RT', '', 'Atsimo Andrefana', 'DRTP'),
(64, 'RNT 55', '2', 18, 'Antsakoabe', 78, 'Morombe', 60, 60, 'RB', '', 'Atsimo Andrefana', 'DRTP');

-- --------------------------------------------------------

--
-- Structure de la table `travaux`
--

CREATE TABLE `travaux` (
  `id_Travaux` int(11) NOT NULL,
  `Type_trx` varchar(50) NOT NULL,
  `Recep_def` date NOT NULL,
  `Demar_trx` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `antananarivo`
--
ALTER TABLE `antananarivo`
  ADD PRIMARY KEY (`id_tana`);

--
-- Index pour la table `antsiranana`
--
ALTER TABLE `antsiranana`
  ADD PRIMARY KEY (`id_antsiranana`);

--
-- Index pour la table `fianarantsoa`
--
ALTER TABLE `fianarantsoa`
  ADD PRIMARY KEY (`id_fianara`);

--
-- Index pour la table `mahajanga`
--
ALTER TABLE `mahajanga`
  ADD PRIMARY KEY (`id_mahajanga`);

--
-- Index pour la table `toamasina`
--
ALTER TABLE `toamasina`
  ADD PRIMARY KEY (`id_Toamasina`);

--
-- Index pour la table `toliara`
--
ALTER TABLE `toliara`
  ADD PRIMARY KEY (`id_toliara`);

--
-- Index pour la table `travaux`
--
ALTER TABLE `travaux`
  ADD PRIMARY KEY (`id_Travaux`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `antananarivo`
--
ALTER TABLE `antananarivo`
  MODIFY `id_tana` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT pour la table `antsiranana`
--
ALTER TABLE `antsiranana`
  MODIFY `id_antsiranana` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT pour la table `fianarantsoa`
--
ALTER TABLE `fianarantsoa`
  MODIFY `id_fianara` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT pour la table `mahajanga`
--
ALTER TABLE `mahajanga`
  MODIFY `id_mahajanga` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT pour la table `toamasina`
--
ALTER TABLE `toamasina`
  MODIFY `id_Toamasina` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT pour la table `toliara`
--
ALTER TABLE `toliara`
  MODIFY `id_toliara` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT pour la table `travaux`
--
ALTER TABLE `travaux`
  MODIFY `id_Travaux` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
