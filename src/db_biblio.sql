-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mar. 08 juin 2021 à 03:41
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP :  7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `db_biblio`
--

-- --------------------------------------------------------

--
-- Structure de la table `adherent`
--

CREATE TABLE `adherent` (
  `IDAdherent` int(10) NOT NULL,
  `Nom` varchar(255) DEFAULT NULL,
  `Prenom` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `APP` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `adherent`
--

INSERT INTO `adherent` (`IDAdherent`, `Nom`, `Prenom`, `Email`, `APP`) VALUES
(1, 'Lamhamdi', 'Ashraf', 'Ashraf@gmail.com', 82736),
(2, 'Amrani', 'Omar', 'omar@gmail.com', 927363),
(4, 'Amrani', 'Kamal', 'kamal@gmail.com', 293729),
(5678, 'Azoulay', 'Anouar', 'anouar@gmail.com', 829108);

-- --------------------------------------------------------

--
-- Structure de la table `emprunt`
--

CREATE TABLE `emprunt` (
  `IDEmprunt` int(10) NOT NULL,
  `DateEmprunt` varchar(100) DEFAULT NULL,
  `EtatEmprunt` varchar(255) DEFAULT NULL,
  `DatePrecis` varchar(100) DEFAULT NULL,
  `DateRetour` varchar(100) DEFAULT NULL,
  `AdherentID` int(10) NOT NULL,
  `ExemplaireID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `emprunt`
--

INSERT INTO `emprunt` (`IDEmprunt`, `DateEmprunt`, `EtatEmprunt`, `DatePrecis`, `DateRetour`, `AdherentID`, `ExemplaireID`) VALUES
(1, '2021-06-01', 'En cours', '2021-06-07', NULL, 1, 8),
(2, '2021-06-01', 'En Cours', '2021-06-07', NULL, 4, 12),
(3, '2021-06-03', 'En cours', '2021-06-10', NULL, 2, 10);

-- --------------------------------------------------------

--
-- Structure de la table `exemplaire`
--

CREATE TABLE `exemplaire` (
  `IDExemplaire` int(10) NOT NULL,
  `Etat` varchar(255) DEFAULT NULL,
  `LivreID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `exemplaire`
--

INSERT INTO `exemplaire` (`IDExemplaire`, `Etat`, `LivreID`) VALUES
(1, 'Disponible', 1),
(2, 'Disponible', 1),
(3, 'Disponible', 1),
(4, 'Disponible', 1),
(5, 'Disponible', 2),
(6, 'Disponible', 2),
(7, 'Disponible', 2),
(8, 'Emprunte', 3),
(9, 'Disponible', 3),
(10, 'Emprunté', 3),
(11, 'Disponible', 3),
(12, 'Emprunté', 3),
(13, 'Disponible', 3),
(14, 'Disponible', 3),
(15, 'Disponible', 4),
(16, 'Disponible', 4),
(17, 'Disponible', 4),
(18, 'Disponible', 4),
(19, 'Disponible', 4),
(20, 'Disponible', 5),
(21, 'Disponible', 5),
(22, 'Disponible', 5),
(23, 'Disponible', 5),
(24, 'Disponible', 5),
(25, 'Disponible', 5),
(26, 'Disponible', 6),
(27, 'Disponible', 6),
(28, 'Disponible', 6),
(29, 'Disponible', 6),
(30, 'Disponible', 6),
(31, 'Reserve', 6),
(32, 'Disponible', 6),
(33, 'Disponible', 6),
(34, 'Reserve', 7),
(35, 'Disponible', 7),
(36, 'Disponible', 7),
(37, 'Disponible', 7),
(38, 'Disponible', 7),
(39, 'Disponible', 8),
(40, 'Disponible', 8),
(41, 'Disponible', 8),
(42, 'Disponible', 8),
(43, 'Reserve', 9),
(44, 'Disponible', 9),
(45, 'Disponible', 9),
(46, 'Disponible', 9),
(47, 'Disponible', 9),
(48, 'Disponible', 9),
(49, 'Disponible', 9),
(50, 'Disponible', 10),
(51, 'Disponible', 10),
(52, 'Disponible', 10),
(53, 'Disponible', 10),
(54, 'Disponible', 10),
(55, 'Disponible', 11),
(56, 'Disponible', 11),
(57, 'Disponible', 11),
(58, 'Disponible', 11),
(59, 'Disponible', 11),
(60, 'Disponible', 11),
(61, 'Disponible', 12),
(62, 'Disponible', 12),
(63, 'Disponible', 12),
(64, 'Disponible', 12),
(65, 'Disponible', 12),
(66, 'Disponible', 12),
(86, 'Disponible', 13),
(87, 'Disponible', 13),
(88, 'Disponible', 13),
(89, 'Disponible', 13),
(90, 'Disponible', 13),
(98, 'Disponible', 13),
(99, 'Disponible', 13),
(100, 'Disponible', 13),
(101, 'Disponible', 13),
(102, 'Disponible', 9),
(103, 'Disponible', 9),
(104, 'Disponible', 2),
(105, 'Disponible', 2),
(106, 'Reserve', 14),
(107, 'Reserve', 14),
(108, 'Emprunte', 14),
(109, 'Disponible', 14),
(112, 'Disponible', 14);

-- --------------------------------------------------------

--
-- Structure de la table `livre`
--

CREATE TABLE `livre` (
  `IDLivre` int(10) NOT NULL,
  `Titre` varchar(255) DEFAULT NULL,
  `Auteur` varchar(255) DEFAULT NULL,
  `Categorie` varchar(255) DEFAULT NULL,
  `Section` varchar(255) DEFAULT NULL,
  `Couloir` int(10) DEFAULT NULL,
  `Descr` longtext DEFAULT NULL,
  `Cover` varchar(255) DEFAULT NULL,
  `Tags` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `livre`
--

INSERT INTO `livre` (`IDLivre`, `Titre`, `Auteur`, `Categorie`, `Section`, `Couloir`, `Descr`, `Cover`, `Tags`) VALUES
(1, 'Les Fleurs du mal', 'Charles Baudelaire', 'Litterature', NULL, NULL, NULL, NULL, NULL),
(2, 'L\'Étranger ', 'Albert Camus', 'Litterature', NULL, NULL, NULL, NULL, NULL),
(3, 'Les Misérables', 'Victor Hugo', 'Litterature', NULL, NULL, NULL, NULL, NULL),
(4, 'Une brève histoire du temps', 'Stephen Hawking', 'Science', NULL, NULL, NULL, NULL, NULL),
(5, 'Une histoire de tout ou presque', 'Bill Bryson', 'Science', NULL, NULL, NULL, NULL, NULL),
(6, 'L\'Origine des espèces', 'Charles Darwin', 'Science', NULL, NULL, NULL, NULL, NULL),
(7, 'Le Monde d\'hier', 'Stefan Zweig', 'Histoire', NULL, NULL, NULL, NULL, NULL),
(8, 'Stalingrad', 'Antony Beevor', 'Histoire', NULL, NULL, NULL, NULL, NULL),
(9, 'Les Rois maudits', 'Maurice Druon', 'Histoire', NULL, NULL, NULL, NULL, NULL),
(10, 'Bilbo le Hobbit', 'J.R.R. Tolkien', 'Fantasy', NULL, NULL, NULL, NULL, NULL),
(11, 'La Horde du Contrevent (', 'Alain Damasio', 'Fantasy', NULL, NULL, NULL, NULL, NULL),
(12, 'Gagner la guerre ', 'Jean-Philippe Jaworski', 'Fantasy', NULL, NULL, NULL, NULL, NULL),
(13, 'Le Meilleur des mondes', 'Aldous Huxley', 'Science-fiction', NULL, NULL, NULL, NULL, NULL),
(14, 'The Last Vampire', 'Anouar Azoulay', 'Fantasy', NULL, NULL, NULL, NULL, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adherent`
--
ALTER TABLE `adherent`
  ADD PRIMARY KEY (`IDAdherent`);

--
-- Index pour la table `emprunt`
--
ALTER TABLE `emprunt`
  ADD PRIMARY KEY (`IDEmprunt`),
  ADD KEY `FKEmprunt531956` (`AdherentID`),
  ADD KEY `FKEmprunt887790` (`ExemplaireID`);

--
-- Index pour la table `exemplaire`
--
ALTER TABLE `exemplaire`
  ADD PRIMARY KEY (`IDExemplaire`),
  ADD KEY `FKExemplaire107079` (`LivreID`);

--
-- Index pour la table `livre`
--
ALTER TABLE `livre`
  ADD PRIMARY KEY (`IDLivre`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `adherent`
--
ALTER TABLE `adherent`
  MODIFY `IDAdherent` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5679;

--
-- AUTO_INCREMENT pour la table `emprunt`
--
ALTER TABLE `emprunt`
  MODIFY `IDEmprunt` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `exemplaire`
--
ALTER TABLE `exemplaire`
  MODIFY `IDExemplaire` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT pour la table `livre`
--
ALTER TABLE `livre`
  MODIFY `IDLivre` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `emprunt`
--
ALTER TABLE `emprunt`
  ADD CONSTRAINT `FKEmprunt531956` FOREIGN KEY (`AdherentID`) REFERENCES `adherent` (`IDAdherent`),
  ADD CONSTRAINT `FKEmprunt887790` FOREIGN KEY (`ExemplaireID`) REFERENCES `exemplaire` (`IDExemplaire`);

--
-- Contraintes pour la table `exemplaire`
--
ALTER TABLE `exemplaire`
  ADD CONSTRAINT `FKExemplaire107079` FOREIGN KEY (`LivreID`) REFERENCES `livre` (`IDLivre`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
