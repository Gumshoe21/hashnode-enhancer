import '@/styles/main.scss'
import '@/styles/base/_reset.scss'
import type { AppProps } from 'next/app'
import { universeTE20Thin, universLTStdCn } from '@/fonts'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				:root {
					--Univers: ${universeTE20Thin.style.fontFamily};
					--UniversLTS: ${universLTStdCn.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
