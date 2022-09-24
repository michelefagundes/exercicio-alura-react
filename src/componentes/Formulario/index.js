import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times = [
        '',
        'Programação',
        'Front-End',
        'Data-science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

        const aoSalvar = (evento) => {
            evento.preventDefault ()
            console.log('Form foi submetido')
        }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2 className="titulo">Preencha os cards para criar o card do aluno</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao texto="Criar Card"/>
            </form>

        </section>
    )

}

export default Formulario