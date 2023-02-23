import React, { useState } from "react";


function Form() {
    const [altura, setValorAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [imc, setIMC] = useState("");
    const [classificacao, setClassificacao] = useState("");

    const valorAltura = (altura) => {
        setValorAltura(altura.target.value);
    };

    const valorPeso = (peso) => {
        setPeso(peso.target.value);
    };

    const handleSubmit = (event) => {
    event.preventDefault();
        const imc = (peso / ((altura / 100) * (altura / 100))).toFixed(2);
        setIMC(imc);

        if (imc < 18.5) {
            setClassificacao("Abaixo do peso");
        } else if (imc >= 18.5 && imc < 25) {
            setClassificacao("Peso normal");
        } else if (imc >= 25 && imc < 30) {
            setClassificacao("Sobrepeso");
        } else if (imc >= 30 && imc < 35) {
            setClassificacao("Obesidade Grau I");
        } else if (imc >= 35 && imc < 40) {
            setClassificacao("Obesidade Grau II");
        } else {
            setClassificacao("Obesidade Grau III");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container">
            <h1>Calculadora de IMC</h1>
            <label>
                <strong>Altura (cm):</strong>
                <input type="tel" value={altura} onChange={valorAltura} />
            </label>
            <br />
            <label>
                <strong>Peso (kg):</strong>
                <input type="tel" value={peso} onChange={valorPeso} />
            </label>
            <br />
            <button type="submit">Calcular IMC</button>
            {imc && (
                <div>
                    <p>Seu IMC é {imc}</p>
                    <p>Sua classificação é {classificacao}</p>
                </div>
            )}
        </form>
    );
}

export default Form;