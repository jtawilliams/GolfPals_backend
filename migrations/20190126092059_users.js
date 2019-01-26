
exports.up = function(knex, Promise) {
return knex.schema.createTable('users', (user) => {
	user.increments('id')
	user.string('first_name')
	user.string('last_name')
	user.string('username')
	user.string('email')
	user.string('password')
	user.integer('phone_number')
	user.string('user_photo')


  })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users')
};
