-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2024 at 09:48 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `instagram`
--

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `uuid` text DEFAULT NULL,
  `user` text DEFAULT NULL,
  `gambar` text DEFAULT NULL,
  `caption` text DEFAULT NULL,
  `ts` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `uuid`, `user`, `gambar`, `caption`, `ts`) VALUES
(1, 'f926848e-5766-4a61-9c5e-78f233b55129', '926dde59-7de7-493c-aed3-b4573247acf0', 'f926848e-5766-4a61-9c5e-78f233b55129.jpeg', 'tes', '2024-01-24 16:07:58'),
(2, 'ccf640e9-b5e6-4ab1-9886-7ad13ed8735a', '926dde59-7de7-493c-aed3-b4573247acf0', 'ccf640e9-b5e6-4ab1-9886-7ad13ed8735a.jpeg', 'uhuy', '2024-01-26 09:22:54'),
(3, '9a0412b0-9ef9-4825-9a49-36f0c44e163c', '926dde59-7de7-493c-aed3-b4573247acf0', '9a0412b0-9ef9-4825-9a49-36f0c44e163c.jpeg', 'coba', '2024-01-26 09:24:01'),
(4, 'dbdab28d-42e3-4078-b104-b0229e02302b', '926dde59-7de7-493c-aed3-b4573247acf0', 'dbdab28d-42e3-4078-b104-b0229e02302b.jpeg', 'bro', '2024-01-26 09:25:13'),
(5, 'e08d0624-129f-43c3-889a-e3693b319c65', '926dde59-7de7-493c-aed3-b4573247acf0', 'e08d0624-129f-43c3-889a-e3693b319c65.jpeg', '', '2024-01-26 09:48:37'),
(6, '6665d186-717f-4ced-9bea-9e33e66eff59', '926dde59-7de7-493c-aed3-b4573247acf0', '6665d186-717f-4ced-9bea-9e33e66eff59.jpeg', '', '2024-01-26 09:48:46'),
(7, 'dfeeff0c-c36b-431e-a2ff-5012bcf27c97', '926dde59-7de7-493c-aed3-b4573247acf0', 'dfeeff0c-c36b-431e-a2ff-5012bcf27c97.jpeg', '', '2024-01-26 09:48:50'),
(8, '034302c2-0688-487a-9d2b-0e85891a1f6d', '926dde59-7de7-493c-aed3-b4573247acf0', '034302c2-0688-487a-9d2b-0e85891a1f6d.jpeg', '', '2024-01-26 09:48:55'),
(9, 'a64ccee2-1c9f-48eb-bba5-b461eb119303', '926dde59-7de7-493c-aed3-b4573247acf0', 'a64ccee2-1c9f-48eb-bba5-b461eb119303.jpeg', '', '2024-01-26 09:49:02'),
(10, '595026ab-6228-4451-8fe8-dfff5781543d', '926dde59-7de7-493c-aed3-b4573247acf0', '595026ab-6228-4451-8fe8-dfff5781543d.jpeg', '', '2024-01-26 09:57:37');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `uuid` text DEFAULT NULL,
  `name` text DEFAULT NULL,
  `username` text DEFAULT NULL,
  `gambar` text DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `password` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `uuid`, `name`, `username`, `gambar`, `bio`, `password`) VALUES
(1, '926dde59-7de7-493c-aed3-b4573247acf0', 'admin1', 'admin1', '177788bb-76ce-40ae-8040-9ee8d189a1ee.jpeg', 'uhuy', '$2a$10$nNO84MT6EaTTQrdenXYPjuN9qfovD.VLCjRrGqyzbLYScN36FLV9G');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
