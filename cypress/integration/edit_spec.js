const typeBackspace = (number) => Array(number).fill().map(() => '{backspace}').join('');
const profile = {
	name: 'Malala Yousafzai',
	email: 'malala@gmail.com',
	url: 'https://scarredbeautiful.com/wp-content/uploads/2019/12/malala-yousafzai-blog.jpg'
};
describe('Edition flow', () => {
	it('it should update successfuly the profile information', function() {
		cy.visit('http://localhost:3000');
		cy.get('.edit-button').click();
		cy.get('.form-field-name').type(typeBackspace(20)).type(profile.name);
		cy.get('.form-field-email').type(typeBackspace(20)).type(profile.email);
		cy.get('.form-field-url').type(typeBackspace(200)).type(profile.url);
		cy.viewport(350, 750);
		cy.get('.button-form-save').click();
		cy.get('.feed-profile-name').contains(profile.name);
		cy.get('.feed-profile-email').contains(profile.email);
	});
});
