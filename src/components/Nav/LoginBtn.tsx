import { useSession, signIn, signOut } from 'next-auth/react';

const btnClasses = 'text-center my-1 text-sm font-medium md:mx-4 md:my-0 hover-link';

export default function LoginBtn() {
	const { data: session } = useSession();
	if (session) {
		return (
			<button className={btnClasses} onClick={() => signOut({ callbackUrl: '/' })}>
				Sign out
			</button>
		);
	}
	return (
		<button className={btnClasses} onClick={() => signIn()}>
			Sign in
		</button>
	);
}
