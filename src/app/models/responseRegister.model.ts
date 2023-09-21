export interface ResponseRegister {
  user:  {
		first_name: string,
		last_name: string,
		email: string,
		country_code: string,
		role: string,
		state: string,
		city: string,
		address: string,
		neighborhood: string,
		address_number: string,
		avatar_url: string,
		bio: string,
		curriculum_url: string,
		id: number
	},
	message: string
}
