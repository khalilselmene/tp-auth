"use client";

import { useState } from "react";
import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <main className="flex flex-col items-center gap-4 pt-24">
      <h1 className="text-2xl font-bold">
        {mode === "login" ? "Connexion" : "Créer un compte"}
      </h1>

      <AuthForm mode={mode} />

      <button
        type="button"
        onClick={() =>
          setMode(mode === "login" ? "register" : "login")
        }
        className="underline"
      >
        {mode === "login"
          ? "Créer un compte"
          : "Déjà un compte ? Se connecter"}
      </button>
    </main>
  );
}