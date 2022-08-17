import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function addToCartHandler(req: NextApiRequest, res: NextApiResponse) {
	if (!req.body.id) {
		res.status(400).json({ message: 'please provide a valid id' });
	}

	try {
		await prisma.cart.create({
			data: {
				products: {
					connect: {
						cartId_productId: req.body.id,
					},
				},
			},
		});
		res.status(200).json({ message: 'item added to cart', id: req.body.id });
	} catch (error) {
		res.status(500).json({ message: 'failed to add product to cart', error });
	}
}
