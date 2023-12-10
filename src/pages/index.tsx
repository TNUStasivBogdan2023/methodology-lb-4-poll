import * as React from "react"
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form"
import { clsx } from "clsx";
import { questions } from "@/data/questions";

type FormData = {
  answers: string[]
}

const usePollModel = () => {
  const ID = "POLL_ID";
  const [result, setResult] = useState(typeof window !== "undefined" ? window.localStorage.getItem(ID) : null);

  return [
    result,
    (value: string | null) => {
      //@ts-ignore: default typing does not make sense here
      window.localStorage.setItem(ID, value)
      setResult(value ?? null);
    }
  ] as const;
}


export default function Index() {
  const { handleSubmit, register, formState } = useForm<FormData>()
  const [result, setResult] = usePollModel();

  const onSubmit = useCallback(() => {
    setResult("DONE");
  }, []);

  return (
    <div className="w-[1024px] mx-auto pt-8">
      {result === "DONE" && result !== null && (
        <>
          <h1 className="text-3xl font-bold">Дакуємо вам за увагу!</h1>
        </>
      )}

      {result === null && result !== "DONE" && (
        <>
          <h1 className="text-3xl font-bold mb-8">Опитування</h1>
          <form className="pb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-12 mb-4">
              {questions.map((question, index) => (
                <div className={clsx(
                  formState.errors.answers?.[index]?.type === "required" && "text-red-600")
                }>
                  <h2 className="text-lg font-bold mb-2">{question.title}</h2>
                  <fieldset>
                    <ul className="space-y-2">
                      {question.answers.map(answer => (
                        <li
                          className={clsx("flex items-center space-x-3")}
                        >
                          <input
                            type="radio"
                            className="radio-sm"
                            value={answer.value}
                            {...register(`answers.${index}`, { required: true })}
                          />
                          <label>{answer.label}</label>
                        </li>
                      ))}
                    </ul>
                  </fieldset>
                </div>
              ))}
            </div>
            <button type="submit" className="btn btn-primary btn-sm">Обробити</button>
          </form>
        </>
      )}
    </div>
  );
}
