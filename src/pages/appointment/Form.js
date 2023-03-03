import {
  LargeContainerFlex,
  FlexRowCenter,
  Button,
} from "components/CommonStyles";
import AppointmentSuscription from "pages/appointment/form/AppointmentSuscription";
import Stepper from "pages/appointment/form/Stepper";
import DateAndTimeSelector from "pages/appointment/form/DateAndTimeSelector";
import { useState } from "react";

const Form = () => {
  const [step, setStep] = useState(0);

  const pets = [
    {
      label: "Perro/a",
      id: "1",
    },
    {
      label: "Gato/a",
      id: "2",
    },
    {
      label: "Otra",
      id: "3",
    },
  ];

  const servicesTypes = [
    {
      label: "Atención médica",
      id: "1",
    },
    {
      label: "Estética y aseo",
      id: "2",
    },
  ];

  const steps = [
    "Paso 1: Registra tus datos",
    "Paso 2: Selecciona una fecha y hora",
    "Su turno ha sido registrado",
  ];

  const nextHandler = () => {
    if (step < 2) {
      setStep(step + 1);
    } else setStep(0);
  };

  const children = [
    <AppointmentSuscription pets={pets} servicesTypes={servicesTypes} />,
    <DateAndTimeSelector />,
    <></>,
  ];

  return (
    <LargeContainerFlex className='sidePadding'>
      {children[step]}
      <FlexRowCenter className='bottomSpace'>
        <Button onClick={nextHandler}>
          {step < 1 ? "Siguiente" : step === 1 ? "Finalizar" : "Regresar"}
        </Button>
      </FlexRowCenter>
      <Stepper steps={steps} activeStep={step} />
    </LargeContainerFlex>
  );
};

export default Form;
