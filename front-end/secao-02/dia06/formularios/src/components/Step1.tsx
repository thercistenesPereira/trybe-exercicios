type  Step1Props= {
  nextStep: () => void;
}

function Step1( { nextStep }: Step1Props) {
  return (
    <div>
      <div>
        <h2>Bem Vindo</h2>
        <p>Seja bem vindo ao formulários de várias etapas</p>
        <button type='button' onClick={nextStep}>Próxima Etapa</button>
      </div>
    </div>
  )
}

export default Step1
