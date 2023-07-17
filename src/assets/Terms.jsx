import { Link } from 'react-router-dom';

function Terms() {
    return (
        <div className="border-container">
            <div className="term-container">
                <h2>Termos de Uso</h2>
                <p>
                    Bem-vindo(a) aos Termos de Uso do nosso website/aplicativo! A leitura cuidadosa e a compreensão desses termos são essenciais antes de utilizar nossos serviços. Ao acessar ou utilizar nosso website/aplicativo, você concorda em cumprir integralmente com estes Termos de Uso. Caso não concorde com alguma disposição aqui presente, pedimos gentilmente que interrompa o uso de nossos serviços.
                    <br /> <br />
                    1. Direitos de Propriedade:
                    Todos os conteúdos presentes no website/aplicativo, incluindo textos, gráficos, logotipos, ícones, imagens, vídeos, áudios, compilações de dados e software, são de propriedade exclusiva nossa ou de nossos parceiros e estão protegidos pelas leis de direitos autorais, marcas e outras leis aplicáveis.
                    <br /> <br />
                    2. Uso Permitido:
                    Ao acessar nosso website/aplicativo, é concedida uma licença limitada, não exclusiva e não transferível para visualizar, baixar e imprimir o conteúdo para uso pessoal e não comercial. Você concorda em não reproduzir, distribuir, modificar, copiar, exibir publicamente, transmitir, vender, licenciar ou explorar qualquer conteúdo do nosso website/aplicativo para qualquer finalidade sem o prévio consentimento escrito por nós.
                    <br /> <br />
                    3. Restrições de Uso:
                    Você se compromete a não utilizar nosso website/aplicativo para fins ilegais ou não autorizados, incluindo, mas não se limitando a:
                    <br /> <br />
                    - Violar qualquer lei, regulamento ou direito de terceiros;
                    <br />
                    - Disseminar conteúdo difamatório, obsceno, ofensivo ou ameaçador;
                    <br />
                    - Acessar informações ou áreas restritas sem a devida autorização;
                    <br />
                    - Transmitir vírus, malware ou qualquer código prejudicial;
                    <br />
                    - Interferir no funcionamento adequado do website/aplicativo;
                    <br />
                    - Utilizar técnicas de mineração de dados, raspagem ou qualquer método similar para coletar informações ou conteúdos sem autorização.
                    <br />
                    4. Disponibilidade do Serviço:
                    Envidamos nossos melhores esforços para garantir a disponibilidade contínua e confiável do nosso website/aplicativo. No entanto, não nos responsabilizamos por interrupções ou falhas temporárias no acesso causadas por eventos fora de nosso controle.
                    <br /> <br />
                    5. Privacidade:
                    Respeitamos a sua privacidade e protegemos os seus dados pessoais de acordo com nossa Política de Privacidade, que está disponível [inserir link para a política de privacidade]. Recomendamos que você leia a política antes de utilizar nossos serviços.
                    <br /> <br />
                    6. Limitação de Responsabilidade:
                    Não seremos responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, punitivos ou consequenciais decorrentes do uso ou incapacidade de uso do nosso website/aplicativo, mesmo que tenhamos sido informados sobre a possibilidade de tais danos.
                    <br /> <br />
                    7. Modificações destes Termos de Uso:
                    Reservamo-nos o direito de modificar ou atualizar estes Termos de Uso a qualquer momento, sem aviso prévio. É responsabilidade do usuário revisar esta página regularmente para se manter informado sobre quaisquer alterações. O uso continuado do nosso website/aplicativo após a publicação das modificações constitui aceitação dos termos modificados.
                    <br /> <br />
                    8. Lei Aplicável:
                    Estes Termos de Uso serão regidos e interpretados de acordo com as leis do [inserir país], sem levar em consideração os princípios de conflito de leis.
                    <br /> <br />
                    Caso tenha alguma dúvida ou preocupação em relação a estes Termos de Uso, entre em contato conosco através dos canais de suporte fornecidos em nosso website/aplicativo.
                </p>
                <Link to ="/">
                <button className='accept-button'>Concordo e aceito todos os termos</button>
                </Link>
            </div>
        </div>
    )
}
export default Terms