import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import { prisma } from '../../db/prisma';

export default async function updateQuantityHandler(req: NextApiRequest, res: NextApiResponse) {
	const session = await unstable_getServerSession(req, res, authOptions);
	const productId: string = req.body.productId;
	const cartId: string = req.body.cartId;
	const productQuantity: number = req.body.quantity;

	if (session) {
		try {
			await prisma.cartItem.update({
				where: {
					productId_cartId: {
						productId: productId,
						cartId: cartId,
					},
				},
				data: {
					amount: productQuantity,
				},
			});
			res.status(200).json({ message: 'product quantity updated to cart' });
		} catch (error) {
			res.status(500).json({ message: 'failed to update product', error });
		}
	} else {
		res.status(401).json({ message: 'user has to be log in to update a product in the cart' });
	}
}
