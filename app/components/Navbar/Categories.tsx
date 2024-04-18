'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import {
	GiWindmill
} from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { TbBeach, TbMountain } from 'react-icons/tb'
import CategoryBox from '../CategoryBox'
import { Container } from '../Container'



export const categories = [
	{
		label: 'Deluxe',
		icon: TbBeach,
		description: 'This Property is close to the beach',
	},
	{
		label: 'Single Bed',
		icon: GiWindmill,
		description: 'This Property has windmills',
	},
	{
		label: 'Double Bed',
		icon: MdOutlineVilla,
		description: 'This Property is modern',
	},
	{
		label: 'Road Facing',
		icon: TbMountain,
		description: 'This Property in the countryside',
	},
	{
		label: 'Garden Facing',
		icon: TbMountain,
		description: 'This Property in the countryside',
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
