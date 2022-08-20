import { prisma } from '../db/prisma';

export default async function createOrUpdateCart(id: string) {
	const cartOfUser = await prisma.cart.findUnique({
		where: {
			userId: id,
		},
		select: {
			id: true,
		},
	});

	if (!cartOfUser) {
		const newCart = await prisma.cart.create({
			data: {
				userId: id,
				user: {
					connect: { id: id },
				},
			},
		});

		return newCart;
	} else {
		return cartOfUser;
	}
}
