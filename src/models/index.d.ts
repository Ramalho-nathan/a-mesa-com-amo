import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum TipoProduto {
  PRATO = "PRATO",
  SOBREMESA = "SOBREMESA",
  BEBIDA = "BEBIDA"
}



type EagerCadastro = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cadastro, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly senha: number;
  readonly endereco: string;
  readonly Usuario?: Usuario | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cadastroUsuarioId?: string | null;
}

type LazyCadastro = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cadastro, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly senha: number;
  readonly endereco: string;
  readonly Usuario: AsyncItem<Usuario | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cadastroUsuarioId?: string | null;
}

export declare type Cadastro = LazyLoading extends LazyLoadingDisabled ? EagerCadastro : LazyCadastro

export declare const Cadastro: (new (init: ModelInit<Cadastro>) => Cadastro) & {
  copyOf(source: Cadastro, mutator: (draft: MutableModel<Cadastro>) => MutableModel<Cadastro> | void): Cadastro;
}

type EagerLogin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Login, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly senha: number;
  readonly Usuario?: Usuario | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly loginUsuarioId?: string | null;
}

type LazyLogin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Login, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly senha: number;
  readonly Usuario: AsyncItem<Usuario | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly loginUsuarioId?: string | null;
}

export declare type Login = LazyLoading extends LazyLoadingDisabled ? EagerLogin : LazyLogin

export declare const Login: (new (init: ModelInit<Login>) => Login) & {
  copyOf(source: Login, mutator: (draft: MutableModel<Login>) => MutableModel<Login> | void): Login;
}

type EagerUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly Senha: number;
  readonly endereco: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly Senha: number;
  readonly endereco: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Usuario = LazyLoading extends LazyLoadingDisabled ? EagerUsuario : LazyUsuario

export declare const Usuario: (new (init: ModelInit<Usuario>) => Usuario) & {
  copyOf(source: Usuario, mutator: (draft: MutableModel<Usuario>) => MutableModel<Usuario> | void): Usuario;
}

type EagerProduto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Produto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly value: number;
  readonly tipo: TipoProduto | keyof typeof TipoProduto;
  readonly photo: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Produto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly value: number;
  readonly tipo: TipoProduto | keyof typeof TipoProduto;
  readonly photo: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Produto = LazyLoading extends LazyLoadingDisabled ? EagerProduto : LazyProduto

export declare const Produto: (new (init: ModelInit<Produto>) => Produto) & {
  copyOf(source: Produto, mutator: (draft: MutableModel<Produto>) => MutableModel<Produto> | void): Produto;
}