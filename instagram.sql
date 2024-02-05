-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 05, 2024 at 05:35 AM
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
-- Table structure for table `follow`
--

CREATE TABLE `follow` (
  `id` int(11) NOT NULL,
  `user1` text DEFAULT NULL,
  `user2` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `follow`
--

INSERT INTO `follow` (`id`, `user1`, `user2`) VALUES
(2, '926dde59-7de7-493c-aed3-b4573247acf0', 'd074ee5c-5682-4a73-8777-9c1b25cde638'),
(4, 'd074ee5c-5682-4a73-8777-9c1b25cde638', '926dde59-7de7-493c-aed3-b4573247acf0'),
(7, '926dde59-7de7-493c-aed3-b4573247acf0', '70d9efda-f354-44cc-bd5f-87d12530dbc7');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `post` text DEFAULT NULL,
  `user` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`id`, `post`, `user`) VALUES
(1, 'a00fbc8c-1d01-422b-8f19-ccda441aca0d', '926dde59-7de7-493c-aed3-b4573247acf0');

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
(10, '595026ab-6228-4451-8fe8-dfff5781543d', '926dde59-7de7-493c-aed3-b4573247acf0', '595026ab-6228-4451-8fe8-dfff5781543d.jpeg', '', '2024-01-26 09:57:37'),
(11, '06c92ffa-2de8-438f-8a00-fc9273adc802', 'd074ee5c-5682-4a73-8777-9c1b25cde638', '06c92ffa-2de8-438f-8a00-fc9273adc802.jpeg', '', '2024-01-27 11:45:30'),
(12, '90df217e-5404-42e7-beca-c1b3d080c1a5', 'd074ee5c-5682-4a73-8777-9c1b25cde638', '90df217e-5404-42e7-beca-c1b3d080c1a5.jpeg', 'zxczxcz', '2024-01-27 11:45:42'),
(13, 'db3438a7-1c78-4b14-9dc8-8b8027df4739', 'd074ee5c-5682-4a73-8777-9c1b25cde638', 'db3438a7-1c78-4b14-9dc8-8b8027df4739.jpeg', 'qqqqqq', '2024-01-27 11:45:49'),
(14, 'c8fc37d0-1e1c-48b4-b72c-65f2aa4d68a4', 'd074ee5c-5682-4a73-8777-9c1b25cde638', 'c8fc37d0-1e1c-48b4-b72c-65f2aa4d68a4.jpeg', 'aaaaaaaaaa', '2024-01-27 11:45:58'),
(15, '1e684d4d-fc07-481b-999e-c16f3958b47e', 'd074ee5c-5682-4a73-8777-9c1b25cde638', '1e684d4d-fc07-481b-999e-c16f3958b47e.jpeg', 'ttttttttt', '2024-01-27 11:46:06'),
(16, '5a297895-d957-4efc-a8fa-46ef15f95e0b', 'd074ee5c-5682-4a73-8777-9c1b25cde638', '5a297895-d957-4efc-a8fa-46ef15f95e0b.jpeg', 'adadwadawd', '2024-01-27 11:46:18'),
(17, '119178b1-f244-410c-913d-448ce31b0393', 'd074ee5c-5682-4a73-8777-9c1b25cde638', '119178b1-f244-410c-913d-448ce31b0393.jpeg', 'qqasadas', '2024-01-27 11:46:26'),
(18, '22109059-18fc-47c7-956e-fe76ee10bfd3', 'd074ee5c-5682-4a73-8777-9c1b25cde638', '22109059-18fc-47c7-956e-fe76ee10bfd3.jpeg', 'cxcxcxcxcx', '2024-01-27 11:46:39'),
(19, '6201013c-3392-4dc8-a05b-a516fce6a7ed', 'd074ee5c-5682-4a73-8777-9c1b25cde638', '6201013c-3392-4dc8-a05b-a516fce6a7ed.jpeg', 'bbbb', '2024-01-27 11:46:59'),
(20, 'f46f8ebb-f0c1-4c86-b355-f4c639f6f0df', '70d9efda-f354-44cc-bd5f-87d12530dbc7', 'f46f8ebb-f0c1-4c86-b355-f4c639f6f0df.jpeg', 'ajndjasd', '2024-01-27 11:53:25'),
(21, 'cc4acd9b-3f95-49f1-aafb-9d8c2f6513a6', '70d9efda-f354-44cc-bd5f-87d12530dbc7', 'cc4acd9b-3f95-49f1-aafb-9d8c2f6513a6.jpeg', 'andjwnamx', '2024-01-27 11:53:33'),
(22, 'a1669b3b-02b1-4bed-8279-51e038d72057', '70d9efda-f354-44cc-bd5f-87d12530dbc7', 'a1669b3b-02b1-4bed-8279-51e038d72057.jpeg', 'akwlakn', '2024-01-27 11:53:40'),
(23, '42f14816-4340-403d-b11d-bd1ccc07b6ff', '70d9efda-f354-44cc-bd5f-87d12530dbc7', '42f14816-4340-403d-b11d-bd1ccc07b6ff.jpeg', 'cnxbcnx', '2024-01-27 11:53:46'),
(24, '939c3019-7868-438f-b189-6c0dcf878b2a', '70d9efda-f354-44cc-bd5f-87d12530dbc7', '939c3019-7868-438f-b189-6c0dcf878b2a.jpeg', 'plplap', '2024-01-27 11:53:53'),
(25, '62d41c26-28a9-4932-9406-7137ca19c00c', '70d9efda-f354-44cc-bd5f-87d12530dbc7', '62d41c26-28a9-4932-9406-7137ca19c00c.jpeg', 'bhbhs', '2024-01-27 11:54:02'),
(26, 'd8c88c01-f4d7-4b81-9139-a98234ba019c', '70d9efda-f354-44cc-bd5f-87d12530dbc7', 'd8c88c01-f4d7-4b81-9139-a98234ba019c.jpeg', 'zbznxcz', '2024-01-27 11:54:13'),
(27, 'a00fbc8c-1d01-422b-8f19-ccda441aca0d', '70d9efda-f354-44cc-bd5f-87d12530dbc7', 'a00fbc8c-1d01-422b-8f19-ccda441aca0d.jpeg', 'adwadwa', '2024-01-27 11:54:24'),
(28, 'e5c05e76-7864-4df1-97c2-48fe73d2b812', '70d9efda-f354-44cc-bd5f-87d12530dbc7', 'e5c05e76-7864-4df1-97c2-48fe73d2b812.jpeg', 'vfasd', '2024-01-27 11:54:34'),
(29, '1b68324b-fda5-423f-98d3-dc84ef247c76', 'd4ab5234-5bf3-4ff0-9e84-ba2158d4cf98', '1b68324b-fda5-423f-98d3-dc84ef247c76.jpeg', 'cvcvcvc', '2024-01-27 12:00:05'),
(30, 'e76273c9-7cff-422d-ad67-9ee760d975df', 'd4ab5234-5bf3-4ff0-9e84-ba2158d4cf98', 'e76273c9-7cff-422d-ad67-9ee760d975df.jpeg', 'klklkl', '2024-01-27 12:00:11'),
(31, '3af32c10-9cd8-4546-8fe8-d7c6e81de22c', 'd4ab5234-5bf3-4ff0-9e84-ba2158d4cf98', '3af32c10-9cd8-4546-8fe8-d7c6e81de22c.jpeg', 'yuyiewqq', '2024-01-27 12:00:22'),
(32, 'b9b0b218-8910-406e-ad64-b85b578e4879', '926dde59-7de7-493c-aed3-b4573247acf0', 'b9b0b218-8910-406e-ad64-b85b578e4879.jpeg', 'tes1', '2024-02-05 11:10:15'),
(33, 'a25bc53b-bd58-41a9-93a0-43550b099d1c', '926dde59-7de7-493c-aed3-b4573247acf0', 'a25bc53b-bd58-41a9-93a0-43550b099d1c.jpeg', 'tes2', '2024-02-05 11:13:39');

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
(1, '926dde59-7de7-493c-aed3-b4573247acf0', 'Admin Ganteng', 'admin1', 'aa643563-3501-415e-8ff3-210210cfc09e.jpeg', 'uhuyx', '$2a$10$nNO84MT6EaTTQrdenXYPjuN9qfovD.VLCjRrGqyzbLYScN36FLV9G'),
(2, '70d9efda-f354-44cc-bd5f-87d12530dbc7', 'pak agus', 'agus_slamet', 'bf040835-8a35-4854-bf82-aa8b88002248.jpeg', 'menikmati hidup', '$2a$10$vnd9aaZtJi4scvAXOc5Mv.MB5xmT7MSIud9T0Hc9cdAgGNQ1XxkYG'),
(3, 'd074ee5c-5682-4a73-8777-9c1b25cde638', 'mas cr7 nih bos', 'cr7_official', '9cdb9d55-26df-4ffd-bc80-11c5293a9e5e.jpeg', 'main bola', '$2a$10$wSszcpvEPwCeZ8/bs6BWzuMDl5SMtNm5XWrLasY7B1LydXjEf2H76'),
(4, 'd4ab5234-5bf3-4ff0-9e84-ba2158d4cf98', 'mas goat', 'messi_goat', '9152012b-7298-4fd7-ba2b-2ec0da0ba72b.jpeg', 'suka dribling', '$2a$10$yXR.Y/sv4G0YjGhaksU4H.smnjGkedV3A3//gWzlno7fbwYwexvAy'),
(5, 'a69b6b17-a7be-4b13-a4f4-d74e35cb7c43', NULL, 'admin2', 'avatar.png', NULL, '$2a$10$brwziZ34GGvCcG2YUWNfGue9umlsTQqeClqGfyKkxeK/pm011S89i');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `follow`
--
ALTER TABLE `follow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
