import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe('1 - Testando Componentes Renderizados', () => {
  test('1-1 Renderiza o texto: Calcule o Valor do Seu Plano', () => {
    render(<App />);
    const textElement = screen.getByText(/Calcule o Valor do Seu Plano/i);
    expect(textElement).toBeInTheDocument();
  });

  test('1-2 Renderiza os campos: Plano - Origem - Destino - Minutos', () => {
    render(<App />);
    const listElement = [];
    listElement.push(screen.getByDisplayValue('--Selecione um Plano--'));
    listElement.push(screen.getByDisplayValue('--De Onde--'));
    listElement.push(screen.getByDisplayValue('--Para Onde--'));
    listElement.push(screen.getByDisplayValue('0'));
    
    expect(listElement[3].nodeName).toEqual("INPUT");    
    expect(listElement.length).toEqual(4);
  });

  test('1-3 Renderiza os campos: Preço com plano e Preço sem plano', () => {
    render(<App />);
    const listElement = [];
    listElement.push(screen.getByText('Com o Fale mais R$ 0.00'));
    listElement.push(screen.getByText('Sem o Fale Mais R$ 0.00'));
    
    expect(listElement.length).toEqual(2);
    expect(listElement[0].nodeName).toEqual("H1");
  });
});

describe('2 - Testando Componentes e Calculo do Preço', () => {

  test('2-1 Renderiza um Botão com texto: Calculr', () => {
    render(<App />);
    const Element = screen.getByText(/Calcular/i);
    
    expect(Element).toBeInTheDocument();
    expect(Element.tagName).toEqual("BUTTON")
  });

  test('2-2 Renderiza um Botão com texto: Calculr', () => {
    render(<App />);
    const Element = screen.getByText(/Calcular/i);
    
    expect(Element).toBeInTheDocument();
    expect(Element.tagName).toEqual("BUTTON")
  });

  test('2-3 Testando o Calcuo', () => {
    render(<App />);
    const planos = screen.queryAllByText(/o Fale Mais/i);
        
    expect(planos[0]).toBeInTheDocument();
    expect(planos[1]).toBeInTheDocument();
  });

  

})
