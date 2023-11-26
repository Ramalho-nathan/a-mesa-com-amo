// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TipoProduto = {
  "PRATO": "PRATO",
  "SOBREMESA": "SOBREMESA",
  "BEBIDA": "BEBIDA"
};

const { Cadastro, Login, Usuario, Produto } = initSchema(schema);

export {
  Cadastro,
  Login,
  Usuario,
  Produto,
  TipoProduto
};