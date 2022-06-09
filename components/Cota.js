import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Cota(props){
  return (
    <>
      <Text>Compra: {props.data.bid}</Text>
	  <Text>Venda: {props.data.ask}</Text>
	  <Text>Variação: {props.data.varBid}</Text>
	  <Text>Maximo: {props.data.high}</Text>
	  <Text>Minimo: {props.data.low}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  
});