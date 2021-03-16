/* eslint-disable import/no-anonymous-default-export */
const DEV = process.env.NODE_ENV !== 'production';

export default{
    DEV,
	BASE_URL: DEV ? 'csma.pigeonbolt.com' : 'api.pigeonbolt.com',
    SECURED: 's'
}