import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text,  View, Button, Image,ScrollView,} from 'react-native';

const PilhaTelas = createNativeStackNavigator()

function PrimeiraTela({  navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.tela}>
                <Text style={styles.titulo}>Bem Vindo ao Instituto Federal Catarinense</Text>
                <Button
                    title='Detalhes do Campus'
                    color="green"
                    onPress={() => navigation.navigate('Campus')}
                />
                <Button
                    title='Cursos'
                    color="green"
                    onPress={() => navigation.navigate('Cursos')}
                />
            </View>
        </View>
    );
}

function Campus( { navigation} ){
    return (
        <View style={styles.container}>
            <View style={styles.tela}>
            <Text style={styles.titulo}>Instituto Federal Catarinense</Text>
            <Text style={styles.texto}>O Campus Ibirama do Instituto Federal Catarinense (IFC) é um espaço dedicado à educação, ciência e tecnologia na cidade de Ibirama, Santa Catarina. Com uma localização privilegiada na Rua Dr. Getúlio Vargas, o campus oferece cursos técnicos e superiores, promovendo o desenvolvimento acadêmico e a inovação na região. Além disso, o IFC Campus Ibirama contribui para a formação de profissionais qualificados e engajados com as demandas da sociedade.</Text>
            <Image
          style={styles.imagem}
          source={require('./Imagens/Ifc.jpg')}
        />
            <Button
                title='Voltar'
                color="green"
                onPress={function(){ navigation.goBack() }}
            />
            </View>
        </View>
    )
}

function Cursos( { navigation} ){
    return (
        <View style={styles.container}>
            <View style={styles.tela}>
            <Text style={styles.texto}>Os cursos técnicos integrados ao ensino médio permitem que os estudantes realizem suas atividades acadêmicas de forma integrada, ou seja, eles estudam tanto as disciplinas do ensino médio quanto as matérias técnicas relacionadas à área escolhida. Os alunos saem desses cursos com uma base sólida tanto no ensino médio quanto na formação técnica, o que os torna mais preparados para ingressar no mercado de trabalho ou continuar seus estudos em nível superior.</Text>
            <Button
                title='Vestuario'
                color="green"
                onPress={function(){
                    navigation.navigate('TelaCursos',{
                        nome:"Vestuario",
                        descricao: "Já o curso técnico em Vestuário prepara os alunos para atuarem na indústria têxtil e de confecção de vestuário. Durante o curso, eles aprendem sobre modelagem, corte, costura, qualidade do produto e supervisão do processo de confecção. Os egressos desse curso têm um amplo mercado de trabalho, podendo trabalhar em empresas de moda, confecções e ateliês."
                    })
                }}
            />
            <Button
                title='Administração'
                color="green"
                onPress={function(){
                    navigation.navigate('TelaCursos',{
                        nome:"Administração",
                        descricao: "O curso técnico em Administração prepara os estudantes para atuar em diversas áreas, como gestão, finanças, recursos humanos e marketing. Durante o curso, os alunos adquirem conhecimentos em administração de empresas, contabilidade, empreendedorismo e legislação. Com essa formação, os egressos estarão aptos a trabalhar tanto em empresas públicas quanto privadas, além de poderem empreender e gerenciar seus próprios negócios."
                    })
                }}
            />
            <Button
                title='Informática'
                color="green"
                onPress={function(){
                    navigation.navigate('TelaCursos',{
                        nome:"Técnico em Informática",
                        descricao: "Na área de Informática, o curso técnico capacita os estudantes para atuarem no campo da tecnologia da informação. Durante o curso, eles aprendem sobre programação, redes, sistemas operacionais, banco de dados e desenvolvimento de software. Os profissionais formados nessa área podem trabalhar como programadores, analistas de suporte, administradores de redes e desenvolvedores de aplicativos.",
                        materias:  "Fundamentos da Informática, Hardware e Sistemas Operacionais, Lógica de Programação, Projeto Integrador I, Desenvolvimento Web, Banco de Dados, Engenharia de Software I, Programação I, Projeto Integrador II, Redes, Empreendedorismo, Programação II, Projeto Integrador III, Administração de Redes ",             
                        imagemCurso: require('./Imagens/Informatica.jpg')
                    })
                }}
            />
            <Button
                title='Voltar'
                color="green"
                onPress={function(){
                    navigation.navigate('PrimeiraTela')
                }}
            />
        </View>
        </View>
    )
}

function TelaCursos( {route, navigation} ){
    return (
         <View style={styles.container}>
            
            <View style={styles.tela}>
            <Text style={styles.titulo}>{route.params.nome}</Text>
            <Text style={styles.texto}>{route.params.descricao}</Text>
            <Text style={styles.tituloMenor}>Materias:</Text>
            <Text style={styles.texto}>{route.params.materias}</Text>
            <Text style={styles.tituloMenor}>Professores:</Text>
            <Image style={styles.imagem}source={route.params.imagemCurso}/>
            
            <Button
                title='Voltar'
                color="green"
                onPress={function(){
                    navigation.navigate('Cursos')
                }}
            />
            </View>
            
        </View>
    )
}

export default function App() {
  
  return (
    <NavigationContainer>
        <PilhaTelas.Navigator initialRouteName='PrimeiraTela'>
            <PilhaTelas.Screen
                name="PrimeiraTela"
                component={PrimeiraTela}
                options={{title:"Tela Inicial"}}
            />
            <PilhaTelas.Screen
                name="Campus"
                component={Campus}
                options={{title:"Tela Campus"}}
            />
            <PilhaTelas.Screen
                name="Cursos"
                component={Cursos}
                options={{title:"Tela Cursos"}}
            />
            <PilhaTelas.Screen
                name="TelaCursos"
                component={TelaCursos}
                options={{title:"Curso"}}
            />
        </PilhaTelas.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    width: '100%',

  },
  titulo: {
    marginTop: '10%',
    fontSize: 25,
     textAlign: 'center'
  },
  tituloMenor: {
    fontSize: 20,
     textAlign: 'center'
  },
  texto: {
    marginTop: '10%',
    fontSize: 15
  },
imagem: {
  marginTop: '15%',
  width: '100%',
  height: '40%'
},
  tela: {
    gap: 10,
    flexDirection: "column",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    width: '80%',
  }
});