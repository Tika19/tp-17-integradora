-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 14-11-2023 a las 01:15:17
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tp17`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `pos` varchar(255) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `est` double NOT NULL,
  `p` int(11) DEFAULT NULL,
  `nac` varchar(255) DEFAULT NULL,
  `ap` int(11) DEFAULT NULL,
  `sub` int(11) DEFAULT NULL,
  `a` int(11) DEFAULT NULL,
  `ga` int(11) DEFAULT NULL,
  `assis` int(11) DEFAULT NULL,
  `fc` int(11) DEFAULT NULL,
  `fs` int(11) DEFAULT NULL,
  `ta` int(11) DEFAULT NULL,
  `tr` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`id`, `nombre`, `pos`, `edad`, `est`, `p`, `nac`, `ap`, `sub`, `a`, `ga`, `assis`, `fc`, `fs`, `ta`, `tr`) VALUES
(15, 'Fábio1', 'G', 43, 1.88, 86, 'Brasil', 28, 0, 84, 34, 0, 0, 2, 3, 0),
(16, 'Marlon4', 'D', 28, 1.83, 78, 'Brasil', 13, 2, 0, 0, 4, 1, 16, 1, 5),
(17, 'Marcelo12', 'D', 35, 1.73, 72, 'Brasil', 15, 1, 1, 1, 25, 8, 5, 24, 3),
(18, 'Nino33', 'D', 26, 1.88, 82, 'Brasil', 21, 0, 2, 0, 12, 4, 22, 22, 4),
(19, 'John Kennedy9', 'A', 21, 1.73, 71, 'Brasil', 20, 11, 4, 1, 35, 16, 19, 24, 8),
(20, 'Keno11', 'A', 34, 1.78, 72, 'Brasil', 19, 4, 2, 4, 37, 15, 15, 23, 5),
(21, 'Germán Cano14', 'A', 35, 1.75, 75, 'Argentina', 22, 2, 26, 21, 6, 10, 6, 1, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
