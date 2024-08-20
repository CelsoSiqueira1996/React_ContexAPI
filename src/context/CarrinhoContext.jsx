import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { carrinhoReducer } from "@/reducers/carrinhoReducer";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export function CarrinhoProvider({ children }) {
    const [carrinho, dispatch] = useReducer(carrinhoReducer, []);
    const [quantidade, setQuantidade] = useState();
    const [valorTotal, setValorTotal] = useState();

    const { quantidadeTotalProdutos, valorTotalProdutos } = useMemo(() => {
        return carrinho.reduce((acc, produto) => {
            acc.quantidadeTotalProdutos += produto.quantidade;
            acc.valorTotalProdutos += produto.quantidade * produto.preco;
            return acc;
        }, {
            quantidadeTotalProdutos: 0,
            valorTotalProdutos: 0
        })
    }, [carrinho]);

    useEffect(() => {
        setValorTotal(valorTotalProdutos);
        setQuantidade(quantidadeTotalProdutos);
    });

    return (
        <CarrinhoContext.Provider value={{carrinho, dispatch, quantidade, valorTotal}}>
            {children}
        </CarrinhoContext.Provider>
    )
}