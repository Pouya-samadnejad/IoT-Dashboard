import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";

export default function SettingsForm() {
  const [text, setText] = useState("");

  async function handleCopy() {
    if (!text.trim()) {
      toast.error("متن خالی است!");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      toast.success("کپی شد");
    } catch (err) {
      console.error("خطا در کپی:", err);
      toast.error("خطا در کپی");
    }
  }
  const generatePassword = (length = 12) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  function handleSubmite(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    console.log("🧾 داده‌های فرم:", data);

    toast.loading("در حال ارسال اطلاعات...");

    setTimeout(() => {
      toast.dismiss();
      toast.success("اطلاعات با موفقیت ثبت شد (دمو)");
      console.log("Form Data:", JSON.stringify(data, null, 2));
    }, 1500);
  }

  return (
    <form className="w-full space-y-6" onSubmit={handleSubmite}>
      <FieldSet>
        <FieldGroup>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Field>
              <FieldLabel htmlFor="organisation">نام سازمان</FieldLabel>
              <Input
                id="organisation"
                name="organisation"
                type="text"
                placeholder="Nimbus Labs"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="domain">دامنه سفارشی</FieldLabel>
              <Input
                id="domain"
                name="domain"
                type="text"
                placeholder="iot.example.com"
              />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="webhook">Webhook</FieldLabel>
            <Input
              id="webhook"
              type="text"
              name="webhook"
              placeholder="https://api.example.com/hooks/iot"
            />
          </Field>
          <Field className="flex">
            <FieldLabel htmlFor="webhook">API کلید</FieldLabel>
            <InputGroup>
              <InputGroupInput
                type="password"
                value={text}
                name="password"
                onChange={(e) => setText(e.target.value)}
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  className="mx-1"
                  variant="secondary"
                  onClick={handleCopy}
                >
                  کپی
                </InputGroupButton>
                <InputGroupButton
                  className="mx-1"
                  variant="default"
                  onClick={() => setText(generatePassword())}
                >
                  ساخت پسورد
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="explanation">توضیحات</FieldLabel>
            <Textarea
              id="explanation"
              name="explanation"
              placeholder="سیاست نگهداری داده، محدوده های هشدار و غیره"
              rows={4}
            />
          </Field>
        </FieldGroup>
      </FieldSet>
      <Toaster position="top-center" />
      <Button type="submit">ثبت</Button>
    </form>
  );
}
