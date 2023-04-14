import { StyleSheet, View } from 'react-native';
import Item from './src/Item';

const listaItens = [
  {
    nomeItem: 'Espada Big Bertha ',
    descricao: 'Ataque Básico - Causa 20 de dano',
    urlImgItem: 'https://lh3.googleusercontent.com/VpAL-JkvH6QvQeLwCQNijpEoGK_44KCIy9exgAuLgtzs4Ew6DwyzOSwbIDhkqe2Yj_SNxKwmcnR-whvB6hKZbQ'
  },

  {
    nomeItem: 'Kraken Slayer',
    descricao: 'Ataque Básico - Causa 200 de dano',
    urlImgItem: 'https://leagueofitems.com/images/items/256/6672.webp'
  },

  {
    nomeItem: 'Cajado Aquafluxo',
    descricao: 'Ataque Mágico - Causa 30 de dano básico + 280 de dano mágico',
    urlImgItem: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt86c2796ec6f37bee/5fa1f01f545bdb56ce49341f/3744_Enchanter_T3_StaffOfFlowingWater.png'
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      <Item item={listaItens[0]}/>
      <Item item={listaItens[1]}/>
      <Item item={listaItens[2]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
