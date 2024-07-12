import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text,  View, Button, Image,ScrollView,} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const PilhaTelas = createNativeStackNavigator()

function PrimeiraTela({  navigation }) {    
    return (
        <View style={styles.container}>
            <View style={styles.tela}>
                <Text style={styles.titulo}>Bem Vindo ao Instituto Federal Catarinense</Text>
                <Button style={styles.botao}
                    title='Detalhes do Campus'
                    color="green"
                    onPress={() => navigation.navigate('Campus')}
                />
                <Button style={styles.botao}
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
        <ScrollView style={styles.container}>
            <View style={styles.tela}>
            <Text style={styles.titulo}>Instituto Federal Catarinense</Text>
            <Text style={styles.texto}>O Campus Ibirama do Instituto Federal Catarinense (IFC) é um espaço dedicado à educação, ciência e tecnologia na cidade de Ibirama, Santa Catarina. Com uma localização privilegiada na Rua Dr. Getúlio Vargas, o campus oferece cursos técnicos e superiores, promovendo o desenvolvimento acadêmico e a inovação na região. Além disso, o IFC Campus Ibirama contribui para a formação de profissionais qualificados e engajados com as demandas da sociedade.</Text>
            <Image
          style={styles.imagem}
          source={require('./Imagens/Ifc.jpg')}
        />
            <Button style={styles.botao}
                title='Voltar'
                color="green"
                onPress={function(){ navigation.goBack() }}
            />
            </View>
        </ScrollView>
    )
}

function Cursos( { navigation} ){
    return (
        <View style={styles.container}>
            <View style={styles.tela}>
            <Text style={styles.texto}>Os cursos técnicos integrados ao ensino médio permitem que os estudantes realizem suas atividades acadêmicas de forma integrada, ou seja, eles estudam tanto as disciplinas do ensino médio quanto as matérias técnicas relacionadas à área escolhida. Os alunos saem desses cursos com uma base sólida tanto no ensino médio quanto na formação técnica, o que os torna mais preparados para ingressar no mercado de trabalho ou continuar seus estudos em nível superior.</Text>
            <Button style={styles.botao}
                title='Vestuario'
                color="green"
                onPress={function(){
                    navigation.navigate('TelaCursos',{
                        nome:"Vestuario",
                        descricao: "O Curso técnico em Vestuário prepara os alunos para atuarem na indústria têxtil e de confecção de vestuário. Durante o curso, eles aprendem sobre modelagem, corte, costura, qualidade do produto e supervisão do processo de confecção. Os egressos desse curso têm um amplo mercado de trabalho, podendo trabalhar em empresas de moda, confecções e ateliês.",
                        imagemCurso: require('./Imagens/Veste.jpg'),
                        cabecalho:["Materia", "Horas", "Professores"],
                        dados: [
                            ["Desenho de Moda e Ilustração", 60, "Francisleth"],
                            ['História do Vestuário', 60, 'Iabela'],
                            ['Projeto Integrador I', 60 , 'Isanela'],
                            ['Tecnologia da Costura I', 60, 'Jonathan'],
                            ['Tecnologia Têxtil', 60 ,'Ana Silvia']
                        ],
                        dados2: [
                            ["Desenho Técnico de Vetuário e Têxtil",  60, "Márcio"],
                            ["Modelagem Plana e Tecnologia", 120, 'Márcio'],
                            ['Tecnologia e Métodos no Processo Produtivo', 60, 'Isabela'],
                            ['Projeto Integrador II', 60, 'Ana Silva'],
                            ['tecnologia da Costura II', 60, 'Jonathan']
                        ],
                        dados3:[
                            ["Administração e Empreendedorismo", 60, 'Jetter'],
                            ['Beneficiamento Têxtil', 120, 'Ana Silvia'],
                            ["Projeto Integrador III", 60 , 'Franscilth'],
                            ["Desenvolvimento de Produto Sutentável", 60, 'Ana Silvia'],
                            ["Higiene e Segurança do Trabalho", 60, 'Márcio'],
                            ["Laboratório de Moulage e Confecção", 60, 'Isabela']
                        ],
                    })
                }}
            />
            <Button style={styles.botao}
                title='Administração'
                color="green"
                onPress={function(){
                    navigation.navigate('TelaCursos',{
                        nome:"Administração",
                        descricao: "O curso técnico em Administração prepara os estudantes para atuar em diversas áreas, como gestão, finanças, recursos humanos e marketing. Durante o curso, os alunos adquirem conhecimentos em administração de empresas, contabilidade, empreendedorismo e legislação. Com essa formação, os egressos estarão aptos a trabalhar tanto em empresas públicas quanto privadas, além de poderem empreender e gerenciar seus próprios negócios.",
                        imagemCurso: require('./Imagens/Administração.png'),
                        cabecalho:["Materia", "Horas", "Professores"],
                        dados: [
                            ["Economia", 60, "Kopelke"],
                            ['Fundamentos da Administração', 60, 'Jeter'],
                            ['Gestão de Pessoas', 60 , 'Kopelke'],
                            ['Gestão de serviços', 60, 'Jeter'],
                            ['Projeto Integrador', 60 ,'Jeter']
                        ],
                        dados2: [
                            ["Estatística e Matemática Financeira",  60, "Tiago Araujo"],
                            ["Marketing", 60, 'Paulo'],
                            ['Planejamento Estrátegico', 60, 'Paulo'],
                            ['Gestão da Produção Logíca', 90, 'kopelke'],
                            ['Projeto Integrador II', 60, 'Jeter']
                        ],
                        dados3:[
                            ["Administração da Tecnologia da Informação", 60, 'Paulo'],
                            ['Administração Financeira', 90, 'Tiago Araujo'],
                            ["Projeto Integrador III", 60 , 'Jeter'],
                            ["Responsabilidade Social Emprearial", 60 , 'Kopelke']
                        ]
                    })
                }}
            />
            <Button style={styles.botao}
                title='Informática'
                color="green"
                onPress={function(){
                    navigation.navigate('TelaCursos',{
                        nome:"Técnico em Informática",
                        descricao: "Na área de Informática, o curso técnico capacita os estudantes para atuarem no campo da tecnologia da informação. Durante o curso, eles aprendem sobre programação, redes, sistemas operacionais, banco de dados e desenvolvimento de software. Os profissionais formados nessa área podem trabalhar como programadores, analistas de suporte, administradores de redes e desenvolvedores de aplicativos.",
                        imagemCurso: require('./Imagens/Informatica.jpg'),
                        cabecalho:["Materia", "Horas", "Professores"],
                        dados: [
                            ["Hardware e Sistemas Operacionais", 120, "Bruno Guilhen"],
                            ['Fundamentos da Informática', 60, 'Tiago Funk'],
                            ['Lógica de Programação', 120 , 'Eduardo Stahnke'],
                            ['Projeto Integrador I', 30, 'Rodrigo Nogueira'],
                            ['Desenvolvimento Web', 60 ,'Tiago Funk']
                        ],
                        dados2: [
                            ["Banco de Dados",  90, "Rodrigo Nogueira"],
                            ["Engenharia de Software I", 60, 'Tiago Funk'],
                            ['programação I', 120, 'Eduardo Stahnke'],
                            ['Projeto Integrador II', 30, 'Rodrigo Nogueira'],
                            ['Redes', 60, 'Bruno Guilhen']
                        ],
                        dados3:[
                            ["Emprededorismo", 60, 'Tiago Araujo'],
                            ['Programação II', 120, 'Tiago Funk'],
                            ["Projeto Integrador III", 60 , 'Rodrigo Nogueira']
                        ],
                    })
                }}
            />
            <Button style={styles.botao}
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
        
         <ScrollView style={styles.container}>
            <View style={styles.tela}>
            
            <Image style={styles.imagem}source={route.params.imagemCurso}/>
            <Text style={styles.texto}>{route.params.descricao}</Text>
            <Text style={styles.tituloMenor}>Materias</Text>
            <Text style={styles.tituloMenor}>Primeiro Ano</Text>
            <Table borderStyle={{borderWidth: 2, borderBlockColor: 'black' }}>
                <Row data={route.params.cabecalho} textStyle={{textAlign:"center"}}></Row>
                <Rows data={route.params.dados} textStyle={{textAlign:"center"}}></Rows>
            </Table>

            <Text style={styles.tituloMenor}>Segundo Ano</Text>
            <Table borderStyle={{borderWidth: 2, borderBlockColor: 'black'}}>
                <Row data={route.params.cabecalho}></Row>
                <Rows data={route.params.dados2}></Rows>
            </Table>
            <Text style={styles.tituloMenor}>Terceiro Ano</Text>
            <Table borderStyle={{borderWidth: 2, borderBlockColor: 'black'}}>
                <Row data={route.params.cabecalho}></Row>
                <Rows data={route.params.dados3}></Rows>
            </Table>
            <Button 
                title='Voltar'
                color="green"
                
                onPress={function(){
                    navigation.navigate('Cursos')
                }}
                
            />
            </View>
            

        </ScrollView>
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
    width: '100%',
    height: '300%'
  },
  titulo: {
    marginTop: '10%',
    fontSize: 25,
    textAlign: 'center'
  },
  tituloMenor: {
    fontSize: 20
  },
  texto: {
    marginTop: '10%',
    fontSize: 15
  },
imagem: {
  marginTop: '8%',
  width: '100%',
  height: 100,
  resizeMode:('center')
},
  tela: {
    gap: 10,
    flexDirection: "column",
    flex: 1,
    marginLeft:'10%',
    width: '80%',
  },
  botao:{
    width: '50%'
  }
});