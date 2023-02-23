import React from "react";
import { DescriptionArea } from "../style/DescriptionArea";
import { InputInfos } from "../style/InputInfos";
import { LabelInfos } from "../style/LabelInfos";
import { SelectType } from "../style/SelectType";
import { SFormExpense } from "../style/SFormExpenses";

function FormExpenses() {
  return (
    <SFormExpense>
      <LabelInfos htmlFor="">
        Nome da despesa
        <InputInfos type="text" />
      </LabelInfos>
      <LabelInfos htmlFor="">
        Tipo
        <SelectType>
          <option value="">Selecione</option>
          <option value="Conta">Conta</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Comida">Comida</option>
          <option value="Lazer">Lazer</option>
          <option value="Outro">Outro</option>
        </SelectType>
      </LabelInfos>
      <LabelInfos htmlFor="">
        Descrição
        <DescriptionArea />
      </LabelInfos>
      <LabelInfos htmlFor="">
        Valor
        <InputInfos type={"number"} min={0} />
      </LabelInfos>
      <LabelInfos htmlFor="">
        Data da despesa
        <InputInfos type={"date"} />
      </LabelInfos>
    </SFormExpense>
  );
}

export default FormExpenses;
