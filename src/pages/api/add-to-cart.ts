import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import createOrUpdateCart from '../../lib/create-update-cart';
import { prisma } from '../../db/prisma';

export default async function addToCartHandler(req: NextApiRequest, res: NextApiResponse) {
	const session = await unstable_getServerSession(req, res, authOptions);
	const userId = session?.user?.id;
	const productId: string = req.body.id;

	if (!session) {
		res.status(401).json({ message: 'user has to be log in to add a product to the cart' });
	}

	if (!req.body.id) {
		res.status(400).json({ message: 'please provide a valid id' });
	}

	try {
		const cart = await createOrUpdateCart(userId!);
		// await prisma.cart.update({
		// 	where: { id: cart.id },
		// 	data: {
		// 		products: {
		// 			connect: { cartId_productId: { cartId: cart.id, productId: productId } },
		// 		},
		// 	},
		// });
		console.log(cart.id);
		res.status(200).json({ message: 'item added to cart', productId: productId, cartId: cart });
	} catch (error) {
		res.status(500).json({ message: 'failed to add product to cart', error });
	}
}
