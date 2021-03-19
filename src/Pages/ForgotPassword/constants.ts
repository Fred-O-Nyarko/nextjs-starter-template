import { IParticlesParams } from "react-particles-js";

/* eslint-disable import/no-anonymous-default-export */
const DEV = process.env.NODE_ENV !== 'production';

export default{
    DEV,
	BASE_URL: DEV ? 'csma.pigeonbolt.com' : 'api.pigeonbolt.com',
	FORGOT_PASSWORD_URL: DEV ? `http://localhost:${window.location.port}/forgot-password` : 'https://pigeonbolt.com/forgot-password',
	RESET_PASSWORD_URL: DEV ? `http://localhost:${window.location.port}/reset-password` : 'https://pigeonbolt.com/reset-password',
	SECURED: 's',
    PARTICLES: {
		particles: {
			number: {
				value: 12,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			line_linked: {
				enable: false,
			},
			move: {
				speed: 3,
				out_mode: 'out',
			},
			// shape: {
			// 	type: ['image', 'circle'],
			// 	image: [
			// 		{
			// 			src: 'https://svgshare.com/i/TTK.svg',
			// 			height: 20,
			// 			width: 23,
			// 		},
			// 		{
			// 			src: '../_shared/assets/icons/apple.svg',
			// 			height: 20,
			// 			width: 20,
			// 		},
			// 		{
			// 			src: '/code.b3b4c4f4.png',
			// 			height: 20,
			// 			width: 20,
			// 		},
			// 		{
			// 			src: '/react.cd2ab268.svg',
			// 			height: 20,
			// 			width: 23,
			// 		},
			// 		{
			// 			src: '/k8s.2d579d24.svg',
			// 			height: 20,
			// 			width: 20,
			// 		},
			// 		{
			// 			src: '/code.b3b4c4f4.png',
			// 			height: 20,
			// 			width: 20,
			// 		},
			// 	],
			// },
			color: {
				value: '#CCC',
			},
			size: {
				value: 30,
				random: false,
				anim: {
					enable: true,
					speed: 4,
					size_min: 10,
					sync: false,
				},
			},
		},
		retina_detect: true,
	} as IParticlesParams,
}