import { prisma } from '../../db/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';

export default async function removeFromCartHandler(req: NextApiRequest, res: NextApiResponse) {
	const session = await unstable_getServerSession(req, res, authOptions);
	const userId = session?.user?.id;
	const productId: string = req.body.id;

	if (!req.body.id) {
		res.status(400).json({ message: 'please provide a valid id' });
	}

	try {
		const cart = await prisma.cart.findUnique({
			where: {
				userId: userId,
			},
			select: {
				id: true,
			},
		});

		await prisma.cartItem.delete({
			where: {
				productId_cartId: {
					productId: productId,
					cartId: cart!.id,
				},
			},
		});

		res.status(200).json({ message: 'item deleted from cart' });
	} catch (error) {
		res.status(500).json({ message: 'failed to add product to cart', error });
	}
}
