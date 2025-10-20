import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { Textarea } from "./ui/textarea";

export default function FieldFieldset() {
  return (
    <div className="w-full space-y-6">
      <FieldSet>
        <FieldGroup>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Field>
              <FieldLabel htmlFor="organisation">نام سازمان</FieldLabel>
              <Input id="organisation" type="text" placeholder="Nimbus Labs" />
            </Field>
            <Field>
              <FieldLabel htmlFor="domain">دامنه سفارشی</FieldLabel>
              <Input id="domain" type="text" placeholder="iot.example.com" />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="webhook">Webhook</FieldLabel>
            <Input
              id="webhook"
              type="text"
              placeholder="https://api.example.com/hooks/iot"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="webhook">API کلید</FieldLabel>
            <InputGroup>
              <InputGroupInput type="password" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton className="mx-1" variant="secondary">
                  کپی
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="explanation">توضیحات</FieldLabel>
            <Textarea
              id="explanation"
              placeholder="سیاست نگهداری داده، محدوده های هشدار و غیره"
              rows={4}
            />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
