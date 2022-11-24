/* eslint-disable import/prefer-default-export */

import { FaRegUser, FaChevronRight } from 'react-icons/fa';
import { MdBrightnessMedium, MdLanguage } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiFontSize } from 'react-icons/ri';
import ProfilePicture from '../assets';
import Button from '../components/Button';

export const userTopbar = [
	{
		id: 'currentuser',
		userImage: ProfilePicture,
		userName: 'Okesiji Abisola',
		alt: 'userName',
	},
];

export const Account = [
	{
		title: 'ACCOUNT',
		icon: FaRegUser,
		func: 'Edit Profile',
		slug: 'https://www.hoobank.com/content/',
		iconright: FaChevronRight,
	},
];

export const General = [
	{
		title: 'GENERAL',
		icon: FaRegUser,
		func: 'Apps & Integrations',
		slug: 'https://www.hoobank.com/content/',
		iconright: FaChevronRight,
	},
];

export const Security = [
	{
		title: 'SECURITY',
		icon: FaRegUser,
		func: 'Change Password',
		slug: '/edit-profile',
		iconright: FaChevronRight,
	},
];
export const AppSettings = [
	{
		title: 'APP SETTINGS',
		icon: <MdBrightnessMedium />,
		func: 'Dark mode',
		iconright: <Button />,
	},
	{
		icon: <RiFontSize />,
		func: 'Text Size',
		slug: '/text-size',
	},
	{
		icon: <MdLanguage />,
		func: 'Language',
		slug: '/language',
		iconright: <FaChevronRight />,
	},
	{
		icon: <IoNotificationsOutline />,
		func: 'Notifications',
		slug: '/notifications',
		iconright: 'All active',
	},
];

export const Support = [
	{
		title: 'SUPPORT',
		items: [
			{
			list: 'About',
			slug: '/about',
			iconright: <FaChevronRight />,
			},
			{
			list: 'Rate OpsPad',
			slug: '/',
			iconright: <FaChevronRight />,
			},
			{
			list: 'Terms & Condition',
			slug: '/terms-and-condition',
			iconright: <FaChevronRight />,
			},
			{
			list: 'Privacy Policy',
			slug: '/privacy-policy',
			iconright: <FaChevronRight />,
			},
			{
			list: 'FAQs',
			slug: '/faq',
			iconright: <FaChevronRight />,
			}
		],
	},
];