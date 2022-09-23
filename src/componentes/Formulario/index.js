import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {

    return (
        <section className="formulario">
            <form className="form">
                <h2 className="titulo">Preencha os cards para criar o card do aluno</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>

        </section>
    )

}

export default Formulario