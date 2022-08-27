import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import createOrUpdateCart from '../../lib/create-update-cart';
import { prisma } from '../../db/prisma';

export default async function addToCartHandler(req: NextApiRequest, res: NextApiResponse) {
	const session = await unstable_getServerSession(req, res, authOptions);
	const productId: string = req.body.id;
	const quantity: number = req.body.quantity;

	if (!req.body.id) {
		res.status(400).json({ message: 'please provide a valid id' });
	}

	if (session) {
		try {
			const cart = await createOrUpdateCart(session.user!.id);
			await prisma.cart.update({
				where: { id: cart.id },
				data: {
					items: {
						upsert: {
							where: {
								productId_cartId: {
									productId: productId,
									cartId: cart.id,
								},
							},
							update: {
								amount: { increment: 1 },
							},
							create: {
								amount: quantity || 1,
								product: {
									connect: {
										id: productId,
									},
								},
							},
						},
					},
				},
			});
			res.status(200).json({ message: 'item added to cart' });
		} catch (error) {
			res.status(500).json({ message: 'failed to add product to cart', error });
		}
	} else {
		res.status(401).json({ message: 'user has to be log in to add a product to the cart' });
	}
}
