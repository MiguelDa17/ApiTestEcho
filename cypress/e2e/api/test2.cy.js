describe('API Test - /qa/test2', () => {
    it('Validar status code, response body y headers en caso de error', () => {
      cy.request({
        method: 'GET',
        url: 'https://echo-serv.tbxnet.com/v1/qa/test2',
        failOnStatusCode: false // ⚠️ Esto evita que Cypress falle automáticamente en códigos de error
      }).then((response) => {
        // ✅ Validar Status Code 500
        expect(response.status).to.eq(500);
  
        // ✅ Validar Response Body (estructura esperada en caso de error)
        expect(response.body).to.have.property('code', 'SYS-ERR');
        expect(response.body).to.have.property('message', 'An Error');
        expect(response.body).to.have.property('details', 'An Error');
        expect(response.body).to.have.property('status', 500);
  
        // ✅ Validar Headers
        expect(response.headers).to.have.property('content-type').and.include('application/json');
      });
    });
  });
  