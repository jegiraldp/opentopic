-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-06-2019 a las 08:10:57
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `journal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opentopic_curso`
--

CREATE TABLE `opentopic_curso` (
  `nombre` varchar(100) NOT NULL,
  `creador` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `letra` varchar(2) NOT NULL,
  `fecha` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `opentopic_curso`
--

INSERT INTO `opentopic_curso` (`nombre`, `creador`, `correo`, `descripcion`, `letra`, `fecha`) VALUES
('2', '22', '222', '22222', '2', '4-5-119'),
('3', '33', '333', '3333333333 3d dafaf', '3', '27-51-2019'),
('4', '44', '444', '4444', '4', '27-51-2019'),
('5', '55', '555', '5555', '5', '27-51-2019'),
('67', '76', '67', '666', '6', '27-51-2019'),
('iaiaia', 'ia', 'iiaja', 'jrg', 'i', '27-51-2019');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `opentopic_curso`
--
ALTER TABLE `opentopic_curso`
  ADD PRIMARY KEY (`nombre`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
