import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");
  const [corClassificacao, setCorClassificacao] = useState("black");
  const [erro, setErro] = useState("");

  function classificarIMC(valorIMC) {

    if (valorIMC < 18.5) {
      return { texto: "Abaixo do Peso", cor: "#F5B041" };
    }
    else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
      return { texto: "Peso Normal", cor: "#2ECC71" };
    }
    else if (valorIMC >= 25 && valorIMC <= 29.9) {
      return { texto: "Sobrepeso", cor: "#D4AC0D" };
    }
    else if (valorIMC >= 30 && valorIMC <= 34.9) {
      return { texto: "Obesidade Grau I", cor: "#EB984E" };
    }
    else if (valorIMC >= 35 && valorIMC <= 39.9) {
      return { texto: "Obesidade Grau II", cor: "#E74C3C" };
    }
    else {
      return { texto: "Obesidade Grau III", cor: "#922B21" };
    }
  }

  function calcularIMC() {

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum || alturaNum <= 0) {
      setErro("Digite valores válidos para peso e altura.");
      setImc(null);
      setClassificacao("");
      return;
    }

    setErro("");

    const valorIMC = pesoNum / (alturaNum * alturaNum);
    const imcFormatado = valorIMC.toFixed(2);

    const resultado = classificarIMC(valorIMC);

    setImc(imcFormatado);
    setClassificacao(resultado.texto);
    setCorClassificacao(resultado.cor);
  }

  function limparCampos() {
    setPeso("");
    setAltura("");
    setImc(null);
    setClassificacao("");
    setErro("");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <View style={styles.botoes}>
        <Button title="Calcular IMC" onPress={calcularIMC} />
      </View>

      <View style={styles.botoes}>
        <Button title="Limpar" onPress={limparCampos} color="gray" />
      </View>

      {erro !== "" && (
        <Text style={styles.erro}>{erro}</Text>
      )}

      {imc && (
        <View style={styles.resultado}>
          <Text style={styles.textoResultado}>IMC: {imc}</Text>
          <Text style={[styles.classificacao, { color: corClassificacao }]}>
            {classificacao}
          </Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F4F6F7"
  },

  titulo: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "white"
  },

  botoes: {
    marginBottom: 10
  },

  erro: {
    color: "red",
    textAlign: "center",
    marginTop: 10
  },

  resultado: {
    marginTop: 20,
    alignItems: "center"
  },

  textoResultado: {
    fontSize: 22
  },

  classificacao: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5
  }

});