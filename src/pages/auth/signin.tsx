import { getProviders, signIn } from 'next-auth/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const buttonClasses =
	'w-full p-2 border border-black dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white transition-all duration-500 border dark:border-white border-black';

const SignInPage = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='border p-8'>
				<h1 className='text-2xl font-semibold text-center'>Ingresar</h1>
				<div className='pt-4'>
					{Object.values(providers).map((provider: any) => (
						<button
							key={provider.name}
							className={buttonClasses}
							onClick={() => signIn(provider.id, { callbackUrl: '/' })}
						>
							Ingresar con {provider.name}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default SignInPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const providers = await getProviders();
	return {
		props: { providers },
	};
};
