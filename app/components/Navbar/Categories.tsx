'use client'

import React from 'react'
import { Container } from '../Container'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { FaSkiing } from 'react-icons/fa'
import {
	GiBarn,
	GiBoatFishing,
	GiCactus,
	GiCastle,
	GiCaveEntrance,
	GiForestCamp,
	GiIsland,
	GiWindmill,
} from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { BsSnow } from 'react-icons/bs'
import { IoDiamond } from 'react-icons/io5'
import { usePathname, useSearchParams } from 'next/navigation'
import CategoryBox from '../CategoryBox'

export const categories = [
	{
		label: 'Beach',
		icon: TbBeach,
		description: 'This Property is close to the beach',
	},
	{
		label: 'Windmills',
		icon: GiWindmill,
		description: 'This Property has windmills',
	},
	{
		label: 'Modern',
		icon: MdOutlineVilla,
		description: 'This Property is modern',
	},
	{
		label: 'Countryside',
		icon: TbMountain,
		description: 'This Property in the countryside',
	},
	{
		label: 'Pools',
		icon: TbPool,
		description: 'This Property has a pool',
	},
	{
		label: 'Islands',
		icon: GiIsland,
		description: 'This Property is on an island',
	},
	{
		label: 'Lake',
		icon: GiBoatFishing,
		description: 'This Property is close to a Lake',
	},
	{
		label: 'Skiing',
		icon: FaSkiing,
		description: 'This Property skiing activities',
	},
	{
		label: 'Castles',
		icon: GiCastle,
		description: 'This Property is a Castle',
	},
	{
		label: 'Camping',
		icon: GiForestCamp,
		description: 'This Property has Camping Activities',
	},
	{
		label: 'Arctic',
		icon: BsSnow,
		description: 'This Property is in a snowy area',
	},
	{
		label: 'Cave',
		icon: GiCaveEntrance,
		description: 'This Property is near a cave',
	},
	{
		label: 'Desert',
		icon: GiCactus,
		description: 'This Property is in a desert',
	},
	{
		label: 'Barns',
		icon: GiBarn,
		description: 'This Property is in a barn',
	},
	{
		label: 'Lux',
		icon: IoDiamond,
		description: 'This Property is luxurious',
	},
]

const Categories = () => {
	const params = useSearchParams()
	const category = params?.get('category')
	const pathname = usePathname()

	const isMainPage = pathname === '/'
	if (!isMainPage) return null

	return (
		<Container>
			<div
				className="
					pt-4
					flex
					flex-row
					items-center
					justify-between
					overflow-x-auto
					sm:gap-8
		"
			>
				{categories.map((item) => (
					<CategoryBox
						key={item.label}
						label={item.label}
						selected={category === item.label}
						icon={item.icon}
					/>
				))}
			</div>
		</Container>
	)
}

export default Categories
