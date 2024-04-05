-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 05 avr. 2024 à 11:22
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
-- Structure de la table `projet2024`
--

CREATE TABLE `projet2024` (
  `id_pr2024` int(11) NOT NULL,
  `province` varchar(50) NOT NULL,
  `region` varchar(50) NOT NULL,
  `district` varchar(50) NOT NULL,
  `commune` varchar(50) NOT NULL,
  `axe` varchar(50) NOT NULL,
  `section` decimal(10,0) NOT NULL,
  `titre` varchar(50) NOT NULL,
  `programmelf` decimal(10,0) NOT NULL,
  `conventionlf` decimal(10,0) NOT NULL,
  `conventionliblf` varchar(50) NOT NULL,
  `activite` varchar(100) NOT NULL,
  `cout` decimal(10,0) NOT NULL,
  `naturesurface` varchar(50) NOT NULL,
  `longueur` double NOT NULL,
  `pk_debut` double NOT NULL,
  `pk_fin` double NOT NULL,
  `loc_debut` varchar(50) NOT NULL,
  `loc_Fin` varchar(50) NOT NULL,
  `annee` date DEFAULT NULL,
  `avancement` varchar(100) NOT NULL,
  `observation` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `projet2024`
--

INSERT INTO `projet2024` (`id_pr2024`, `province`, `region`, `district`, `commune`, `axe`, `section`, `titre`, `programmelf`, `conventionlf`, `conventionliblf`, `activite`, `cout`, `naturesurface`, `longueur`, `pk_debut`, `pk_fin`, `loc_debut`, `loc_Fin`, `annee`, `avancement`, `observation`) VALUES
(1, 'dfvv', 'veredv', 'fdbb', 'vervvb', 'bfdb', 12313, 'fdb', 133, 1456, 'bbbbbbbbbbbbb', 'dvdsvvd', 3445668, 'ffdffzff', 143, 14677, 1567, 'fezfezfgerg', 'hrehhggreer', '0000-00-00', 'mandroso', 'fsdffezfzffezez');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `projet2024`
--
ALTER TABLE `projet2024`
  ADD PRIMARY KEY (`id_pr2024`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `projet2024`
--
ALTER TABLE `projet2024`
  MODIFY `id_pr2024` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
