import localFont from 'next/font/local'

const universeTE20Thin = localFont({
	src: './../public/fonts/UniversTE20-Thin.woff2',
	display: 'swap',
	variable: '--Univers'
})

const universLTStdCn = localFont({
	src: './../public/fonts/UniversLTStd-Cn.woff2',
	display: 'swap',
	variable: '--UniversLTS'
})

export { universeTE20Thin, universLTStdCn }
