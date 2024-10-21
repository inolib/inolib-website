"use client";

import { reset, toTrimmed, useForm, valiForm, type SubmitHandler } from "@modular-forms/react";
import { useSignals } from "@preact/signals-react/runtime";
import { useCallback } from "react";
import * as v from "valibot";

import { Button } from "~/components/button";
import { CheckboxField, TextAreaField, TextInputField, ToggleField } from "~/components/form";
import { Link } from "~/components/link";

const schema = v.object({
  consent: v.literal(true, "Vous devez accepter notre politique de confidentialité."),
  email: v.pipe(
    v.string(),
    v.trim(),
    v.nonEmpty("Vous devez saisir votre adresse e-mail."),
    v.email("Adresse e-mail invalide."),
  ),
  firstName: v.pipe(v.string(), v.trim(), v.nonEmpty("Vous devez saisir votre prénom.")),
  interest: v.array(v.pipe(v.string(), v.trim())),
  lastName: v.pipe(v.string(), v.trim(), v.nonEmpty("Vous devez saisir votre nom de famille.")),
  message: v.pipe(v.string(), v.trim(), v.nonEmpty("Vous devez saisir votre message.")),
  phoneNumber: v.pipe(v.string(), v.trim(), v.nonEmpty("Vous devez saisir votre numéro de téléphone.")),
});

type Schema = v.InferInput<typeof schema>;

export const ContactForm = () => {
  useSignals();

  const [form, { Field, Form }] = useForm<Schema>({
    validate: valiForm(schema),
    validateOn: "submit",
    revalidateOn: "change",
  });

  const handleSubmit: SubmitHandler<Schema> = useCallback(
    async (values) => {
      console.log("values:", values);

      try {
        const response = await fetch("https://www.backend.inolib.fr/wp-json/custom-api/v2/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          console.error("error:", response.status);
        }

        const json = (await response.json()) as {};

        console.log("json:", json);

        reset(form);
      } catch (error) {
        console.error("error:", error);
      }
    },
    [form],
  );

  return (
    <Form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-16">
        <fieldset>
          <legend className="text-2xl font-bold">Sujets qui vous intéressent</legend>

          <Field name="interest" type="string[]">
            {(_, passthru) => (
              <ul className="mt-4 flex flex-wrap gap-4">
                <li>
                  <ToggleField _label="Accompagnement" {...passthru} />
                </li>
                <li>
                  <ToggleField _label="Audit" {...passthru} />
                </li>
                <li>
                  <ToggleField _label="Développement" {...passthru} />
                </li>
                <li>
                  <ToggleField _label="Formations" {...passthru} />
                </li>
                <li>
                  <ToggleField _label="Partenariat" {...passthru} />
                </li>
                <li>
                  <ToggleField _label="Autre" {...passthru} />
                </li>
              </ul>
            )}
          </Field>
        </fieldset>

        <fieldset className="flex flex-col gap-4">
          <legend className="text-2xl font-bold">Dites-nous en plus sur vous</legend>

          <p className="mt-4">Tous les champs sont obligatoires.</p>

          <div className="flex gap-8 [&_[data-field]]:basis-1/2">
            <Field name="firstName" transform={toTrimmed({ on: "blur" })}>
              {(field, passthru) => (
                <TextInputField
                  _error={field.error}
                  _label="Prénom"
                  type="text"
                  value={field.value.value ?? ""}
                  required
                  {...passthru}
                />
              )}
            </Field>

            <Field name="lastName" transform={toTrimmed({ on: "blur" })}>
              {(field, passthru) => (
                <TextInputField
                  _error={field.error}
                  _label="Nom de famille"
                  type="text"
                  value={field.value.value ?? ""}
                  required
                  {...passthru}
                />
              )}
            </Field>
          </div>

          <Field name="email" transform={toTrimmed({ on: "blur" })}>
            {(field, passthru) => (
              <TextInputField
                _error={field.error}
                _label="Adresse e-mail"
                type="email"
                value={field.value.value ?? ""}
                required
                {...passthru}
              />
            )}
          </Field>

          <Field name="phoneNumber" transform={toTrimmed({ on: "blur" })}>
            {(field, passthru) => (
              <TextInputField
                _error={field.error}
                _label="Numéro de téléphone"
                type="tel"
                value={field.value.value ?? ""}
                required
                {...passthru}
              />
            )}
          </Field>

          <Field name="message" transform={toTrimmed({ on: "blur" })}>
            {(field, passthru) => (
              <TextAreaField
                _error={field.error}
                _label="Message"
                rows={5}
                value={field.value.value ?? ""}
                required
                {...passthru}
              />
            )}
          </Field>

          <Field name="consent" type="boolean">
            {(field, passthru) => (
              <CheckboxField
                _error={field.error}
                _label={
                  <>
                    En cochant cette case, vous acceptez notre{" "}
                    <Link
                      _color="transparent"
                      _shape="link"
                      className="inline-flex underline focus-visible:outline-black"
                      href="#"
                    >
                      politique de confidentialité
                    </Link>
                    .
                  </>
                }
                required
                {...passthru}
              />
            )}
          </Field>
        </fieldset>
      </div>

      <Button _color="blue-900" className="self-center" type="submit">
        Envoyer votre message
      </Button>
    </Form>
  );
};
