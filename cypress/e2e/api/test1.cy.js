describe('API Test - /v1/qa/test1', () => {
    it('Validar status code, tiempo de respuesta, body y headers', () => {
      cy.request({
        method: 'GET',
        url: 'https://echo-serv.tbxnet.com/v1/qa/test1', // ✅ URL corregida
        headers: {
          'Accept': 'application/json' // ✅ Header correcto según la API
        }
      }).then((response) => {
        // ✅ Validar Status Code
        expect(response.status).to.eq(200);
  
        // ✅ Validar Response Time
        expect(response.duration).to.be.lessThan(3000);
  
        // ✅ Validar Response Body (Estructura esperada)
        expect(response.body).to.have.property('ok', true);
        expect(response.body).to.have.property('date').that.is.a('string');
  
        // ✅ Validar Headers
        expect(response.headers).to.have.property('content-type').and.include('application/json');
      });
    });
  });
  