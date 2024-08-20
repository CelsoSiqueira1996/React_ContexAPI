import { useContext } from "react";
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from "@/reducers/carrinhoReducer";
import { CarrinhoContext } from "@/context/CarrinhoContext";

function addProdutoAction(novoProduto) {
  return {
    type: ADD_PRODUTO,
    payload: novoProduto
  }
}

function removeProdutoAction(produtoId) {
  return {
    type: REMOVE_PRODUTO,
    payload: produtoId
  }
}

function updateQuantidadeAction(quantidade, produtoId) {
  return {
    type: UPDATE_QUANTIDADE,
    payload: {
      quantidade,
      produtoId
    }
  }
}

export function useCarrinhoContext() {
  const { carrinho, dispatch, valorTotal, quantidade } = useContext(CarrinhoContext);

  function adicionarProduto(novoProduto) {
    dispatch(addProdutoAction(novoProduto));
  }

  function removerProduto(id) {
    const produto = carrinho.find((produto) => produto.id === id);
    if(produto && produto.quantidade > 1) {
      dispatch(updateQuantidadeAction(produto.quantidade - 1, id))
    } else {
      dispatch(removeProdutoAction(id));
    }
  }

  function removerProdutoCarrinho(id) {
    dispatch(removeProdutoAction(id));
  }

  return {
    carrinho,
    valorTotal,
    quantidade,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho
  }
}