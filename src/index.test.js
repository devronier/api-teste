const request = require("supertest");
const { app } = require("./app");

describe("Testa a index", () => {
  // test("Testa aplicar desconto em 100", async () => {
  //   const resposta = await fetch("http://localhost:8080/");
  //   const texto = await resposta.text();
  //   expect(texto).toBe("hello");
  // });

  test("Testar se o cadastro de user funciona", async () => {
    const resposta = await request(app).post("/users").send({
      nome: "Ronier",
      email: "ronier@email.com",
      senha: "12345678",
    });

    expect(resposta.status).toBe(201);
  });

  test("Testar se vai dar conflito (409) ao enviar senha menor que 8 digitos", async () => {
    const resposta = await request(app).post("/users").send({
      nome: "Ronier",
      email: "ronier@email.com",
      senha: "1234567",
    });

    expect(resposta.status).toBe(400);
  });
});
